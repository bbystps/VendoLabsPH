import { Link } from 'react-router'
import {
  ArrowUpRight,
  CircuitBoard,
  Mail,
  MapPin,
} from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const shopLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Cart', path: '/cart' },
    { name: 'Checkout', path: '/checkout' },
  ]

  const learnLinks = [
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Applications', path: '/applications' },
    { name: 'Documentation', path: '/docs' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Support', path: '/support' },
    { name: 'About', path: '/about' },
  ]

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950 text-white">
      {/* Background effects */}
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-teal-500/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[var(--color-amber)]/5 blur-3xl" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.7fr_1fr]">
          {/* Brand section */}
          <div>
            <Link
              to="/"
              className="group inline-flex items-center gap-3"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-xl bg-[var(--color-amber)] opacity-0 blur-md transition duration-300 group-hover:opacity-30" />

                <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.05]">
                  <img
                    src="/logo-dark.png"
                    alt="VendoBoard logo"
                    className="h-10 w-10 object-contain"
                  />
                </div>
              </div>

              <div>
                <p className="text-xl font-bold tracking-tight text-white">
                  Vendo
                  <span className="text-[var(--color-amber)]">Board</span>
                </p>

                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.24em] text-white/40">
                  Powered by VendoLab PH
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
              Modular controller boards for water vendo, carwash vendo,
              multipurpose vending systems, and custom electronics projects.
              Build your machine around one scalable control platform.
            </p>

            <div className="mt-7 space-y-3 text-sm text-slate-400">
              <a
                href="mailto:support@vendolab.ph"
                className="group flex w-fit items-center gap-3 transition hover:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-[var(--color-amber)]">
                  <Mail size={16} />
                </span>

                support@vendolab.ph
              </a>

              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-[var(--color-amber)]">
                  <MapPin size={16} />
                </span>

                Philippines
              </div>
            </div>
          </div>

          {/* Shop links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
              Shop
            </h3>

            <div className="mt-6 flex flex-col gap-3">
              {shopLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="group flex w-fit items-center gap-1.5 text-sm text-slate-400 transition duration-200 hover:text-[var(--color-amber)]"
                >
                  {link.name}

                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Learn links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
              Learn
            </h3>

            <div className="mt-6 flex flex-col gap-3">
              {learnLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="group flex w-fit items-center gap-1.5 text-sm text-slate-400 transition duration-200 hover:text-[var(--color-amber)]"
                >
                  {link.name}

                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--color-amber)]/20 bg-[var(--color-amber)]/10 text-[var(--color-amber)]">
                <CircuitBoard size={22} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-white">
                Start your next build
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Browse controller boards and expansion modules designed for
                practical vending machine projects.
              </p>

              <Link
                to="/products"
                className="group mt-5 inline-flex items-center gap-2 rounded-xl bg-[var(--color-amber)] px-4 py-2.5 text-sm font-bold text-[var(--color-deep-teal)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110"
              >
                Browse Products

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-6 text-slate-500">
            © {currentYear} VendoLab PH. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/YOUR_PAGE"
              target="_blank"
              rel="noreferrer"
              aria-label="VendoLab PH Facebook page"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-400 transition duration-200 hover:border-[var(--color-amber)]/30 hover:bg-[var(--color-amber)]/10 hover:text-[var(--color-amber)]"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-4 w-4 fill-current"
              >
                <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12Z" />
              </svg>
            </a>

            <Link
              to="/privacy"
              className="text-xs text-slate-500 transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-xs text-slate-500 transition hover:text-white"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-amber)]/60 to-transparent" />
    </footer>
  )
}