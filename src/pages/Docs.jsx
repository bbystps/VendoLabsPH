import { Link } from 'react-router'
import {
  ArrowRight,
  BookOpen,
  Cable,
  CheckCircle2,
  CircuitBoard,
  Coins,
  Cpu,
  Download,
  FileText,
  Gauge,
  Layers3,
  Settings2,
  ShieldCheck,
  Wrench,
  Zap,
} from 'lucide-react'

const docSections = [
  {
    icon: Cpu,
    title: 'Main Controller Board',
    description:
      'The main board is the core controller of the vending system. It processes coin input, button commands, timing, machine logic, and output control.',
    details: [
      'Coin pulse detection',
      'Timing and vending logic',
      'Button and sensor inputs',
      'Relay and device outputs',
    ],
  },
  {
    icon: Layers3,
    title: 'Expansion Boards',
    description:
      'Expansion modules allow one controller to support additional inputs and outputs without redesigning the entire machine.',
    details: [
      'Additional sensor inputs',
      'More button channels',
      'Extra relay outputs',
      'Scalable machine functions',
    ],
  },
  {
    icon: Cable,
    title: 'Typical Connections',
    description:
      'A complete vendo setup can include a power supply, coin acceptor, buttons, sensors, relays, pumps, valves, lights, and displays.',
    details: [
      'Power supply connection',
      'Coin acceptor wiring',
      'Pump and valve outputs',
      'Sensors and indicators',
    ],
  },
  {
    icon: Settings2,
    title: 'Configuration',
    description:
      'System settings define the price, dispensing duration, enabled outputs, button behavior, and machine operating sequence.',
    details: [
      'Price configuration',
      'Dispensing duration',
      'Output assignment',
      'Machine testing',
    ],
  },
]

const waterVendoSteps = [
  {
    title: 'Customer inserts a coin',
    description:
      'The coin acceptor generates one or more electrical pulses representing the inserted amount.',
    icon: Coins,
  },
  {
    title: 'The controller detects payment',
    description:
      'The main board reads the coin pulses and determines the corresponding credit or dispensing value.',
    icon: Cpu,
  },
  {
    title: 'The machine starts dispensing',
    description:
      'The controller activates a relay, pump, or solenoid valve according to the configured vending sequence.',
    icon: Zap,
  },
  {
    title: 'The timer controls the output',
    description:
      'The selected output remains active for the configured amount of dispensing time.',
    icon: Gauge,
  },
  {
    title: 'Dispensing stops automatically',
    description:
      'The controller turns off the pump or valve and returns the machine to its ready state.',
    icon: ShieldCheck,
  },
]

const futureDocumentation = [
  {
    title: 'Board Pinouts',
    description:
      'Connector names, pin functions, voltage levels, and electrical limits for every board.',
    icon: CircuitBoard,
  },
  {
    title: 'Wiring Diagrams',
    description:
      'Complete connection examples for water vendo, carwash, coffee, and custom machines.',
    icon: Cable,
  },
  {
    title: 'Setup Guides',
    description:
      'Step-by-step guides for coin slots, buttons, pumps, relays, valves, and sensors.',
    icon: Wrench,
  },
  {
    title: 'Troubleshooting',
    description:
      'Diagnostic steps for power, coin input, output activation, timing, and communication issues.',
    icon: Gauge,
  },
  {
    title: 'Firmware Updates',
    description:
      'Instructions for updating controller firmware and managing product revisions.',
    icon: Settings2,
  },
  {
    title: 'Downloadable Manuals',
    description:
      'Printable PDF manuals, quick-start guides, wiring references, and installation checklists.',
    icon: Download,
  },
]

