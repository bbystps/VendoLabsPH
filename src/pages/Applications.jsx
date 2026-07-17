import { Link } from 'react-router'
import {
  ArrowRight,
  Car,
  CheckCircle2,
  Coffee,
  Cpu,
  Droplets,
  Gauge,
  Layers3,
  Settings2,
  Wrench,
  Zap,
} from 'lucide-react'

const applications = [
  {
    icon: Droplets,
    title: 'Water Vendo',
    subtitle: 'Water dispensing and refill systems',
    description:
      'Control coin input, water pumps, solenoid valves, dispensing time, selection buttons, indicators, and optional tank-level sensors.',
    features: [
      'Coin acceptor input',
      'Pump and valve control',
      'Timed water dispensing',
      'Optional level monitoring',
    ],
  },
  {
    icon: Car,
    title: 'Carwash Vendo',
    subtitle: 'Self-service carwash controllers',
    description:
      'Create timed carwash stations for pressure washing, soap, foam, rinse water, air, vacuum, and other selectable services.',
    features: [
      'Multiple service buttons',
      'Timed output channels',
      'High-power relay control',
      'Expandable wash functions',
    ],
  },
  {
    icon: Coffee,
    title: 'Coffee or Drink Vendo',
    subtitle: 'Automated beverage dispensing',
    description:
      'Control hot water, powder dispensing, mixing motors, pumps, cup sensors, heaters, and configurable beverage sequences.',
    features: [
      'Multi-step dispensing',
      'Motor and pump outputs',
      'Cup sensor support',
      'Custom drink sequences',
    ],
  },
  {
    icon: Wrench,
    title: 'Custom Machine',
    subtitle: 'Flexible automation projects',
    description:
      'Use the main controller and expansion modules for other coin-operated machines, kiosks, timers, access systems, and automation projects.',
    features: [
      'Custom input logic',
      'Expandable outputs',
      'Sensor integration',
      'Flexible machine control',
    ],
  },
]

const capabilities = [
  {
    icon: Gauge,
    title: 'Input Processing',
    description:
      'Read coin slots, buttons, switches, sensors, and other machine inputs.',
  },
  {
    icon: Cpu,
    title: 'Control Logic',
    description:
      'Process timing, conditions, selections, safety checks, and vending sequences.',
  },
  {
    icon: Zap,
    title: 'Output Control',
    description:
      'Operate pumps, valves, relays, motors, lights, buzzers, and indicators.',
  },
  {
    icon: Layers3,
    title: 'System Expansion',
    description:
      'Add modules when a project requires more input or output channels.',
  },
]

