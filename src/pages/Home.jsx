import { Link } from 'react-router'
import {
  ArrowRight,
  Cpu,
  Layers3,
  ShieldCheck,
  ShoppingBag,
  CircuitBoard,
  Coins,
  RadioTower,
  Zap,
} from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function Home() {
  const featuredProducts = products.slice(0, 3)

  const features = [
    {
      title: 'Main Controller',
      description:
        'Handles the core logic of the vendo machine, including coin input, timing, sensors, and output control.',
      icon: Cpu,
    },
    {
      title: 'Expandable Modules',
      description:
        'Add input and output boards when your machine needs additional pumps, valves, buttons, sensors, or relays.',
      icon: Layers3,
    },
    {
      title: 'Business Ready',
      description:
        'Designed for practical machine builds, organized wiring, reliable operation, and future product upgrades.',
      icon: ShieldCheck,
    },
    {
      title: 'Buy Online',
      description:
        'Customers can browse products, add boards to their cart, and proceed through your online purchasing flow.',
      icon: ShoppingBag,
    },
  ]

  const quickLinks = [
    {
      title: 'How It Works',
      description:
        'Learn how the main controller and expansion modules work together.',
      path: '/how-it-works',
      icon: CircuitBoard,
    },
    {
      title: 'Applications',
      description:
        'Explore water vendo, carwash, coffee, and custom vending machine applications.',
      path: '/applications',
      icon: Zap,
    },
    {
      title: 'Documentation',
      description:
        'View wiring guides, pinouts, product information, and setup instructions.',
      path: '/docs',
      icon: RadioTower,
    },
    {
      title: 'FAQ',
      description:
        'Find answers to common product, installation, and purchasing questions.',
      path: '/faq',
      icon: Coins,
    },
  ]

  return (
    <main className="overflow-hidden bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative isolate min-h-[calc(100vh-72px)] overflow-hidden">
        {/* Background decorations */}
        <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.18),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.12),transparent_30%),linear-gradient(to_bottom,#020617,#071a1c)]" />

        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:48px_48px]" />

        <div className="pointer-events-none absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--color-amber)]/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
          {/* Hero content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-amber)]/25 bg-[var(--color-amber)]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-amber)]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--color-amber)] shadow-[0_0_12px_var(--color-amber)]" />
              VendoLab PH Controller System
            </div>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Build different vendo machines using one{' '}
              <span className="bg-gradient-to-r from-[var(--color-amber)] to-yellow-200 bg-clip-text text-transparent">
                modular board system.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Vendo Boards are designed for water vendo, carwash vendo, coffee
              vendo, and custom vending machines. Start with the main
              controller, then add expansion modules as your machine grows.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/products"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-amber)] px-6 py-3.5 text-sm font-bold text-[var(--color-deep-teal)] shadow-[0_0_30px_rgba(245,158,11,0.16)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_0_35px_rgba(245,158,11,0.3)]"
              >
                Shop Products
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.05] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:border-[var(--color-amber)]/40 hover:bg-white/10"
              >
                How It Works
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3 sm:gap-5">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
                <strong className="block text-2xl font-bold text-[var(--color-amber)] sm:text-3xl">
                  1
                </strong>
                <span className="mt-1 block text-xs leading-5 text-slate-400 sm:text-sm">
                  Main board system
                </span>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
                <strong className="block text-2xl font-bold text-[var(--color-amber)] sm:text-3xl">
                  3+
                </strong>
                <span className="mt-1 block text-xs leading-5 text-slate-400 sm:text-sm">
                  Vendo applications
                </span>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
                <strong className="block text-2xl font-bold text-[var(--color-amber)] sm:text-3xl">
                  ∞
                </strong>
                <span className="mt-1 block text-xs leading-5 text-slate-400 sm:text-sm">
                  Expandable functions
                </span>
              </div>
            </div>
          </div>

          {/* Board preview */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-r from-teal-500/20 via-transparent to-[var(--color-amber)]/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/75 p-5 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-8">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-amber)]">
                    System Preview
                  </p>
                  <h2 className="mt-2 text-xl font-bold text-white">
                    Modular Controller
                  </h2>
                </div>

                <span className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
                  Online
                </span>
              </div>

              <div className="relative aspect-square overflow-hidden rounded-3xl border border-teal-400/20 bg-[#063337] p-5 shadow-inner shadow-black/50">
                {/* Circuit grid */}
                <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(45,212,191,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.4)_1px,transparent_1px)] [background-size:24px_24px]" />

                {/* Decorative circuit traces */}
                <div className="absolute left-[16%] top-[28%] h-px w-[25%] bg-teal-300/70 shadow-[0_0_8px_#5eead4]" />
                <div className="absolute right-[17%] top-[35%] h-[21%] w-px bg-teal-300/70 shadow-[0_0_8px_#5eead4]" />
                <div className="absolute bottom-[23%] left-[27%] h-px w-[46%] bg-[var(--color-amber)]/70 shadow-[0_0_8px_var(--color-amber)]" />

                <div className="absolute left-[15%] top-[27%] h-2.5 w-2.5 rounded-full bg-teal-300 shadow-[0_0_10px_#5eead4]" />
                <div className="absolute right-[16%] top-[34%] h-2.5 w-2.5 rounded-full bg-teal-300 shadow-[0_0_10px_#5eead4]" />
                <div className="absolute bottom-[22%] left-[26%] h-2.5 w-2.5 rounded-full bg-[var(--color-amber)] shadow-[0_0_10px_var(--color-amber)]" />

                {/* Main chip */}
                <div className="absolute left-1/2 top-1/2 flex h-32 w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-2xl border border-[var(--color-amber)]/50 bg-slate-950 shadow-[0_0_35px_rgba(245,158,11,0.18)]">
                  <Cpu
                    size={32}
                    className="mb-3 text-[var(--color-amber)]"
                  />
                  <span className="text-xs font-bold tracking-[0.18em] text-white">
                    MAIN BOARD
                  </span>
                  <span className="mt-1 text-[10px] uppercase tracking-widest text-teal-300">
                    VendoLab PH
                  </span>
                </div>

                {/* Ports */}
                <div className="absolute left-5 top-1/2 -translate-y-1/2 rounded-lg border border-teal-300/30 bg-slate-950/80 px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-teal-200">
                  Coin
                </div>

                <div className="absolute right-5 top-1/3 rounded-lg border border-teal-300/30 bg-slate-950/80 px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-teal-200">
                  Relay
                </div>

                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-lg border border-[var(--color-amber)]/30 bg-slate-950/80 px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-[var(--color-amber)]">
                  Sensor
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-bold text-white">
                  Modular Vendo Controller
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Combine the main controller with expansion boards for
                  multiple input and output applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="relative border-y border-white/5 bg-slate-950 px-6 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-amber)]">
              How It Works
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              One controller. Many vendo possibilities.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400">
              Build your machine around one scalable control platform instead
              of redesigning the electronics for every application.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon

              return (
                <article
                  key={feature.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--color-amber)]/30 hover:bg-white/[0.06]"
                >
                  <span className="absolute right-5 top-4 text-5xl font-bold text-white/[0.025]">
                    0{index + 1}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--color-amber)]/20 bg-[var(--color-amber)]/10 text-[var(--color-amber)] transition duration-300 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.18)]">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {feature.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="relative bg-slate-900/50 px-6 py-24 lg:px-8">
        <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-teal-500/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-amber)]">
                Featured Products
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Start with the right board.
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
                Choose a main controller or expansion module based on the
                requirements of your vending machine.
              </p>
            </div>

            <Link
              to="/products"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[var(--color-amber)] transition hover:text-yellow-300"
            >
              View all products
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Learn more */}
      <section className="bg-slate-950 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-amber)]">
              Learn More
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Everything customers need before they buy.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400">
              Help builders understand the system, compare applications, and
              prepare for installation.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {quickLinks.map((item) => {
              const Icon = item.icon

              return (
                <Link
                  key={item.title}
                  to={item.path}
                  className="group relative flex items-start gap-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-teal-400/30 hover:bg-white/[0.06]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-teal-400/20 bg-teal-400/10 text-teal-300">
                    <Icon size={23} />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-white">
                        {item.title}
                      </h3>

                      <ArrowRight
                        size={16}
                        className="text-[var(--color-amber)] transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-6 pb-24 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[var(--color-amber)]/20 bg-gradient-to-br from-[#073b3d] via-[#082f32] to-slate-950 px-7 py-10 shadow-[0_0_60px_rgba(20,184,166,0.08)] sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[var(--color-amber)]/10" />
          <div className="pointer-events-none absolute -right-4 -top-4 h-44 w-44 rounded-full border border-teal-300/10" />

          <div className="relative max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-amber)]">
              For Builders and Vendo Businesses
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to prototype your next vendo machine?
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-300">
              Start with the hardware platform today, then expand your website
              with product management, online orders, inventory, and payment
              processing.
            </p>
          </div>

          <Link
            to="/products"
            className="group relative mt-8 inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[var(--color-amber)] px-6 py-3.5 text-sm font-bold text-[var(--color-deep-teal)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110 lg:mt-0"
          >
            Browse Products
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </main>
  )
}