export default function Documentation() {
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
              <BookOpen size={15} />
              Documentation
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Understand the complete{' '}
              <span className="bg-gradient-to-r from-[var(--color-amber)] to-yellow-200 bg-clip-text text-transparent">
                Vendo Board system.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Learn what each board does, how the modules connect, how vending
              sequences work, and how to choose the right hardware for your
              machine.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#system-overview"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-amber)] px-6 py-3.5 text-sm font-bold text-[var(--color-deep-teal)] shadow-[0_0_30px_rgba(245,158,11,0.16)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110"
              >
                View System Guide
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <Link
                to="/support"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.05] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:border-[var(--color-amber)]/40 hover:bg-white/10"
              >
                Get Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview card */}
      <section
        id="system-overview"
        className="relative border-b border-white/5 bg-slate-950 px-6 py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#073b3d] via-slate-900 to-slate-950 p-7 shadow-2xl shadow-black/20 sm:p-10 lg:grid lg:grid-cols-[auto_1fr] lg:items-center lg:gap-8">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[var(--color-amber)]/10" />

            <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-[var(--color-amber)]/20 bg-[var(--color-amber)]/10 text-[var(--color-amber)] shadow-[0_0_30px_rgba(245,158,11,0.12)]">
              <BookOpen size={36} />
            </div>

            <div className="mt-6 lg:mt-0">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-amber)]">
                System Overview
              </p>

              <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                One main controller with expandable machine functions.
              </h2>

              <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300 sm:text-base">
                Vendo Boards are designed as a modular electronics platform.
                Instead of creating a different controller for every vending
                machine, one main board can be reused and expanded according to
                the required number of sensors, buttons, pumps, valves, relays,
                and other components.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation sections */}
      <section className="relative bg-slate-900/40 px-6 py-24 lg:px-8">
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-teal-500/5 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[var(--color-amber)]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-amber)]">
              Core Documentation
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Learn the main parts of the system.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400">
              These sections explain the controller architecture, expansion
              concept, machine connections, and configuration process.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {docSections.map((section, index) => {
              const Icon = section.icon

              return (
                <article
                  key={section.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/75 p-6 shadow-xl shadow-black/10 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[var(--color-amber)]/30 sm:p-8"
                >
                  <span className="absolute right-6 top-5 text-6xl font-bold text-white/[0.025]">
                    0{index + 1}
                  </span>

                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--color-amber)]/20 bg-[var(--color-amber)]/10 text-[var(--color-amber)] transition duration-300 group-hover:shadow-[0_0_24px_rgba(245,158,11,0.18)]">
                      <Icon size={27} />
                    </div>

                    <h3 className="mt-6 text-2xl font-bold text-white">
                      {section.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-400">
                      {section.description}
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {section.details.map((detail) => (
                        <div
                          key={detail}
                          className="flex items-start gap-2.5 rounded-xl border border-white/5 bg-white/[0.025] px-3.5 py-3"
                        >
                          <CheckCircle2
                            size={17}
                            className="mt-0.5 shrink-0 text-[var(--color-amber)]"
                          />

                          <span className="text-xs leading-5 text-slate-300">
                            {detail}
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

      {/* Water vendo flow */}
      <section className="bg-slate-950 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-amber)]">
                Example Process
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Basic water vendo operating flow.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-400">
                This example shows how a basic coin-operated water vending
                machine can use the main controller to process payment and
                activate the dispensing hardware.
              </p>

              <Link
                to="/applications"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-amber)] transition hover:text-yellow-300"
              >
                Explore more applications
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="space-y-4">
              {waterVendoSteps.map((step, index) => {
                const Icon = step.icon

                return (
                  <article
                    key={step.title}
                    className="group flex gap-5 rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:border-[var(--color-amber)]/30 hover:bg-white/[0.06] sm:p-6"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-teal-400/20 bg-teal-400/10 text-teal-300">
                      <Icon size={23} />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xs font-bold tracking-[0.2em] text-[var(--color-amber)]">
                          STEP {String(index + 1).padStart(2, '0')}
                        </span>

                        <h3 className="text-lg font-bold text-white">
                          {step.title}
                        </h3>
                      </div>

                      <p className="mt-3 text-sm leading-7 text-slate-400">
                        {step.description}
                      </p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Future documentation */}
      <section className="border-y border-white/5 bg-slate-900/40 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-amber)]">
              Documentation Roadmap
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Technical guides planned for future releases.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400">
              As the product develops, this area can become a complete
              installation, configuration, and troubleshooting knowledge base.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {futureDocumentation.map((item) => {
              const Icon = item.icon

              return (
                <article
                  key={item.title}
                  className="group rounded-2xl border border-white/10 bg-slate-950/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-teal-400/30"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-teal-400/20 bg-teal-400/10 text-teal-300">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    <FileText size={14} />
                    Planned
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-6 py-24 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[var(--color-amber)]/20 bg-gradient-to-br from-[#073b3d] via-[#082f32] to-slate-950 px-7 py-10 shadow-[0_0_60px_rgba(20,184,166,0.08)] sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[var(--color-amber)]/10" />
          <div className="pointer-events-none absolute -right-4 -top-4 h-44 w-44 rounded-full border border-teal-300/10" />

          <div className="relative max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-amber)]">
              Need the Right Hardware?
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Choose a controller for your machine.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-300">
              Browse the available boards and starter kits, or contact support
              for help planning your vending system.
            </p>
          </div>

          <div className="relative mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <Link
              to="/products"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-amber)] px-6 py-3.5 text-sm font-bold text-[var(--color-deep-teal)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110"
            >
              Browse Products
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/support"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.05] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}