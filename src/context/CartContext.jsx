import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

const CartContext = createContext(null)

const STORAGE_KEY = 'vendoboards_cart'
const SHIPPING_FEE = 150

function getInitialCart() {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    const savedCart = window.localStorage.getItem(STORAGE_KEY)

    if (!savedCart) {
      return []
    }

    const parsedCart = JSON.parse(savedCart)

    return Array.isArray(parsedCart) ? parsedCart : []
  } catch (error) {
    console.error('Unable to load cart from localStorage:', error)
    return []
  }
}

function normalizeQuantity(quantity) {
  const numericQuantity = Number(quantity)

  if (!Number.isFinite(numericQuantity)) {
    return 1
  }

  return Math.max(1, Math.floor(numericQuantity))
}

function getProductStock(product) {
  const stock = Number(product?.stock)

  if (!Number.isFinite(stock)) {
    return Number.POSITIVE_INFINITY
  }

  return Math.max(0, Math.floor(stock))
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(getInitialCart)

  /*
   * Save cart whenever it changes.
   */
  useEffect(() => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(cartItems),
      )
    } catch (error) {
      console.error(
        'Unable to save cart to localStorage:',
        error,
      )
    }
  }, [cartItems])

  /*
   * Add product to cart.
   */
  const addToCart = useCallback((product, quantity = 1) => {
    if (!product?.id) {
      console.error(
        'Cannot add product without an id:',
        product,
      )
      return
    }

    const maximumQuantity = getProductStock(product)

    /*
     * Prevent adding products with zero stock.
     */
    if (maximumQuantity <= 0) {
      console.warn(
        `${product.name || 'Product'} is out of stock.`,
      )
      return
    }

    const quantityToAdd = Math.min(
      normalizeQuantity(quantity),
      maximumQuantity,
    )

    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id === product.id,
      )

      /*
       * Product already exists in cart.
       * Increase its quantity.
       */
      if (existingItem) {
        return currentItems.map((item) => {
          if (item.id !== product.id) {
            return item
          }

          const currentQuantity =
            Number(item.quantity) || 1

          const nextQuantity = Math.min(
            currentQuantity + quantityToAdd,
            maximumQuantity,
          )

          return {
            ...item,

            /*
             * Refresh product information using the
             * latest product received from the database.
             */
            ...product,

            quantity: nextQuantity,
          }
        })
      }

      /*
       * New product.
       */
      return [
        ...currentItems,
        {
          ...product,
          quantity: quantityToAdd,
        },
      ]
    })
  }, [])

  /*
   * Remove one product completely.
   */
  const removeFromCart = useCallback((productId) => {
    setCartItems((currentItems) =>
      currentItems.filter(
        (item) => item.id !== productId,
      ),
    )
  }, [])

  /*
   * Change product quantity.
   */
  const updateQuantity = useCallback(
    (productId, quantity) => {
      const numericQuantity = Number(quantity)

      if (!Number.isFinite(numericQuantity)) {
        return
      }

      /*
       * Quantity 0 removes the product.
       */
      if (numericQuantity <= 0) {
        setCartItems((currentItems) =>
          currentItems.filter(
            (item) => item.id !== productId,
          ),
        )

        return
      }

      setCartItems((currentItems) =>
        currentItems.map((item) => {
          if (item.id !== productId) {
            return item
          }

          const maximumQuantity =
            getProductStock(item)

          return {
            ...item,
            quantity: Math.min(
              Math.max(
                1,
                Math.floor(numericQuantity),
              ),
              maximumQuantity,
            ),
          }
        }),
      )
    },
    [],
  )

  /*
   * Remove all products.
   */
  const clearCart = useCallback(() => {
    setCartItems([])
  }, [])

  /*
   * Calculate subtotal.
   */
  const subtotal = useMemo(() => {
    return cartItems.reduce((total, item) => {
      const price = Number(item.price) || 0
      const quantity = Number(item.quantity) || 0

      return total + price * quantity
    }, 0)
  }, [cartItems])

  /*
   * Number displayed in navbar cart badge.
   *
   * Example:
   * Board A x 2
   * Board B x 3
   *
   * itemCount = 5
   */
  const itemCount = useMemo(() => {
    return cartItems.reduce((total, item) => {
      return (
        total +
        (Number(item.quantity) || 0)
      )
    }, 0)
  }, [cartItems])

  const shippingFee =
    subtotal > 0 ? SHIPPING_FEE : 0

  const total = subtotal + shippingFee

  const isCartEmpty = cartItems.length === 0

  const value = useMemo(
    () => ({
      cartItems,
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
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error(
      'useCart must be used inside CartProvider',
    )
  }

  return context
}