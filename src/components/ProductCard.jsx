import { Link } from 'react-router'

import {
  ArrowUpRight,
  Check,
  ShoppingCart,
} from 'lucide-react'

import { useCart } from '../context/CartContext'
import { formatCurrency } from '../utils/formatCurrency'

export default function ProductCard({
  product,
}) {
  const { addToCart } = useCart()

  const stock = Number(product.stock) || 0
  const inStock = stock > 0

  const handleAddToCart = (event) => {
    event.preventDefault()
    event.stopPropagation()

    if (!inStock) {
      return
    }

    addToCart(product)
  }

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-xl shadow-black/10 backdrop-blur-sm transition duration-300 hover:-translate-y-1.5 hover:border-[var(--color-amber)]/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
      {/* Product image */}
      <Link
        to={`/products/${product.slug}`}
        className="relative block aspect-[4/3] overflow-hidden bg-slate-950"
      >
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-70" />

        <img
          src={
            product.image_url ||
            product.image ||
            '/placeholder-product.png'
          }
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* View icon */}
        <span className="absolute right-4 top-4 z-20 flex h-10 w-10 translate-y-1 items-center justify-center rounded-xl border border-white/10 bg-slate-950/70 text-white opacity-0 backdrop-blur-md transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight size={18} />
        </span>

        {/* Availability */}
        {inStock ? (
          <span className="absolute bottom-4 left-4 z-20 inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-300 backdrop-blur-md">
            <Check
              size={12}
              strokeWidth={3}
            />

            In Stock
          </span>
        ) : (
          <span className="absolute bottom-4 left-4 z-20 rounded-full border border-red-400/20 bg-red-400/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-red-300 backdrop-blur-md">
            Out of Stock
          </span>
        )}
      </Link>

      {/* Card body */}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-amber)]">
          {product.category}
        </p>

        <Link
          to={`/products/${product.slug}`}
          className="mt-3 block"
        >
          <h3 className="text-xl font-bold leading-snug text-white transition duration-200 hover:text-[var(--color-amber)]">
            {product.name}
          </h3>
        </Link>

        <p className="mt-2 text-xs font-medium text-slate-500">
          SKU: {product.sku}
        </p>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-400">
          {product.description}
        </p>

        {/* Price and button */}
        <div className="mt-auto flex items-end justify-between gap-4 pt-7">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Price
            </p>

            <strong className="mt-1 block text-xl font-bold text-white sm:text-2xl">
              {formatCurrency(product.price)}
            </strong>
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            disabled={!inStock}
            aria-label={
              inStock
                ? `Add ${product.name} to cart`
                : `${product.name} is out of stock`
            }
            className="group/button inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[var(--color-amber)] px-4 py-3 text-sm font-bold text-[var(--color-deep-teal)] shadow-[0_0_25px_rgba(245,158,11,0.12)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_0_30px_rgba(245,158,11,0.25)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:brightness-100"
          >
            <ShoppingCart
              size={17}
              strokeWidth={2.3}
              className="transition-transform duration-300 group-hover/button:-rotate-6 group-hover/button:scale-110"
            />

            <span>
              {inStock
                ? 'Add'
                : 'Sold Out'}
            </span>
          </button>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--color-amber)]/40 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
    </article>
  )
}