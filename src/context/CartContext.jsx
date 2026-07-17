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

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(getInitialCart)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems))
    } catch (error) {
      console.error('Unable to save cart to localStorage:', error)
    }
  }, [cartItems])

  const addToCart = useCallback((product, quantity = 1) => {
    if (!product?.id) {
      console.error('Cannot add product without an id:', product)
      return
    }

    const quantityToAdd = normalizeQuantity(quantity)

    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id === product.id,
      )

      if (existingItem) {
        return currentItems.map((item) => {
          if (item.id !== product.id) {
            return item
          }

          const nextQuantity = item.quantity + quantityToAdd

          const maximumQuantity =
            typeof product.stock === 'number'
              ? product.stock
              : Number.POSITIVE_INFINITY

          return {
            ...item,
            quantity: Math.min(nextQuantity, maximumQuantity),
          }
        })
      }

      const maximumQuantity =
        typeof product.stock === 'number'
          ? product.stock
          : Number.POSITIVE_INFINITY

      return [
        ...currentItems,
        {
          ...product,
          quantity: Math.min(quantityToAdd, maximumQuantity),
        },
      ]
    })
  }, [])

  const removeFromCart = useCallback((productId) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== productId),
    )
  }, [])

  const updateQuantity = useCallback((productId, quantity) => {
    const numericQuantity = Number(quantity)

    if (!Number.isFinite(numericQuantity)) {
      return
    }

    if (numericQuantity <= 0) {
      setCartItems((currentItems) =>
        currentItems.filter((item) => item.id !== productId),
      )
      return
    }

    setCartItems((currentItems) =>
      currentItems.map((item) => {
        if (item.id !== productId) {
          return item
        }

        const maximumQuantity =
          typeof item.stock === 'number'
            ? item.stock
            : Number.POSITIVE_INFINITY

        return {
          ...item,
          quantity: Math.min(
            Math.floor(numericQuantity),
            maximumQuantity,
          ),
        }
      }),
    )
  }, [])

  const clearCart = useCallback(() => {
    setCartItems([])
  }, [])

  const subtotal = useMemo(() => {
    return cartItems.reduce((total, item) => {
      const price = Number(item.price) || 0
      const quantity = Number(item.quantity) || 0

      return total + price * quantity
    }, 0)
  }, [cartItems])

  const itemCount = useMemo(() => {
    return cartItems.reduce((total, item) => {
      return total + (Number(item.quantity) || 0)
    }, 0)
  }, [cartItems])

  const shippingFee = subtotal > 0 ? SHIPPING_FEE : 0
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
    throw new Error('useCart must be used inside CartProvider')
  }

  return context
}