export default function Applications() {
  return (
    <main className="overflow-hidden bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-white/5">
        <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.18),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.12),transparent_30%),linear-gradient(to_bottom,#020617,#071a1c)]" />

        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:48px_48px]" />

        <div className="pointer-events-none absolute left-1/2 top-12 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--color-amber)]/10 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <div className="mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-amber)]/25 bg-[var(--color-amber)]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-amber)]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--color-amber)] shadow-[0_0_12px_var(--color-amber)]" />
              Applications
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              One controller system for{' '}
              <span className="bg-gradient-to-r from-[var(--color-amber)] to-yellow-200 bg-clip-text text-transparent">
                multiple machine types.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Build water vending machines, carwash stations, drink dispensers,
              and custom automation systems using the same modular Vendo Board
              platform.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/products"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-amber)] px-6 py-3.5 text-sm font-bold text-[var(--color-deep-teal)] shadow-[0_0_30px_rgba(245,158,11,0.16)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_0_35px_rgba(245,158,11,0.3)]"
              >
                Browse Products
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#application-list"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.05] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:border-[var(--color-amber)]/40 hover:bg-white/10"
              >
                Explore Applications
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-b border-white/5 bg-slate-950 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability) => {
              const Icon = capability.icon

              return (
                <article
                  key={capability.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--color-amber)]/30 hover:bg-white/[0.06]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--color-amber)]/20 bg-[var(--color-amber)]/10 text-[var(--color-amber)] transition duration-300 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.18)]">
                    <Icon size={24} />
                  </div>

                  <h2 className="mt-5 text-lg font-bold text-white">
                    {capability.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {capability.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Application cards */}
      <section
        id="application-list"
        className="relative bg-slate-900/40 px-6 py-24 lg:px-8"
      >
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-teal-500/5 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[var(--color-amber)]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-amber)]">
              Machine Applications
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              What can you build with Vendo Boards?
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400">
              Select an application, start with the main controller, and add
              expansion modules based on the number of inputs and outputs your
              machine requires.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {applications.map((application, index) => {
              const Icon = application.icon

              return (
                <article
                  key={application.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/75 p-6 shadow-xl shadow-black/10 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[var(--color-amber)]/30 sm:p-8"
                >
                  <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-teal-400/5 blur-3xl transition duration-500 group-hover:bg-[var(--color-amber)]/10" />

                  <span className="absolute right-6 top-5 text-6xl font-bold text-white/[0.025]">
                    0{index + 1}
                  </span>

                  <div className="relative">
                    <div className="flex items-start justify-between gap-5">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[var(--color-amber)]/20 bg-[var(--color-amber)]/10 text-[var(--color-amber)] transition duration-300 group-hover:shadow-[0_0_24px_rgba(245,158,11,0.2)]">
                        <Icon size={28} />
                      </div>

                      <span className="rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-teal-300">
                        Modular Ready
                      </span>
                    </div>

                    <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-amber)]">
                      {application.subtitle}
                    </p>

                    <h3 className="mt-3 text-2xl font-bold text-white">
                      {application.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-400">
                      {application.description}
                    </p>

                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                      {application.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-2.5 rounded-xl border border-white/5 bg-white/[0.025] px-3.5 py-3"
                        >
                          <CheckCircle2
                            size={17}
                            className="mt-0.5 shrink-0 text-[var(--color-amber)]"
                          />

                          <span className="text-xs leading-5 text-slate-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Selection guide */}
      <section className="bg-slate-950 px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-amber)]">
              Choosing Your System
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Start with your machine requirements.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-400">
              Identify the number of buttons, sensors, relays, pumps, valves,
              motors, and other components in your machine. This determines
              which controller and expansion modules are needed.
            </p>

            <Link
              to="/how-it-works"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-amber)] transition hover:text-yellow-300"
            >
              Learn how the system works
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-teal-400/20 bg-teal-400/10 text-teal-300">
                <Settings2 size={24} />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-amber)]">
                  Planning Checklist
                </p>

                <h3 className="mt-1 text-xl font-bold text-white">
                  Questions to ask before buying
                </h3>
              </div>
            </div>

            <div className="mt-7 space-y-4">
              {[
                'What type of vending or automation machine are you building?',
                'How many buttons, switches, or sensors are required?',
                'How many pumps, valves, motors, or relays must be controlled?',
                'Does the machine need timing, sequencing, or multiple selections?',
                'Will additional inputs or outputs be added in the future?',
              ].map((question, index) => (
                <div
                  key={question}
                  className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.025] p-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[var(--color-amber)]/20 bg-[var(--color-amber)]/10 text-xs font-bold text-[var(--color-amber)]">
                    {index + 1}
                  </span>

                  <p className="pt-1 text-sm leading-6 text-slate-300">
                    {question}
                  </p>
                </div>
              ))}
            </div>
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
              Build Your System
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Find the right controller for your machine.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-300">
              Browse the main controller, expansion boards, and starter kits
              designed for different vending and automation applications.
            </p>
          </div>

          <Link
            to="/products"
            className="group relative mt-8 inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[var(--color-amber)] px-6 py-3.5 text-sm font-bold text-[var(--color-deep-teal)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110 lg:mt-0"
          >
            View Products
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