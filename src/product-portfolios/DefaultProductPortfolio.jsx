import { useState } from 'react'
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

  const variants =
    product.variants ?? []

  /*
   * Customer API already returns
   * active variants only.
   *
   * Select the first variant by default.
   */
  const [selectedVariantId, setSelectedVariantId] =
    useState(
      variants[0]?.id ?? null,
    )

  const selectedVariant =
    variants.find(
      (variant) =>
        variant.id === selectedVariantId,
    ) ??
    variants[0] ??
    null

  const stock =
    Number(
      selectedVariant?.stock,
    ) || 0

  const inStock =
    stock > 0

  /*
   * Prefer the selected variant image.
   * Fall back to the main product image.
   */
  const image =
    selectedVariant?.image_url ||
    product.image_url ||
    product.image ||
    '/placeholder-product.png'

  function handleAddToCart() {
    if (
      !selectedVariant ||
      !inStock
    ) {
      return
    }

    /*
     * We keep the parent product information,
     * but overwrite the sellable fields with
     * the chosen variant.
     *
     * CartContext will be upgraded in the
     * next step to use product_variant_id
     * as the cart-item identity.
     */
    addToCart({
      ...product,

      product_id:
        product.id,

      product_variant_id:
        selectedVariant.id,

      variant_id:
        selectedVariant.id,

      variant_name:
        selectedVariant.name,

      sku:
        selectedVariant.sku,

      price:
        selectedVariant.price,

      stock:
        selectedVariant.stock,

      image_url:
        selectedVariant.image_url ||
        product.image_url,

      /*
       * Keep the parent ID available for
       * backward compatibility for now.
       */
      id:
        product.id,
    })
  }

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

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">

            {/* Product / Variant image */}
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/20">

              <div className="aspect-[4/3]">

                <img
                  src={image}
                  alt={
                    selectedVariant
                      ? `${product.name} - ${selectedVariant.name}`
                      : product.name
                  }
                  className="h-full w-full object-cover"
                />

              </div>

            </div>

            {/* Product information */}
            <div>

              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-amber)]">
                {product.category}
              </p>

              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {product.name}
              </h1>

              {/* Selected variant info */}
              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">

                <span className="text-slate-400">
                  SKU:{' '}
                  {selectedVariant?.sku ??
                    '—'}
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

              {/* Variant selector */}
              {variants.length > 0 && (
                <div className="mt-8">

                  <div className="flex items-center justify-between gap-4">

                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Choose Variation
                    </p>

                    <span className="text-xs text-slate-500">
                      {variants.length}{' '}
                      {variants.length === 1
                        ? 'option'
                        : 'options'}
                    </span>

                  </div>

                  <div className="mt-3 grid gap-3 sm:grid-cols-2">

                    {variants.map(
                      (variant) => {
                        const isSelected =
                          selectedVariant?.id ===
                          variant.id

                        const variantStock =
                          Number(
                            variant.stock,
                          ) || 0

                        const variantInStock =
                          variantStock > 0

                        return (
                          <button
                            key={variant.id}
                            type="button"
                            onClick={() =>
                              setSelectedVariantId(
                                variant.id,
                              )
                            }
                            className={`rounded-2xl border p-4 text-left transition ${
                              isSelected
                                ? 'border-[var(--color-amber)] bg-[var(--color-amber)]/10 shadow-lg shadow-amber-950/20'
                                : 'border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.05]'
                            }`}
                          >

                            <div className="flex items-start justify-between gap-4">

                              <div>

                                <span className="block font-bold text-white">
                                  {variant.name}
                                </span>

                                <span className="mt-1 block text-xs text-slate-500">
                                  {variant.sku}
                                </span>

                              </div>

                              {isSelected && (
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-amber)] text-[var(--color-deep-teal)]">

                                  <Check
                                    size={14}
                                  />

                                </span>
                              )}

                            </div>

                            <div className="mt-4 flex items-end justify-between gap-3">

                              <strong className="text-lg text-[var(--color-amber)]">
                                {formatCurrency(
                                  variant.price,
                                )}
                              </strong>

                              <span
                                className={`text-xs font-semibold ${
                                  variantInStock
                                    ? 'text-emerald-300'
                                    : 'text-red-300'
                                }`}
                              >
                                {variantInStock
                                  ? `${variantStock} available`
                                  : 'Out of stock'}
                              </span>

                            </div>

                          </button>
                        )
                      },
                    )}

                  </div>

                </div>
              )}

              {/* Price */}
              <div className="mt-8">

                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Price
                </p>

                <strong className="mt-2 block text-4xl font-bold text-white">
                  {selectedVariant
                    ? formatCurrency(
                        selectedVariant.price,
                      )
                    : 'Unavailable'}
                </strong>

                {selectedVariant && (
                  <p className="mt-2 text-sm text-slate-500">
                    {selectedVariant.name}
                  </p>
                )}

              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-wrap gap-3">

                <button
                  type="button"
                  disabled={
                    !selectedVariant ||
                    !inStock
                  }
                  onClick={
                    handleAddToCart
                  }
                  className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-amber)] px-6 py-3.5 font-bold text-[var(--color-deep-teal)] transition hover:-translate-y-0.5 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ShoppingCart
                    size={19}
                  />

                  {!selectedVariant
                    ? 'Unavailable'
                    : inStock
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
                selectedVariant
                  ? inStock
                    ? `${stock} unit${
                        stock === 1
                          ? ''
                          : 's'
                      } of the ${
                        selectedVariant.name
                      } variation currently available.`
                    : `${selectedVariant.name} is currently out of stock.`
                  : 'No product variation is currently available.'
              }
            />

            <InfoCard
              title="Need Assistance?"
              description="Contact VendoLabsPH if you need help choosing the right variation or checking compatibility with your vending machine project."
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