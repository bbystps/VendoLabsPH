import { useMemo, useState } from 'react'
import {
  PackageSearch,
  Search,
  SlidersHorizontal,
  X,
} from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { categories, products } from '../data/products'

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filteredProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase()

    return products.filter((product) => {
      const matchesCategory =
        activeCategory === 'All' || product.category === activeCategory

      const searchableText = [
        product.name,
        product.shortDescription,
        product.description,
        product.category,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()

      const matchesSearch =
        normalizedSearch === '' || searchableText.includes(normalizedSearch)

      return matchesCategory && matchesSearch
    })
  }, [activeCategory, search])

  const clearFilters = () => {
    setSearch('')
    setActiveCategory('All')
  }

  const hasActiveFilters =
    search.trim() !== '' || activeCategory !== 'All'

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Page hero */}
      <section className="relative isolate overflow-hidden border-b border-white/5">
        <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.18),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.12),transparent_30%),linear-gradient(to_bottom,#020617,#071a1c)]" />

        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:48px_48px]" />

        <div className="pointer-events-none absolute left-1/2 top-10 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--color-amber)]/10 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-amber)]/25 bg-[var(--color-amber)]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-amber)]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--color-amber)] shadow-[0_0_12px_var(--color-amber)]" />
              Product Catalog
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Vendo Board{' '}
              <span className="bg-gradient-to-r from-[var(--color-amber)] to-yellow-200 bg-clip-text text-transparent">
                Products
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Browse main controllers, expansion boards, and starter kits
              designed for water vendo, carwash, coffee, and custom vending
              machine projects.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 backdrop-blur-sm">
                <span className="font-bold text-[var(--color-amber)]">
                  {products.length}
                </span>{' '}
                products
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 backdrop-blur-sm">
                <span className="font-bold text-[var(--color-amber)]">
                  {Math.max(categories.length - 1, 0)}
                </span>{' '}
                categories
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 backdrop-blur-sm">
                Modular and expandable
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product catalog */}
      <section className="relative px-6 py-20 lg:px-8 lg:py-24">
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-teal-500/5 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[var(--color-amber)]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          {/* Filters */}
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-6">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--color-amber)]/20 bg-[var(--color-amber)]/10 text-[var(--color-amber)]">
                    <SlidersHorizontal size={21} />
                  </div>

                  <div>
                    <h2 className="font-bold text-white">
                      Find the right board
                    </h2>

                    <p className="mt-1 text-sm text-slate-400">
                      Search by name, description, or product category.
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-400">
                  Showing{' '}
                  <span className="font-bold text-white">
                    {filteredProducts.length}
                  </span>{' '}
                  of{' '}
                  <span className="font-bold text-white">
                    {products.length}
                  </span>{' '}
                  products
                </p>
              </div>

              {/* Search field */}
              <div className="relative">
                <Search
                  size={19}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  type="search"
                  placeholder="Search products, modules, or applications..."
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-slate-950/70 py-3.5 pl-12 pr-12 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[var(--color-amber)]/50 focus:ring-4 focus:ring-[var(--color-amber)]/10"
                />

                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch('')}
                    aria-label="Clear product search"
                    className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-slate-500 transition hover:bg-white/10 hover:text-white"
                  >
                    <X size={17} />
                  </button>
                )}
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const isActive = activeCategory === category

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={`rounded-xl border px-4 py-2.5 text-sm font-semibold transition duration-300 ${
                        isActive
                          ? 'border-[var(--color-amber)] bg-[var(--color-amber)] text-[var(--color-deep-teal)] shadow-[0_0_20px_rgba(245,158,11,0.18)]'
                          : 'border-white/10 bg-white/[0.04] text-slate-300 hover:border-[var(--color-amber)]/30 hover:bg-white/[0.08] hover:text-white'
                      }`}
                    >
                      {category}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Product results */}
          {filteredProducts.length > 0 ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="mt-10 flex min-h-[380px] flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-white/[0.025] px-6 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--color-amber)]/20 bg-[var(--color-amber)]/10 text-[var(--color-amber)]">
                <PackageSearch size={30} />
              </div>

              <h2 className="mt-6 text-2xl font-bold text-white">
                No products found
              </h2>

              <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">
                No products match your current search and category. Try a
                different keyword or clear the active filters.
              </p>

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[var(--color-amber)] px-5 py-3 text-sm font-bold text-[var(--color-deep-teal)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110"
                >
                  <X size={17} />
                  Clear Filters
                </button>
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}