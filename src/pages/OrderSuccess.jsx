import {
  useMemo,
} from 'react'

import {
  Link,
  Navigate,
  useLocation,
  useParams,
} from 'react-router'

import {
  CheckCircle2,
  Mail,
  ShoppingBag,
} from 'lucide-react'

import {
  formatCurrency,
} from '../utils/formatCurrency'

function OrderSuccess() {
  const {
    orderNumber,
  } = useParams()

  const location =
    useLocation()

  /*
   * First try React Router state.
   *
   * If it isn't available, fall back
   * to the latest completed order
   * stored in this browser tab.
   */
  const order =
    useMemo(() => {
      if (
        location.state?.order
      ) {
        return (
          location.state.order
        )
      }

      try {
        const savedOrder =
          sessionStorage.getItem(
            'vendolabs_last_order',
          )

        if (!savedOrder) {
          return null
        }

        const parsedOrder =
          JSON.parse(
            savedOrder,
          )

        /*
         * Make sure we do not display
         * a different previous order.
         */
        if (
          parsedOrder
            ?.order_number !==
          orderNumber
        ) {
          return null
        }

        return parsedOrder
      } catch (error) {
        console.error(
          'Unable to restore completed order:',
          error,
        )

        return null
      }
    }, [
      location.state,
      orderNumber,
    ])

  if (!order) {
    return (
      <Navigate
        to="/cart"
        replace
      />
    )
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white lg:px-8 lg:py-20">

      <div className="mx-auto max-w-3xl">

        {/* Success notification */}
        <div className="mb-6 flex items-start gap-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">

          <CheckCircle2
            size={24}
            className="mt-0.5 shrink-0 text-emerald-400"
          />

          <div>

            <p className="font-bold text-emerald-300">
              Order placed successfully!
            </p>

            <p className="mt-1 text-sm leading-6 text-slate-300">
              Your Cash on Delivery order has been received.
              A confirmation email has also been sent to you.
            </p>

          </div>

        </div>

        <section className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-2xl shadow-black/20">

          <div className="p-8 text-center sm:p-12">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/10 text-emerald-400">

              <CheckCircle2
                size={38}
              />

            </div>

            <p className="mt-8 text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-amber)]">
              Order Confirmed
            </p>

            <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
              Your COD order has been received.
            </h1>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-400">
              Your order has been successfully placed.
              Please prepare the payment when your
              order is delivered.
            </p>

            <div className="mx-auto mt-8 max-w-md rounded-2xl border border-white/10 bg-slate-950/60 p-6">

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Order Number
              </p>

              <p className="mt-2 text-2xl font-bold text-[var(--color-amber)]">
                {orderNumber}
              </p>

              <div className="mt-6 text-sm font-semibold text-emerald-300">
                Cash on Delivery
              </div>

            </div>

          </div>

          <div className="border-t border-white/10 p-6 sm:p-8">

            {/* Ordered items */}
            {order.items?.length > 0 && (
              <div className="mb-8">

                <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                  Items Ordered
                </p>

                <div className="divide-y divide-white/10 rounded-2xl border border-white/10">

                  {order.items.map(
                    (item) => (
                      <div
                        key={
                          item.id ??
                          item.product_variant_id
                        }
                        className="flex items-start justify-between gap-4 p-4"
                      >

                        <div>

                          <p className="font-semibold text-white">
                            {item.product_name}
                          </p>

                          {item.variant_name && (
                            <p className="mt-1 text-sm font-semibold text-[var(--color-amber)]">
                              {item.variant_name}
                            </p>
                          )}

                          <p className="mt-1 text-xs text-slate-500">
                            SKU: {item.sku}
                          </p>

                          <p className="mt-1 text-xs text-slate-500">
                            Quantity:{' '}
                            {item.quantity}
                          </p>

                        </div>

                        <strong className="shrink-0 text-white">
                          {formatCurrency(
                            item.subtotal,
                          )}
                        </strong>

                      </div>
                    ),
                  )}

                </div>

              </div>
            )}

            <div className="space-y-4">

              <InfoRow
                label="Customer"
                value={
                  order.customer_name
                }
              />

              <InfoRow
                label="Email"
                value={
                  order.customer_email
                }
              />

              <InfoRow
                label="Subtotal"
                value={
                  formatCurrency(
                    order.subtotal,
                  )
                }
              />

              <InfoRow
                label="Shipping"
                value={
                  formatCurrency(
                    order.shipping_fee,
                  )
                }
              />

              <InfoRow
                label="Payment Method"
                value={
                  order.payment_method ===
                  'cod'
                    ? 'Cash on Delivery'
                    : order.payment_method
                }
              />

              <InfoRow
                label="Payment Status"
                value={
                  capitalize(
                    order.payment_status,
                  )
                }
              />

              <InfoRow
                label="Order Status"
                value={
                  capitalize(
                    order.order_status,
                  )
                }
              />

              <div className="border-t border-white/10 pt-4">

                <InfoRow
                  label="Total"
                  value={
                    formatCurrency(
                      order.total,
                    )
                  }
                  strong
                />

              </div>

            </div>

            <div className="mt-8 rounded-2xl border border-sky-400/10 bg-sky-400/5 p-5">

              <div className="flex gap-3">

                <Mail
                  size={19}
                  className="mt-0.5 shrink-0 text-sky-400"
                />

                <div>

                  <p className="font-semibold">
                    Email confirmation
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    We sent your order confirmation
                    and tracking link to{' '}

                    <span className="font-semibold text-white">
                      {
                        order.customer_email
                      }
                    </span>
                    .
                  </p>

                </div>

              </div>

            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              {order.public_token && (
                <Link
                  to={`/track-order/${order.public_token}`}
                  className="inline-flex flex-1 items-center justify-center rounded-xl bg-[var(--color-amber)] px-5 py-3.5 font-bold text-[var(--color-deep-teal)] transition hover:brightness-110"
                >
                  View Order Status
                </Link>
              )}

              <Link
                to="/products"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 px-5 py-3.5 font-semibold transition hover:bg-white/5"
              >

                <ShoppingBag
                  size={18}
                />

                Continue Shopping

              </Link>

            </div>

          </div>

        </section>

      </div>

    </main>
  )
}


function InfoRow({
  label,
  value,
  strong = false,
}) {
  return (
    <div className="flex items-center justify-between gap-6">

      <span className="text-sm text-slate-400">
        {label}
      </span>

      <span
        className={
          strong
            ? 'text-xl font-bold text-[var(--color-amber)]'
            : 'text-sm font-semibold text-white'
        }
      >
        {value ?? '—'}
      </span>

    </div>
  )
}


function capitalize(
  value,
) {
  if (!value) {
    return '—'
  }

  return (
    value
      .charAt(0)
      .toUpperCase() +
    value.slice(1)
  )
}

export default OrderSuccess