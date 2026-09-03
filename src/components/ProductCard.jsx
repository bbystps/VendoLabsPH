import { Link } from 'react-router'
import {
  ArrowUpRight,
  CheckCircle2,
  Package,
} from 'lucide-react'

import { formatCurrency } from '../utils/formatCurrency'

export default function ProductCard({
  product,
}) {
  const variants =
    product.variants ?? []

  const availableVariants =
    variants.filter(
      (variant) =>
        Number(variant.stock) > 0,
    )

  const inStock =
    availableVariants.length > 0

  const prices =
    variants
      .map((variant) =>
        Number(variant.price),
      )
      .filter(
        (price) =>
          !Number.isNaN(price),
      )

  const lowestPrice =
    prices.length > 0
      ? Math.min(...prices)
      : 0

  const totalStock =
    variants.reduce(
      (total, variant) =>
        total +
        Number(
          variant.stock || 0,
        ),
      0,
    )

  const image =
    product.image_url ||
    product.image ||
    '/placeholder-product.png'

  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-white/20">

      {/* Product image */}
      <Link
        to={`/products/${product.slug}`}
        className="block"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">

          <img
            src={image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />

          {/* Category */}
          {product.category && (
            <div className="absolute left-4 top-4">
              <span className="rounded-full border border-white/10 bg-slate-950/80 px-3 py-1.5 text-xs font-semibold text-slate-300 backdrop-blur">
                {product.category}
              </span>
            </div>
          )}

          {/* Stock badge */}
          <div className="absolute right-4 top-4">
            {inStock ? (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-300 backdrop-blur">
                <CheckCircle2
                  size={14}
                />

                In Stock
              </span>
            ) : (
              <span className="rounded-full border border-red-400/20 bg-red-400/10 px-3 py-1.5 text-xs font-semibold text-red-300 backdrop-blur">
                Out of Stock
              </span>
            )}
          </div>

        </div>
      </Link>

      {/* Product information */}
      <div className="p-5">

        <div className="flex items-start justify-between gap-4">

          <div className="min-w-0">

            <Link
              to={`/products/${product.slug}`}
              className="block"
            >
              <h3 className="truncate text-lg font-bold text-white transition hover:text-[var(--color-amber)]">
                {product.name}
              </h3>
            </Link>

            <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-400">

              <span className="inline-flex items-center gap-1.5">
                <Package
                  size={14}
                />

                {variants.length}{' '}
                {variants.length === 1
                  ? 'variant'
                  : 'variants'}
              </span>

              <span>
                {totalStock}{' '}
                {totalStock === 1
                  ? 'unit'
                  : 'units'}{' '}
                total
              </span>

            </div>

          </div>

        </div>

        {/* Description */}
        {product.description && (
          <p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-400">
            {product.description}
          </p>
        )}

        {/* Price + action */}
        <div className="mt-6 flex items-end justify-between gap-4 border-t border-white/10 pt-5">

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              {variants.length > 1
                ? 'Starting from'
                : 'Price'}
            </p>

            <div className="mt-1 flex items-baseline gap-1">

              {variants.length > 1 && (
                <span className="text-sm font-medium text-slate-500">
                  From
                </span>
              )}

              <strong className="text-2xl font-bold text-[var(--color-amber)]">
                {formatCurrency(
                  lowestPrice,
                )}
              </strong>

            </div>

          </div>

          <Link
            to={`/products/${product.slug}`}
            className="group/button inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[var(--color-amber)] px-4 py-3 text-sm font-bold text-[var(--color-deep-teal)] transition hover:-translate-y-0.5 hover:brightness-110"
          >
            View Options

            <ArrowUpRight
              size={17}
              className="transition-transform group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
            />
          </Link>

        </div>

      </div>

    </article>
  )
}