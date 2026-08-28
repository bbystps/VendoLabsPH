import {
  useEffect,
  useState,
} from 'react'

import {
  Link,
  useParams,
} from 'react-router'

import {
  Check,
  Clock3,
  Package,
  PackageCheck,
  ShoppingBag,
  Truck,
} from 'lucide-react'

import {
  getTrackedOrder,
} from '../services/orderApi'

import {
  formatCurrency,
} from '../utils/formatCurrency'

const ORDER_STEPS = [
  {
    key: 'pending',
    label: 'Order Placed',
  },
  {
    key: 'confirmed',
    label: 'Confirmed',
  },
  {
    key: 'packing',
    label: 'Packing',
  },
  {
    key: 'shipped',
    label: 'Shipped',
  },
  {
    key: 'delivered',
    label: 'Delivered',
  },
]

function OrderTracking() {
  const { token } = useParams()

  const [order, setOrder] =
    useState(null)

  const [loading, setLoading] =
    useState(true)

  const [error, setError] =
    useState('')

  useEffect(() => {
    async function loadOrder() {
      try {
        setLoading(true)
        setError('')

        const response =
          await getTrackedOrder(token)

        setOrder(response.order)
      } catch (err) {
        setError(
          err.message ||
            'Unable to load order.',
        )
      } finally {
        setLoading(false)
      }
    }

    loadOrder()
  }, [token])

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          Loading order...
        </div>
      </main>
    )
  }

  if (error || !order) {
    return (
      <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold">
            Order not found
          </h1>

          <p className="mt-4 text-slate-400">
            {error}
          </p>

          <Link
            to="/"
            className="mt-8 inline-block rounded-xl bg-[var(--color-amber)] px-6 py-3 font-bold text-slate-950"
          >
            Back to Home
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white lg:px-8">
      <div className="mx-auto max-w-5xl">

        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-amber)]">
          Order Tracking
        </p>

        <h1 className="mt-3 text-4xl font-bold">
          {order.order_number}
        </h1>

        <p className="mt-3 text-slate-400">
          Track the current status of
          your VendoLabsPH purchase.
        </p>

        <div className="mt-10 rounded-3xl border border-white/10 bg-slate-900/70 p-6 sm:p-8">

          <OrderTimeline
            status={order.order_status}
          />

        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">

          <section className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">

            <h2 className="text-xl font-bold">
              Order Information
            </h2>

            <div className="mt-6 space-y-4">
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
                  order.payment_status
                }
              />

              <InfoRow
                label="Order Status"
                value={
                  order.order_status
                }
              />

              <InfoRow
                label="Total"
                value={formatCurrency(
                  order.total,
                )}
              />
            </div>

          </section>

          <section className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">

            <h2 className="text-xl font-bold">
              Shipping
            </h2>

            {order.order_status ===
            'shipped' ||
            order.order_status ===
            'delivered' ? (
              <div className="mt-6 space-y-4">
                <InfoRow
                  label="Courier"
                  value={
                    order.courier ||
                    'Not available'
                  }
                />

                <InfoRow
                  label="Tracking Number"
                  value={
                    order.tracking_number ||
                    'Not available'
                  }
                />

                {order.tracking_url && (
                  <a
                    href={
                      order.tracking_url
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-amber)]"
                  >
                    <Truck size={17} />

                    Track with courier
                  </a>
                )}
              </div>
            ) : (
              <p className="mt-6 text-sm leading-6 text-slate-400">
                Courier and tracking
                information will appear
                here once your order has
                been shipped.
              </p>
            )}

          </section>

        </div>

        <section className="mt-8 rounded-3xl border border-white/10 bg-slate-900/70 p-6">

          <h2 className="text-xl font-bold">
            Items
          </h2>

          <div className="mt-6 divide-y divide-white/10">

            {order.items.map(
              (item) => (
                <div
                  key={`${item.sku}-${item.product_name}`}
                  className="flex items-center justify-between gap-6 py-4"
                >
                  <div>
                    <p className="font-semibold">
                      {item.product_name}
                    </p>

                    <p className="mt-1 text-sm text-slate-400">
                      {item.quantity} ×{' '}
                      {formatCurrency(
                        item.price,
                      )}
                    </p>
                  </div>

                  <p className="font-semibold">
                    {formatCurrency(
                      item.subtotal,
                    )}
                  </p>
                </div>
              ),
            )}

          </div>

        </section>

      </div>
    </main>
  )
}

function OrderTimeline({
  status,
}) {
  const currentIndex =
    ORDER_STEPS.findIndex(
      (step) =>
        step.key === status,
    )

  return (
    <div className="grid gap-5 sm:grid-cols-5">

      {ORDER_STEPS.map(
        (step, index) => {
          const completed =
            index <= currentIndex

          return (
            <div
              key={step.key}
              className="text-center"
            >
              <div
                className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full border ${
                  completed
                    ? 'border-emerald-400 bg-emerald-400/10 text-emerald-400'
                    : 'border-white/10 bg-slate-950 text-slate-600'
                }`}
              >
                {completed ? (
                  <Check size={20} />
                ) : (
                  <Clock3 size={20} />
                )}
              </div>

              <p
                className={`mt-3 text-sm font-semibold ${
                  completed
                    ? 'text-white'
                    : 'text-slate-600'
                }`}
              >
                {step.label}
              </p>
            </div>
          )
        },
      )}

    </div>
  )
}

function InfoRow({
  label,
  value,
}) {
  return (
    <div className="flex justify-between gap-6">
      <span className="text-sm text-slate-400">
        {label}
      </span>

      <span className="text-right text-sm font-semibold capitalize">
        {value}
      </span>
    </div>
  )
}

export default OrderTracking