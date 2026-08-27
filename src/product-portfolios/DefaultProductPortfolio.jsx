import { Link } from 'react-router'

import {
  ArrowLeft,
  Check,
  Package,
  ShoppingCart,
} from 'lucide-react'

import { useCart } from '../context/CartContext'
import { formatCurrency } from '../utils/formatCurrency'

export default function DefaultProductPortfolio({
  product,
}) {
  const { addToCart } = useCart()

  const stock = Number(product.stock) || 0
  const inStock = stock > 0

  const image =
    product.image_url ||
    product.image ||
    '/placeholder-product.png'

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative isolate overflow-hidden px-6 py-16 lg:px-8 lg:py-20">
        <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.15),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.12),transparent_30%),linear-gradient(to_bottom,#020617,#071a1c)]" />

        <div className="mx-auto max-w-7xl">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-[var(--color-amber)]"
          >
            <ArrowLeft size={17} />

            Back to Products
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            {/* Image */}
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/20">
              <div className="aspect-[4/3]">
                <img
                  src={image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Information */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-amber)]">
                {product.category}
              </p>

              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {product.name}
              </h1>

              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
                <span className="text-slate-400">
                  SKU: {product.sku}
                </span>

                <span className="text-slate-600">
                  •
                </span>

                {inStock ? (
                  <span className="inline-flex items-center gap-1.5 text-emerald-300">
                    <Check size={15} />

                    {stock} in stock
                  </span>
                ) : (
                  <span className="text-red-300">
                    Out of stock
                  </span>
                )}
              </div>

              {product.description && (
                <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
                  {product.description}
                </p>
              )}

              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Price
                </p>

                <strong className="mt-2 block text-4xl font-bold text-white">
                  {formatCurrency(
                    product.price,
                  )}
                </strong>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  disabled={!inStock}
                  onClick={() =>
                    addToCart(product)
                  }
                  className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-amber)] px-6 py-3.5 font-bold text-[var(--color-deep-teal)] transition hover:-translate-y-0.5 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ShoppingCart
                    size={19}
                  />

                  {inStock
                    ? 'Add to Cart'
                    : 'Out of Stock'}
                </button>

                <Link
                  to="/support"
                  className="inline-flex items-center rounded-xl border border-white/15 px-6 py-3.5 font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
                >
                  Ask About Product
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Generic information section */}
      <section className="border-t border-white/5 bg-white/[0.02] px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            <InfoCard
              title="Product Information"
              description="This is the standard VendoLabsPH product page. A dedicated product portfolio can be created for this product later."
            />

            <InfoCard
              title="Availability"
              description={
                inStock
                  ? `${stock} unit${
                      stock === 1 ? '' : 's'
                    } currently available.`
                  : 'This product is currently out of stock.'
              }
            />

            <InfoCard
              title="Need Assistance?"
              description="Contact VendoLabsPH if you need help checking compatibility with your vending machine project."
            />
          </div>
        </div>
      </section>
    </main>
  )
}

function InfoCard({
  title,
  description,
}) {
  return (
    <article className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-amber)]/10 text-[var(--color-amber)]">
        <Package size={20} />
      </div>

      <h2 className="mt-5 text-lg font-bold">
        {title}
      </h2>

      <p className="mt-3 text-sm leading-6 text-slate-400">
        {description}
      </p>
    </article>
  )
}