import { Link } from 'react-router'
import {
  ArrowRight,
  CheckCircle2,
  CircuitBoard,
  Coins,
  Cpu,
  Gauge,
  Layers3,
  Settings2,
  Wrench,
  Zap,
} from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Choose your vendo type',
      description:
        'Select whether you are building a water vendo, carwash vendo, drink vendo, coffee vendo, or a fully custom machine.',
      icon: Gauge,
    },
    {
      number: '02',
      title: 'Start with the main board',
      description:
        'The main controller handles the core machine logic, including coin input, timing, button processing, and output control.',
      icon: Cpu,
    },
    {
      number: '03',
      title: 'Add expansion boards',
      description:
        'Connect input or output expansion modules when your machine needs additional sensors, buttons, pumps, valves, or relays.',
      icon: Layers3,
    },
    {
      number: '04',
      title: 'Wire your components',
      description:
        'Connect the coin slot, buttons, relays, pumps, sensors, indicators, and other machine hardware based on your application.',
      icon: Wrench,
    },
    {
      number: '05',
      title: 'Configure and test',
      description:
        'Set up the required behavior, verify every input and output, and test the complete machine before deployment.',
      icon: Settings2,
    },
  ]

  const systemFeatures = [
    {
      title: 'Coin Input',
      description:
        'Detect customer payments and trigger the correct vending sequence.',
      icon: Coins,
    },
    {
      title: 'Machine Logic',
      description:
        'Control timing, conditions, safety checks, and product dispensing.',
      icon: CircuitBoard,
    },
    {
      title: 'Output Control',
      description:
        'Operate pumps, relays, valves, motors, lights, and other equipment.',
      icon: Zap,
    },
  ]

  return (
    <main className="overflow-hidden bg-slate-950 text-white">
      {/* Hero section */}
      <section className="relative isolate overflow-hidden border-b border-white/5">
        <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.18),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.12),transparent_30%),linear-gradient(to_bottom,#020617,#071a1c)]" />

        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:48px_48px]" />

        <div className="pointer-events-none absolute left-1/2 top-16 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--color-amber)]/10 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <div className="mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-amber)]/25 bg-[var(--color-amber)]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-amber)]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--color-amber)] shadow-[0_0_12px_var(--color-amber)]" />
              How It Works
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Build your machine through one{' '}
              <span className="bg-gradient-to-r from-[var(--color-amber)] to-yellow-200 bg-clip-text text-transparent">
                modular vendo system.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Start with the main controller board, connect the required
              components, and expand the system as your machine needs more
              inputs, outputs, and functions.
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
                href="#process"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.05] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:border-[var(--color-amber)]/40 hover:bg-white/10"
              >
                View Process
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* System overview */}
      <section className="relative border-b border-white/5 bg-slate-950 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            {systemFeatures.map((feature) => {
              const Icon = feature.icon

              return (
                <article
                  key={feature.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--color-amber)]/30 hover:bg-white/[0.06]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--color-amber)]/20 bg-[var(--color-amber)]/10 text-[var(--color-amber)] transition duration-300 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.18)]">
                    <Icon size={24} />
                  </div>

                  <h2 className="mt-5 text-xl font-bold text-white">
                    {feature.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {feature.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section
        id="process"
        className="relative bg-slate-900/40 px-6 py-24 lg:px-8"
      >
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-teal-500/5 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[var(--color-amber)]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-amber)]">
              Step-by-Step Process
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              From idea to working vendo machine.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400">
              Follow a simple modular process instead of designing a completely
              new control system for every machine.
            </p>
          </div>

          <div className="relative mx-auto mt-16 max-w-5xl">
            {/* Vertical timeline line */}
            <div className="absolute bottom-10 left-6 top-10 hidden w-px bg-gradient-to-b from-[var(--color-amber)] via-teal-400/40 to-transparent md:left-1/2 md:block" />

            <div className="space-y-6 md:space-y-12">
              {steps.map((step, index) => {
                const Icon = step.icon
                const isEven = index % 2 === 0

                return (
                  <article
                    key={step.number}
                    className={`relative grid items-center gap-6 md:grid-cols-2 md:gap-16 ${
                      isEven ? '' : 'md:[&>*:first-child]:order-2'
                    }`}
                  >
                    <div
                      className={`rounded-2xl border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-black/10 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[var(--color-amber)]/30 ${
                        isEven ? 'md:text-right' : 'md:text-left'
                      }`}
                    >
                      <div
                        className={`flex items-center gap-3 ${
                          isEven ? 'md:justify-end' : ''
                        }`}
                      >
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-teal-400/20 bg-teal-400/10 text-teal-300">
                          <Icon size={22} />
                        </div>

                        <span className="text-sm font-bold tracking-[0.2em] text-[var(--color-amber)]">
                          STEP {step.number}
                        </span>
                      </div>

                      <h3 className="mt-5 text-xl font-bold text-white">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-400">
                        {step.description}
                      </p>
                    </div>

                    <div className="hidden md:block" />

                    {/* Timeline marker */}
                    <div className="absolute left-1/2 top-1/2 hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-amber)]/40 bg-slate-950 text-sm font-bold text-[var(--color-amber)] shadow-[0_0_25px_rgba(245,158,11,0.2)] md:flex">
                      {step.number}
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Modular diagram */}
      <section className="bg-slate-950 px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-amber)]">
              Modular Architecture
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Expand only when your machine needs it.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-400">
              The main board provides the core control system. Additional
              modules can be connected when you need more sensors, buttons,
              relays, pumps, valves, displays, or communication interfaces.
            </p>

            <div className="mt-8 space-y-4">
              {[
                'Use one main controller for the core machine logic.',
                'Add input modules for more buttons and sensors.',
                'Add output modules for relays, valves, pumps, and motors.',
                'Upgrade the system without redesigning the entire machine.',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-[var(--color-amber)]"
                  />

                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-r from-teal-500/20 via-transparent to-[var(--color-amber)]/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/75 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <div className="relative min-h-[430px] overflow-hidden rounded-3xl border border-teal-400/20 bg-[#063337] p-6">
                <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(45,212,191,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.4)_1px,transparent_1px)] [background-size:24px_24px]" />

                {/* Connection lines */}
                <div className="absolute left-1/2 top-[36%] h-16 w-px -translate-x-1/2 bg-teal-300/70 shadow-[0_0_8px_#5eead4]" />
                <div className="absolute left-[24%] top-[50%] h-px w-[52%] bg-[var(--color-amber)]/70 shadow-[0_0_8px_var(--color-amber)]" />
                <div className="absolute bottom-[24%] left-1/2 h-16 w-px -translate-x-1/2 bg-teal-300/70 shadow-[0_0_8px_#5eead4]" />

                {/* Main board */}
                <div className="absolute left-1/2 top-[26%] flex h-28 w-44 -translate-x-1/2 flex-col items-center justify-center rounded-2xl border border-[var(--color-amber)]/50 bg-slate-950 shadow-[0_0_35px_rgba(245,158,11,0.18)]">
                  <Cpu
                    size={30}
                    className="mb-2 text-[var(--color-amber)]"
                  />

                  <span className="text-xs font-bold tracking-[0.16em] text-white">
                    MAIN BOARD
                  </span>
                </div>

                {/* Input module */}
                <div className="absolute left-5 top-1/2 flex h-24 w-32 -translate-y-1/2 flex-col items-center justify-center rounded-xl border border-teal-300/30 bg-slate-950/90 text-center">
                  <Gauge size={23} className="mb-2 text-teal-300" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                    Input Module
                  </span>
                </div>

                {/* Output module */}
                <div className="absolute right-5 top-1/2 flex h-24 w-32 -translate-y-1/2 flex-col items-center justify-center rounded-xl border border-[var(--color-amber)]/30 bg-slate-950/90 text-center">
                  <Zap
                    size={23}
                    className="mb-2 text-[var(--color-amber)]"
                  />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                    Output Module
                  </span>
                </div>

                {/* Machine */}
                <div className="absolute bottom-5 left-1/2 flex h-24 w-44 -translate-x-1/2 flex-col items-center justify-center rounded-xl border border-teal-300/30 bg-slate-950/90 text-center">
                  <CircuitBoard
                    size={23}
                    className="mb-2 text-teal-300"
                  />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                    Vendo Machine
                  </span>
                </div>
              </div>
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
              Start Building
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Choose the right board for your project.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-300">
              Explore the available controller and expansion boards for your
              water vendo, carwash, coffee, or custom machine.
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