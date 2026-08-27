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

import { formatCurrency } from '../utils/formatCurrency'

function OrderSuccess() {
  const {
    orderNumber,
  } = useParams()

  const location = useLocation()

  const order =
    location.state?.order

  /*
   * For now the page expects the
   * newly-created order from Checkout.
   *
   * Later we can add:
   * GET /api/orders/{order_number}
   *
   * so refreshing this page can reload
   * the order from Laravel.
   */
  if (!order) {
    return (
      <Navigate
        to="/cart"
        replace
      />
    )
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white lg:px-8">
      <div className="mx-auto max-w-3xl">
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
                value={formatCurrency(
                  order.subtotal,
                )}
              />

              <InfoRow
                label="Shipping"
                value={formatCurrency(
                  order.shipping_fee,
                )}
              />

              <InfoRow
                label="Payment Method"
                value={
                  order.payment_method === 'cod'
                    ? 'Cash on Delivery'
                    : order.payment_method
                }
              />

              <InfoRow
                label="Payment Status"
                value={order.payment_status}
              />

              <InfoRow
                label="Order Status"
                value={order.order_status}
              />

              <div className="border-t border-white/10 pt-4">
                <InfoRow
                  label="Total"
                  value={formatCurrency(
                    order.total,
                  )}
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
                    We will add automatic
                    email notifications
                    after payment
                    integration is
                    completed.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
        {value}
      </span>
    </div>
  )
}

export default OrderSuccess