import { Link } from 'react-router'

import {
  ArrowLeft,
  ArrowRight,
  Minus,
  Package,
  Plus,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Trash2,
  Truck,
} from 'lucide-react'

import { useCart } from '../context/CartContext'
import { formatCurrency } from '../utils/formatCurrency'

function Cart() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    shippingFee,
    total,
    itemCount,
    isCartEmpty,
  } = useCart()

  if (isCartEmpty) {
    return (
      <main className="min-h-screen bg-slate-950 text-white">

        <section className="relative isolate overflow-hidden px-6 py-24 lg:px-8">

          <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.15),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.12),transparent_30%),linear-gradient(to_bottom,#020617,#071a1c)]" />

          <div className="mx-auto flex min-h-[500px] max-w-3xl items-center justify-center">

            <div className="w-full rounded-3xl border border-white/10 bg-slate-900/70 p-8 text-center shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-12">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-[var(--color-amber)]/20 bg-[var(--color-amber)]/10 text-[var(--color-amber)]">

                <ShoppingCart size={36} />

              </div>

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-amber)]">
                Your Cart
              </p>

              <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Your cart is empty
              </h1>

              <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-400">
                You haven't added any VendoLabsPH products yet.
                Browse our available controller boards and vending
                solutions to get started.
              </p>

              <Link
                to="/products"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[var(--color-amber)] px-6 py-3.5 font-bold text-[var(--color-deep-teal)] transition hover:-translate-y-0.5 hover:brightness-110"
              >
                <ShoppingBag size={19} />
                Browse Products
              </Link>

            </div>

          </div>

        </section>

      </main>
    )
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Header */}
      <section className="relative isolate overflow-hidden border-b border-white/5">

        <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.15),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.10),transparent_30%),linear-gradient(to_bottom,#020617,#071a1c)]" />

        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">

          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-[var(--color-amber)]"
          >
            <ArrowLeft size={17} />
            Continue Shopping
          </Link>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-amber)]">
                Shopping Cart
              </p>

              <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                Your Cart
              </h1>

              <p className="mt-3 text-slate-400">
                {itemCount}{' '}
                {itemCount === 1
                  ? 'item'
                  : 'items'}{' '}
                currently selected.
              </p>

            </div>

            <button
              type="button"
              onClick={clearCart}
              className="inline-flex w-fit items-center gap-2 rounded-xl border border-red-400/20 bg-red-400/5 px-4 py-2.5 text-sm font-semibold text-red-300 transition hover:border-red-400/40 hover:bg-red-400/10"
            >
              <Trash2 size={17} />
              Clear Cart
            </button>

          </div>

        </div>

      </section>

      {/* Cart content */}
      <section className="px-6 py-12 lg:px-8 lg:py-16">

        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">

          {/* LEFT */}
          <div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 shadow-xl shadow-black/10">

              <div className="hidden border-b border-white/10 px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-slate-500 md:grid md:grid-cols-[minmax(0,1fr)_140px_130px_120px_40px] md:gap-4">

                <span>Product</span>

                <span className="text-center">
                  Quantity
                </span>

                <span className="text-right">
                  Price
                </span>

                <span className="text-right">
                  Total
                </span>

                <span />

              </div>

              <div className="divide-y divide-white/10">

                {cartItems.map((item) => {
                  const variantId =
                    item.product_variant_id ??
                    item.variant_id

                  const stock =
                    Number(item.stock) || 0

                  const quantity =
                    Number(item.quantity) || 1

                  const lineTotal =
                    (Number(item.price) || 0) *
                    quantity

                  const image =
                    item.image_url ||
                    item.image ||
                    '/placeholder-product.png'

                  return (
                    <article
                      key={variantId}
                      className="grid gap-5 p-5 md:grid-cols-[minmax(0,1fr)_140px_130px_120px_40px] md:items-center md:gap-4 md:p-6"
                    >

                      {/* Product */}
                      <div className="flex min-w-0 gap-4">

                        <Link
                          to={`/products/${item.slug}`}
                          className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-slate-950 sm:h-28 sm:w-28"
                        >
                          <img
                            src={image}
                            alt={`${item.name} - ${item.variant_name ?? ''}`}
                            className="h-full w-full object-cover transition duration-300 hover:scale-105"
                          />
                        </Link>

                        <div className="min-w-0 py-1">

                          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-amber)]">
                            {item.category}
                          </p>

                          <Link
                            to={`/products/${item.slug}`}
                            className="mt-2 block font-bold leading-snug text-white transition hover:text-[var(--color-amber)] sm:text-lg"
                          >
                            {item.name}
                          </Link>

                          {/* Variant */}
                          {item.variant_name && (
                            <div className="mt-2">

                              <span className="inline-flex rounded-lg border border-[var(--color-amber)]/20 bg-[var(--color-amber)]/10 px-2.5 py-1 text-xs font-semibold text-[var(--color-amber)]">
                                {item.variant_name}
                              </span>

                            </div>
                          )}

                          <p className="mt-2 text-xs text-slate-500">
                            SKU: {item.sku}
                          </p>

                          <p
                            className={`mt-2 text-xs ${
                              stock > 0
                                ? 'text-slate-400'
                                : 'text-red-300'
                            }`}
                          >
                            {stock > 0
                              ? `${stock} available`
                              : 'Out of stock'}
                          </p>

                          {/* Mobile price */}
                          <p className="mt-3 font-bold text-white md:hidden">
                            {formatCurrency(
                              item.price,
                            )}
                          </p>

                        </div>

                      </div>

                      {/* Quantity */}
                      <div>

                        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500 md:hidden">
                          Quantity
                        </p>

                        <div className="flex w-fit items-center rounded-xl border border-white/10 bg-slate-950/70 p-1">

                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(
                                variantId,
                                quantity - 1,
                              )
                            }
                            aria-label={`Decrease quantity of ${item.name} ${item.variant_name ?? ''}`}
                            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-300 transition hover:bg-white/10 hover:text-white"
                          >
                            <Minus size={16} />
                          </button>

                          <span className="min-w-10 px-2 text-center text-sm font-bold text-white">
                            {quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(
                                variantId,
                                quantity + 1,
                              )
                            }
                            disabled={
                              stock <= 0 ||
                              quantity >= stock
                            }
                            aria-label={`Increase quantity of ${item.name} ${item.variant_name ?? ''}`}
                            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-300 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                          >
                            <Plus size={16} />
                          </button>

                        </div>

                        {stock > 0 &&
                          quantity >= stock && (
                            <p className="mt-2 text-xs text-[var(--color-amber)]">
                              Max stock reached
                            </p>
                          )}

                      </div>

                      {/* Unit price */}
                      <div className="hidden text-right md:block">

                        <p className="font-semibold text-slate-300">
                          {formatCurrency(
                            item.price,
                          )}
                        </p>

                      </div>

                      {/* Line total */}
                      <div>

                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 md:hidden">
                          Item Total
                        </p>

                        <p className="mt-1 font-bold text-white md:mt-0 md:text-right">
                          {formatCurrency(
                            lineTotal,
                          )}
                        </p>

                      </div>

                      {/* Remove */}
                      <div className="flex md:justify-end">

                        <button
                          type="button"
                          onClick={() =>
                            removeFromCart(
                              variantId,
                            )
                          }
                          aria-label={`Remove ${item.name} ${item.variant_name ?? ''} from cart`}
                          className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 transition hover:bg-red-400/10 hover:text-red-300"
                        >
                          <Trash2 size={18} />
                        </button>

                      </div>

                    </article>
                  )
                })}

              </div>

            </div>

            <Link
              to="/products"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-[var(--color-amber)]"
            >
              <ArrowLeft size={17} />
              Continue Shopping
            </Link>

          </div>

          {/* RIGHT */}
          <aside>

            <div className="sticky top-28 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-2xl shadow-black/20 backdrop-blur-xl">

              <div className="border-b border-white/10 p-6">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-amber)]/10 text-[var(--color-amber)]">
                    <ShoppingBag size={21} />
                  </div>

                  <div>

                    <h2 className="text-xl font-bold">
                      Order Summary
                    </h2>

                    <p className="mt-1 text-xs text-slate-500">
                      {itemCount}{' '}
                      {itemCount === 1
                        ? 'item'
                        : 'items'}
                    </p>

                  </div>

                </div>

              </div>

              <div className="space-y-4 p-6">

                <div className="flex items-center justify-between text-sm">

                  <span className="text-slate-400">
                    Subtotal
                  </span>

                  <span className="font-semibold text-white">
                    {formatCurrency(
                      subtotal,
                    )}
                  </span>

                </div>

                <div className="flex items-center justify-between text-sm">

                  <span className="text-slate-400">
                    Shipping
                  </span>

                  <span className="font-semibold text-white">
                    {formatCurrency(
                      shippingFee,
                    )}
                  </span>

                </div>

                <div className="border-t border-white/10 pt-5">

                  <div className="flex items-end justify-between">

                    <div>

                      <p className="text-sm font-semibold text-white">
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

                <Link
                  to="/checkout"
                  className="group mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-amber)] px-5 py-4 font-bold text-[var(--color-deep-teal)] transition hover:-translate-y-0.5 hover:brightness-110"
                >
                  Proceed to Checkout

                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <p className="text-center text-xs leading-5 text-slate-500">
                  No account registration required.
                </p>

              </div>

              <div className="space-y-4 border-t border-white/10 bg-white/[0.02] p-6">

                <div className="flex gap-3">

                  <ShieldCheck
                    size={19}
                    className="mt-0.5 shrink-0 text-emerald-400"
                  />

                  <div>

                    <p className="text-sm font-semibold text-white">
                      Secure checkout
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Product pricing and stock will be
                      verified by the server before the
                      order is created.
                    </p>

                  </div>

                </div>

                <div className="flex gap-3">

                  <Truck
                    size={19}
                    className="mt-0.5 shrink-0 text-[var(--color-amber)]"
                  />

                  <div>

                    <p className="text-sm font-semibold text-white">
                      Shipping
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Shipping information will be
                      collected during checkout.
                    </p>

                  </div>

                </div>

                <div className="flex gap-3">

                  <Package
                    size={19}
                    className="mt-0.5 shrink-0 text-sky-400"
                  />

                  <div>

                    <p className="text-sm font-semibold text-white">
                      Variant stock protected
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Quantity is limited by the stock
                      available for the selected product
                      variation.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </aside>

        </div>

      </section>

    </main>
  )
}

export default Cart