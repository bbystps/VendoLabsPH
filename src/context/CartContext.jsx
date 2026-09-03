import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

const CartContext =
  createContext(null)

const STORAGE_KEY =
  'vendoboards_cart'

const SHIPPING_FEE =
  150

function getInitialCart() {
  if (
    typeof window ===
    'undefined'
  ) {
    return []
  }

  try {
    const savedCart =
      window.localStorage.getItem(
        STORAGE_KEY,
      )

    if (!savedCart) {
      return []
    }

    const parsedCart =
      JSON.parse(savedCart)

    if (
      !Array.isArray(
        parsedCart,
      )
    ) {
      return []
    }

    /*
     * Old cart entries created before
     * variants were introduced do not have
     * product_variant_id.
     *
     * Remove those old incompatible items
     * instead of allowing bad checkout data.
     */
    return parsedCart.filter(
      (item) =>
        item.product_variant_id,
    )
  } catch (error) {
    console.error(
      'Unable to load cart from localStorage:',
      error,
    )

    return []
  }
}

function normalizeQuantity(
  quantity,
) {
  const numericQuantity =
    Number(quantity)

  if (
    !Number.isFinite(
      numericQuantity,
    )
  ) {
    return 1
  }

  return Math.max(
    1,
    Math.floor(
      numericQuantity,
    ),
  )
}

function getProductStock(
  product,
) {
  const stock =
    Number(product?.stock)

  if (
    !Number.isFinite(stock)
  ) {
    return 0
  }

  return Math.max(
    0,
    Math.floor(stock),
  )
}

function getCartItemKey(
  item,
) {
  return Number(
    item?.product_variant_id ??
      item?.variant_id ??
      0,
  )
}

