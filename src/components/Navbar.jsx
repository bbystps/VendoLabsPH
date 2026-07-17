import { useState } from 'react'
import { NavLink } from 'react-router'
import { Menu, ShoppingCart, X } from 'lucide-react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Replace this with your actual cart item count later.
  const cartItemCount = 2

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Applications', path: '/applications' },
    { name: 'Docs', path: '/docs' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Support', path: '/support' },
  ]

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--color-deep-teal)]/85 backdrop-blur-xl">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-amber)] to-transparent opacity-70" />

      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        {/* Logo */}
        <NavLink
          to="/"
          onClick={closeMenu}
          className="group flex shrink-0 items-center gap-3"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-xl bg-[var(--color-amber)] opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-40" />

            <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-white/15 bg-white/10">
              <img
                src="/logo-dark.png"
                alt="VendoLabPH logo"
                className="h-9 w-9 object-contain"
              />
            </div>
          </div>

          <div className="leading-none">
            <p className="text-lg font-bold tracking-tight text-white">
              Vendo
              <span className="text-[var(--color-amber)]">Labs</span>
              PH
            </p>

            <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.24em] text-white/45">
              Vendo Controller Boards
            </p>
          </div>
        </NavLink>

        {/* Desktop navigation */}
        <div className="hidden items-center lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative rounded-xl px-3 py-2 text-sm transition-all duration-300 ${
                  isActive
                    ? 'bg-white/10 font-semibold text-[var(--color-amber)] shadow-sm'
                    : 'font-medium text-white/65 hover:bg-white/[0.06] hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  {isActive && (
                    <span className="absolute -bottom-1 h-0.5 rounded-full bg-[var(--color-amber)] shadow-[0_0_10px_var(--color-amber)]" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Right-side actions */}
        <div className="flex items-center gap-2">
          {/* Cart button */}
          <NavLink
            to="/cart"
            onClick={closeMenu}
            aria-label={`Shopping cart with ${cartItemCount} items`}
            className={({ isActive }) =>
              `group relative flex items-center gap-2 rounded-xl border px-3.5 py-2.5 text-sm font-semibold transition-all duration-300 sm:px-4 ${
                isActive
                  ? 'border-[var(--color-amber)] bg-[var(--color-amber)] text-[var(--color-deep-teal)] shadow-[0_0_20px_rgba(245,158,11,0.25)]'
                  : 'border-white/10 bg-white/[0.06] text-white hover:border-[var(--color-amber)]/50 hover:bg-white/10'
              }`
            }
          >
            <ShoppingCart
              size={19}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
            />

            <span className="hidden sm:inline">Cart</span>

            {cartItemCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--color-amber)] px-1 text-[10px] font-bold text-[var(--color-deep-teal)] ring-2 ring-[var(--color-deep-teal)]">
                {cartItemCount}
              </span>
            )}
          </NavLink>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-white transition hover:border-[var(--color-amber)]/40 hover:bg-white/10 lg:hidden"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-[var(--color-deep-teal)]/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          isMenuOpen
            ? 'max-h-[600px] opacity-100'
            : 'pointer-events-none max-h-0 opacity-0'
        }`}
      >
        <div className="mx-auto grid max-w-7xl gap-1 px-5 py-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `flex items-center justify-between rounded-xl px-4 py-3 text-sm transition-all duration-200 ${
                  isActive
                    ? 'bg-[var(--color-amber)]/10 font-semibold text-[var(--color-amber)]'
                    : 'font-medium text-white/70 hover:bg-white/[0.06] hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{link.name}</span>

                  {isActive && (
                    <span className="h-2 w-2 rounded-full bg-[var(--color-amber)] shadow-[0_0_10px_var(--color-amber)]" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Navbar