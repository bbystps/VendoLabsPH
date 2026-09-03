import {
  useState,
} from 'react'

import {
  Link,
  Navigate,
  useNavigate,
} from 'react-router'

import {
  ArrowLeft,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  ShoppingBag,
  User,
} from 'lucide-react'

import { useCart } from '../context/CartContext'
import { createOrder } from '../services/orderApi'
import { formatCurrency } from '../utils/formatCurrency'

function Checkout() {
  const navigate = useNavigate()

  const {
    cartItems,
    subtotal,
    shippingFee,
    total,
    isCartEmpty,
    clearCart,
  } = useCart()

  const [formData, setFormData] =
    useState({
      customer_name: '',
      customer_email: '',
      customer_phone: '',

      address: '',
      barangay: '',
      city: '',
      province: '',
      postal_code: '',
    })

  const [errors, setErrors] =
    useState({})

  const [serverError, setServerError] =
    useState('')

  const [isSubmitting, setIsSubmitting] =
    useState(false)

  const [
    checkoutCompleted,
    setCheckoutCompleted,
  ] = useState(false)

  /*
   * Prevent manually opening /checkout
   * when there are no items.
   */
  if (
    isCartEmpty &&
    !isSubmitting &&
    !checkoutCompleted
  ) {
    return (
      <Navigate
        to="/cart"
        replace
      />
    )
  }

  const handleChange = (
    event,
  ) => {
    const {
      name,
      value,
    } = event.target

    setFormData(
      (current) => ({
        ...current,
        [name]: value,
      }),
    )

    setErrors(
      (current) => ({
        ...current,
        [name]: '',
      }),
    )
  }

  const validateForm = () => {
    const newErrors = {}

    if (
      !formData.customer_name.trim()
    ) {
      newErrors.customer_name =
        'Full name is required.'
    }

    if (
      !formData.customer_email.trim()
    ) {
      newErrors.customer_email =
        'Email address is required.'
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.customer_email,
      )
    ) {
      newErrors.customer_email =
        'Enter a valid email address.'
    }

    if (
      !formData.customer_phone.trim()
    ) {
      newErrors.customer_phone =
        'Mobile number is required.'
    }

    if (
      !formData.address.trim()
    ) {
      newErrors.address =
        'Address is required.'
    }

    if (
      !formData.city.trim()
    ) {
      newErrors.city =
        'City or municipality is required.'
    }

    if (
      !formData.province.trim()
    ) {
      newErrors.province =
        'Province is required.'
    }

    /*
     * Make sure every cart entry
     * has a valid variant before
     * sending anything to Laravel.
     */
    const invalidCartItem =
      cartItems.find(
        (item) =>
          !item.product_variant_id,
      )

    if (invalidCartItem) {
      newErrors.cart =
        'One or more cart items no longer have a valid product variation. Please remove them and add the product again.'
    }

    setErrors(newErrors)

    return (
      Object.keys(
        newErrors,
      ).length === 0
    )
  }

  const handleSubmit = async (
    event,
  ) => {
    event.preventDefault()

    setServerError('')

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      /*
       * IMPORTANT:
       *
       * The frontend sends only IDs
       * and quantities.
       *
       * Price, SKU, stock and totals
       * must be verified again by
       * Laravel using the database.
       */
      const items =
        cartItems.map(
          (item) => ({
            product_id:
              Number(
                item.product_id ??
                  item.id,
              ),

            product_variant_id:
              Number(
                item.product_variant_id,
              ),

            quantity:
              Number(
                item.quantity,
              ) || 1,
          }),
        )

      const orderData = {
        customer_name:
          formData.customer_name.trim(),

        customer_email:
          formData.customer_email.trim(),

        customer_phone:
          formData.customer_phone.trim(),

        address:
          formData.address.trim(),

        barangay:
          formData.barangay.trim() ||
          null,

        city:
          formData.city.trim(),

        province:
          formData.province.trim(),

        postal_code:
          formData.postal_code.trim() ||
          null,

        /*
         * COD is currently the only
         * supported payment method.
         */
        payment_method:
          'cod',

        items,
      }

      const response =
        await createOrder(
          orderData,
        )

      const completedOrder =
        response.order

      /*
      * IMPORTANT:
      *
      * Mark the checkout as completed BEFORE
      * clearing the cart.
      *
      * Otherwise the empty-cart protection
      * redirects us back to /cart.
      */
      setCheckoutCompleted(true)

      /*
      * Optional fallback for refreshing
      * the success page later.
      */
      sessionStorage.setItem(
        'vendolabs_last_order',
        JSON.stringify(
          completedOrder,
        ),
      )

      /*
      * Order was successfully created,
      * so clear the purchased items.
      */
      clearCart()

      /*
      * Go to success page.
      */
      navigate(
        `/order-success/${completedOrder.order_number}`,
        {
          replace: true,

          state: {
            order:
              completedOrder,
          },
        },
      )

      /*
       * Laravel validation errors.
       */
      if (
        error.status === 422 &&
        error.data?.errors
      ) {
        const laravelErrors =
          error.data.errors

        const mappedErrors = {}

        Object.entries(
          laravelErrors,
        ).forEach(
          ([
            field,
            messages,
          ]) => {
            mappedErrors[field] =
              Array.isArray(
                messages,
              )
                ? messages[0]
                : messages
          },
        )

        setErrors(
          mappedErrors,
        )
      } else {
        setServerError(
          error.message ||
            'Unable to create your order. Please try again.',
        )
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Header */}
      <section className="relative isolate overflow-hidden border-b border-white/5">

        <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.15),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.10),transparent_30%),linear-gradient(to_bottom,#020617,#071a1c)]" />

        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

          <Link
            to="/cart"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-[var(--color-amber)]"
          >
            <ArrowLeft
              size={17}
            />

            Back to Cart
          </Link>

          <p className="mt-8 text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-amber)]">
            Guest Checkout
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Checkout
          </h1>

          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            No customer account is
            required. Enter your
            contact and shipping
            information to place your
            Cash on Delivery order.
          </p>

        </div>

      </section>

      <section className="px-6 py-12 lg:px-8 lg:py-16">

        <form
          onSubmit={
            handleSubmit
          }
          className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1fr)_380px]"
        >

          {/* LEFT SIDE */}
          <div className="space-y-8">

            {serverError && (
              <div className="rounded-2xl border border-red-400/20 bg-red-400/10 p-5 text-sm text-red-200">
                {serverError}
              </div>
            )}

            {errors.cart && (
              <div className="rounded-2xl border border-red-400/20 bg-red-400/10 p-5 text-sm text-red-200">
                {errors.cart}
              </div>
            )}

            {/* Contact */}
            <CheckoutSection
              icon={User}
              title="Contact Information"
              description="We'll use these details for your order confirmation and delivery updates."
            >

              <div className="grid gap-5 sm:grid-cols-2">

                <FormField
                  label="Full Name"
                  name="customer_name"
                  value={
                    formData.customer_name
                  }
                  onChange={
                    handleChange
                  }
                  error={
                    errors.customer_name
                  }
                  placeholder="Juan Dela Cruz"
                  autoComplete="name"
                />

                <FormField
                  label="Email Address"
                  name="customer_email"
                  type="email"
                  value={
                    formData.customer_email
                  }
                  onChange={
                    handleChange
                  }
                  error={
                    errors.customer_email
                  }
                  placeholder="juan@example.com"
                  autoComplete="email"
                />

                <div className="sm:col-span-2">

                  <FormField
                    label="Mobile Number"
                    name="customer_phone"
                    type="tel"
                    value={
                      formData.customer_phone
                    }
                    onChange={
                      handleChange
                    }
                    error={
                      errors.customer_phone
                    }
                    placeholder="09171234567"
                    autoComplete="tel"
                  />

                </div>

              </div>

            </CheckoutSection>

            {/* Shipping */}
            <CheckoutSection
              icon={MapPin}
              title="Shipping Address"
              description="Enter the address where you want your VendoLabsPH order delivered."
            >

              <div className="grid gap-5 sm:grid-cols-2">

                <div className="sm:col-span-2">

                  <FormField
                    label="Street Address"
                    name="address"
                    value={
                      formData.address
                    }
                    onChange={
                      handleChange
                    }
                    error={
                      errors.address
                    }
                    placeholder="House number, street, subdivision"
                    autoComplete="street-address"
                  />

                </div>

                <FormField
                  label="Barangay"
                  name="barangay"
                  value={
                    formData.barangay
                  }
                  onChange={
                    handleChange
                  }
                  error={
                    errors.barangay
                  }
                  placeholder="Barangay"
                />

                <FormField
                  label="City / Municipality"
                  name="city"
                  value={
                    formData.city
                  }
                  onChange={
                    handleChange
                  }
                  error={
                    errors.city
                  }
                  placeholder="City or municipality"
                  autoComplete="address-level2"
                />

                <FormField
                  label="Province"
                  name="province"
                  value={
                    formData.province
                  }
                  onChange={
                    handleChange
                  }
                  error={
                    errors.province
                  }
                  placeholder="Province"
                  autoComplete="address-level1"
                />

                <FormField
                  label="Postal Code"
                  name="postal_code"
                  value={
                    formData.postal_code
                  }
                  onChange={
                    handleChange
                  }
                  error={
                    errors.postal_code
                  }
                  placeholder="2000"
                  autoComplete="postal-code"
                />

              </div>

            </CheckoutSection>

            {/* COD information */}
            <CheckoutSection
              icon={CheckCircle2}
              title="Payment Method"
              description="Cash on Delivery is currently available for VendoLabsPH orders."
            >

              <div className="rounded-2xl border border-[var(--color-amber)]/30 bg-[var(--color-amber)]/5 p-5">

                <div className="flex gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-amber)]/10 text-[var(--color-amber)]">
                    <ShoppingBag
                      size={21}
                    />
                  </div>

                  <div>

                    <p className="font-bold text-white">
                      Cash on Delivery
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      Pay for your order when
                      it is delivered. Your
                      order will be recorded
                      once Laravel confirms
                      that the selected
                      variants and quantities
                      are still available.
                    </p>

                  </div>

                </div>

              </div>

            </CheckoutSection>

          </div>

          {/* RIGHT SIDE */}
          <aside>

            <div className="sticky top-28 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-2xl shadow-black/20 backdrop-blur-xl">

              <div className="border-b border-white/10 p-6">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-amber)]/10 text-[var(--color-amber)]">

                    <ShoppingBag
                      size={21}
                    />

                  </div>

                  <div>

                    <h2 className="text-xl font-bold">
                      Your Order
                    </h2>

                    <p className="mt-1 text-xs text-slate-500">
                      Review before
                      placing your order
                    </p>

                  </div>

                </div>

              </div>

              {/* Products */}
              <div className="max-h-80 divide-y divide-white/10 overflow-y-auto">

                {cartItems.map(
                  (item) => {
                    const variantId =
                      item.product_variant_id ??
                      item.variant_id

                    const image =
                      item.image_url ||
                      item.image ||
                      '/placeholder-product.png'

                    const quantity =
                      Number(
                        item.quantity,
                      ) || 1

                    const lineTotal =
                      Number(
                        item.price,
                      ) *
                      quantity

                    return (
                      <div
                        key={
                          variantId
                        }
                        className="flex gap-4 p-5"
                      >

                        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-slate-950">

                          <img
                            src={
                              image
                            }
                            alt={`${item.name} - ${
                              item.variant_name ??
                              ''
                            }`}
                            className="h-full w-full object-cover"
                          />

                        </div>

                        <div className="min-w-0 flex-1">

                          <p className="truncate text-sm font-semibold text-white">
                            {item.name}
                          </p>

                          {item.variant_name && (
                            <p className="mt-1 text-xs font-semibold text-[var(--color-amber)]">
                              {
                                item.variant_name
                              }
                            </p>
                          )}

                          <p className="mt-1 text-xs text-slate-500">
                            SKU:{' '}
                            {item.sku}
                          </p>

                          <p className="mt-1 text-xs text-slate-500">
                            Qty:{' '}
                            {
                              quantity
                            }
                          </p>

                          <p className="mt-2 text-sm font-bold text-slate-300">
                            {formatCurrency(
                              lineTotal,
                            )}
                          </p>

                        </div>

                      </div>
                    )
                  },
                )}

              </div>

              {/* Totals */}
              <div className="space-y-4 border-t border-white/10 p-6">

                <SummaryRow
                  label="Subtotal"
                  value={formatCurrency(
                    subtotal,
                  )}
                />

                <SummaryRow
                  label="Shipping"
                  value={formatCurrency(
                    shippingFee,
                  )}
                />

                <div className="border-t border-white/10 pt-5">

                  <div className="flex items-end justify-between gap-4">

                    <div>

                      <p className="font-semibold">
                        Total
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        PHP
                      </p>

                    </div>

                    <strong className="text-3xl font-bold text-[var(--color-amber)]">
                      {formatCurrency(
                        total,
                      )}
                    </strong>

                  </div>

                </div>

                <button
                  type="submit"
                  disabled={
                    isSubmitting
                  }
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-amber)] px-5 py-4 font-bold text-[var(--color-deep-teal)] transition hover:-translate-y-0.5 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
                >

                  {isSubmitting
                    ? 'Placing Order...'
                    : 'Place COD Order'}

                </button>

                <div className="flex gap-3 rounded-xl border border-emerald-400/10 bg-emerald-400/5 p-4">

                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-emerald-400"
                  />

                  <p className="text-xs leading-5 text-slate-400">
                    Product variation,
                    price and available
                    stock will be verified
                    again by the server
                    before your order is
                    accepted.
                  </p>

                </div>

              </div>

            </div>

          </aside>

        </form>

      </section>

    </main>
  )
}