export function CartProvider({
  children,
}) {
  const [
    cartItems,
    setCartItems,
  ] = useState(
    getInitialCart,
  )

  const [
    cartNotice,
    setCartNotice,
  ] = useState(null)

  const showCartNotice =
    useCallback(
      (message) => {
        setCartNotice(message)

        window.clearTimeout(
          window.__cartNoticeTimer,
        )

        window.__cartNoticeTimer =
          window.setTimeout(
            () => {
              setCartNotice(null)
            },
            3000,
          )
      },
      [],
    )

  /*
   * Save the cart whenever it changes.
   */
  useEffect(() => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(
          cartItems,
        ),
      )
    } catch (error) {
      console.error(
        'Unable to save cart to localStorage:',
        error,
      )
    }
  }, [cartItems])

  /*
   * Add one selected product variant
   * to the cart.
   */
  const addToCart =
    useCallback(
      (
        product,
        quantity = 1,
      ) => {
        const variantId =
          getCartItemKey(
            product,
          )

        if (!variantId) {
          console.error(
            'Cannot add product without a product_variant_id:',
            product,
          )

          return
        }

        const productId =
          Number(
            product.product_id ??
              product.id,
          )

        if (!productId) {
          console.error(
            'Cannot add variant without a parent product id:',
            product,
          )

          return
        }

        const maximumQuantity =
          getProductStock(
            product,
          )

        /*
         * Prevent adding an
         * out-of-stock variant.
         */
        if (
          maximumQuantity <= 0
        ) {
          console.warn(
            `${
              product.name ||
              'Product'
            } - ${
              product.variant_name ||
              'Variant'
            } is out of stock.`,
          )

          return
        }

        const quantityToAdd =
          Math.min(
            normalizeQuantity(
              quantity,
            ),
            maximumQuantity,
          )

        showCartNotice(
          `${product.name} - ${
            product.variant_name
          } added to cart.`,
        )

        setCartItems(
          (currentItems) => {
            const existingItem =
              currentItems.find(
                (item) =>
                  getCartItemKey(
                    item,
                  ) ===
                  variantId,
              )

            /*
             * Same variant already exists.
             * Increase quantity.
             */
            if (
              existingItem
            ) {
              return currentItems.map(
                (item) => {
                  if (
                    getCartItemKey(
                      item,
                    ) !==
                    variantId
                  ) {
                    return item
                  }

                  const currentQuantity =
                    Number(
                      item.quantity,
                    ) || 1

                  const nextQuantity =
                    Math.min(
                      currentQuantity +
                        quantityToAdd,
                      maximumQuantity,
                    )

                  return {
                    ...item,

                    /*
                     * Refresh variant/product
                     * information from the
                     * latest API response.
                     */
                    ...product,

                    product_id:
                      productId,

                    product_variant_id:
                      variantId,

                    variant_id:
                      variantId,

                    quantity:
                      nextQuantity,
                  }
                },
              )
            }

            /*
             * New variant.
             */
            return [
              ...currentItems,

              {
                ...product,

                product_id:
                  productId,

                product_variant_id:
                  variantId,

                variant_id:
                  variantId,

                quantity:
                  quantityToAdd,
              },
            ]
          },
        )
      },
      [showCartNotice],
    )

  /*
   * Remove one variant completely.
   */
  const removeFromCart =
    useCallback(
      (variantId) => {
        const normalizedId =
          Number(variantId)

        setCartItems(
          (currentItems) =>
            currentItems.filter(
              (item) =>
                getCartItemKey(
                  item,
                ) !==
                normalizedId,
            ),
        )
      },
      [],
    )

  /*
   * Change quantity for a specific
   * variant.
   */
  const updateQuantity =
    useCallback(
      (
        variantId,
        quantity,
      ) => {
        const normalizedId =
          Number(variantId)

        const numericQuantity =
          Number(quantity)

        if (
          !Number.isFinite(
            numericQuantity,
          )
        ) {
          return
        }

        /*
         * Quantity zero removes
         * the selected variant.
         */
        if (
          numericQuantity <= 0
        ) {
          setCartItems(
            (currentItems) =>
              currentItems.filter(
                (item) =>
                  getCartItemKey(
                    item,
                  ) !==
                  normalizedId,
              ),
          )

          return
        }

        setCartItems(
          (currentItems) =>
            currentItems.map(
              (item) => {
                if (
                  getCartItemKey(
                    item,
                  ) !==
                  normalizedId
                ) {
                  return item
                }

                const maximumQuantity =
                  getProductStock(
                    item,
                  )

                return {
                  ...item,

                  quantity:
                    Math.min(
                      Math.max(
                        1,
                        Math.floor(
                          numericQuantity,
                        ),
                      ),
                      maximumQuantity,
                    ),
                }
              },
            ),
        )
      },
      [],
    )

  const clearCart =
    useCallback(() => {
      setCartItems([])
    }, [])

  const subtotal =
    useMemo(() => {
      return cartItems.reduce(
        (
          total,
          item,
        ) => {
          const price =
            Number(
              item.price,
            ) || 0

          const quantity =
            Number(
              item.quantity,
            ) || 0

          return (
            total +
            price * quantity
          )
        },
        0,
      )
    }, [cartItems])

  const itemCount =
    useMemo(() => {
      return cartItems.reduce(
        (
          total,
          item,
        ) => {
          return (
            total +
            (Number(
              item.quantity,
            ) || 0)
          )
        },
        0,
      )
    }, [cartItems])

  const shippingFee =
    subtotal > 0
      ? SHIPPING_FEE
      : 0

  const total =
    subtotal +
    shippingFee

  const isCartEmpty =
    cartItems.length === 0

  const value =
    useMemo(
      () => ({
        cartItems,
        cartNotice,

        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,

        subtotal,
        shippingFee,
        total,
        itemCount,
        isCartEmpty,
      }),
      [
        cartItems,
        cartNotice,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        subtotal,
        shippingFee,
        total,
        itemCount,
        isCartEmpty,
      ],
    )

  return (
    <CartContext.Provider
      value={value}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context =
    useContext(
      CartContext,
    )

  if (!context) {
    throw new Error(
      'useCart must be used inside CartProvider',
    )
  }

  return context
}