function CheckoutSection({
  icon: Icon,
  title,
  description,
  children,
}) {
  return (
    <section className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 shadow-xl shadow-black/10">

      <div className="border-b border-white/10 p-6">

        <div className="flex gap-4">

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-amber)]/10 text-[var(--color-amber)]">

            <Icon size={21} />

          </div>

          <div>

            <h2 className="text-xl font-bold">
              {title}
            </h2>

            <p className="mt-1 text-sm leading-6 text-slate-500">
              {description}
            </p>

          </div>

        </div>

      </div>

      <div className="p-6">
        {children}
      </div>

    </section>
  )
}


function FormField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  error,
  placeholder,
  autoComplete,
}) {
  return (
    <label className="block">

      <span className="mb-2 block text-sm font-semibold text-slate-300">
        {label}
      </span>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={
          placeholder
        }
        autoComplete={
          autoComplete
        }
        className={`w-full rounded-xl border bg-slate-950/70 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 ${
          error
            ? 'border-red-400/60 focus:border-red-400'
            : 'border-white/10 focus:border-[var(--color-amber)]/60'
        }`}
      />

      {error && (
        <span className="mt-2 block text-xs text-red-300">
          {error}
        </span>
      )}

    </label>
  )
}


function SummaryRow({
  label,
  value,
}) {
  return (
    <div className="flex items-center justify-between text-sm">

      <span className="text-slate-400">
        {label}
      </span>

      <span className="font-semibold text-white">
        {value}
      </span>

    </div>
  )
}

export default Checkout