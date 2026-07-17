import { Link } from 'react-router'
import {
  ArrowRight,
  ChevronDown,
  CircleHelp,
  CreditCard,
  Layers3,
  MessageCircle,
  Package,
  Settings2,
  ShieldCheck,
  ShoppingCart,
  Wrench,
} from 'lucide-react'

const faqs = [
  {
    category: 'Products',
    icon: Package,
    question: 'Is this only for water vendo machines?',
    answer:
      'No. The Vendo Board system is modular and can be used for water vendo, carwash vendo, coffee or drink vending, and other custom coin-operated or automated machines.',
  },
  {
    category: 'Expansion',
    icon: Layers3,
    question: 'Can I add more outputs?',
    answer:
      'Yes. Output expansion boards can provide additional channels for pumps, solenoid valves, relays, motors, lights, buzzers, and other controlled devices.',
  },
  {
    category: 'Expansion',
    icon: Settings2,
    question: 'Can I add more buttons or sensors?',
    answer:
      'Yes. Input expansion modules can support additional buttons, switches, coin signals, level sensors, proximity sensors, and other detection inputs.',
  },
  {
    category: 'Compatibility',
    icon: Wrench,
    question: 'Can I use my existing coin slot, pump, or relay?',
    answer:
      'In many cases, yes, but compatibility depends on the voltage, current requirements, signal type, and wiring of your existing hardware. Always verify the specifications before connecting a device.',
  },
  {
    category: 'Products',
    icon: ShoppingCart,
    question: 'Which board should I buy first?',
    answer:
      'Start with the main controller board. Add input or output expansion modules only when your machine requires more channels than the main controller can provide.',
  },
  {
    category: 'Payment',
    icon: CreditCard,
    question: 'Is checkout already connected to GCash?',
    answer:
      'Not yet. The current checkout is a frontend prototype. GCash, manual payment confirmation, order tracking, and other payment features can be added during the backend development phase.',
  },
  {
    category: 'Admin',
    icon: Settings2,
    question: 'Can the admin add and update products?',
    answer:
      'The current admin page is a static interface demo. It can later be connected to a database with account login, image uploads, inventory management, product editing, and order management.',
  },
  {
    category: 'Installation',
    icon: ShieldCheck,
    question: 'Do I need electronics experience to install it?',
    answer:
      'Basic knowledge of wiring, power supplies, relays, and electrical safety is recommended. For commercial or high-power machines, installation should be handled by a qualified technician.',
  },
]

export default function FAQ() {
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
              <CircleHelp size={15} />
              Frequently Asked Questions
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Answers to common{' '}
              <span className="bg-gradient-to-r from-[var(--color-amber)] to-yellow-200 bg-clip-text text-transparent">
                Vendo Board questions.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Learn more about product compatibility, expansion modules,
              checkout, installation, and choosing the right hardware for your
              machine.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#faq-list"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-amber)] px-6 py-3.5 text-sm font-bold text-[var(--color-deep-teal)] shadow-[0_0_30px_rgba(245,158,11,0.16)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110"
              >
                Browse Questions
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <Link
                to="/support"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.05] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:border-[var(--color-amber)]/40 hover:bg-white/10"
              >
                <MessageCircle size={17} />
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ summary */}
      <section className="border-b border-white/5 bg-slate-950 px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              label: 'Product Questions',
              value: '2',
              icon: Package,
            },
            {
              label: 'Expansion Topics',
              value: '2',
              icon: Layers3,
            },
            {
              label: 'Payment & Admin',
              value: '2',
              icon: CreditCard,
            },
            {
              label: 'Setup & Safety',
              value: '2',
              icon: ShieldCheck,
            },
          ].map((item) => {
            const Icon = item.icon

            return (
              <article
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--color-amber)]/20 bg-[var(--color-amber)]/10 text-[var(--color-amber)]">
                    <Icon size={21} />
                  </div>

                  <strong className="text-2xl font-bold text-white">
                    {item.value}
                  </strong>
                </div>

                <p className="mt-4 text-sm text-slate-400">{item.label}</p>
              </article>
            )
          })}
        </div>
      </section>

      {/* FAQ list */}
      <section
        id="faq-list"
        className="relative bg-slate-900/40 px-6 py-24 lg:px-8"
      >
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-teal-500/5 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[var(--color-amber)]/5 blur-3xl" />

        <div className="relative mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-amber)]">
              Help Center
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Everything customers need to know.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400">
              Select a question below to view the answer.
            </p>
          </div>

          <div className="mt-14 space-y-4">
            {faqs.map((faq, index) => {
              const Icon = faq.icon

              return (
                <details
                  key={faq.question}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-950/75 shadow-lg shadow-black/10 transition duration-300 open:border-[var(--color-amber)]/30 open:bg-slate-950"
                >
                  <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-5 sm:px-6">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-teal-400/20 bg-teal-400/10 text-teal-300 transition duration-300 group-open:border-[var(--color-amber)]/20 group-open:bg-[var(--color-amber)]/10 group-open:text-[var(--color-amber)]">
                      <Icon size={21} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-amber)]">
                        {faq.category}
                      </p>

                      <h3 className="mt-1 pr-4 text-left text-base font-bold leading-6 text-white sm:text-lg">
                        {faq.question}
                      </h3>
                    </div>

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-400 transition duration-300 group-open:rotate-180 group-open:border-[var(--color-amber)]/20 group-open:text-[var(--color-amber)]">
                      <ChevronDown size={18} />
                    </span>
                  </summary>

                  <div className="border-t border-white/5 px-5 pb-6 pt-5 sm:ml-[76px] sm:px-6">
                    <div className="flex gap-4">
                      <span className="hidden pt-1 text-xs font-bold tracking-[0.18em] text-slate-600 sm:block">
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <p className="text-sm leading-7 text-slate-400">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </details>
              )
            })}
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="bg-slate-950 px-6 py-24 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[var(--color-amber)]/20 bg-gradient-to-br from-[#073b3d] via-[#082f32] to-slate-950 px-7 py-10 shadow-[0_0_60px_rgba(20,184,166,0.08)] sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[var(--color-amber)]/10" />
          <div className="pointer-events-none absolute -right-4 -top-4 h-44 w-44 rounded-full border border-teal-300/10" />

          <div className="relative max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-amber)]">
              Still Have Questions?
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Tell us about your machine project.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-300">
              Share the number of buttons, sensors, pumps, valves, relays, and
              machine functions you need so the appropriate board setup can be
              recommended.
            </p>
          </div>

          <div className="relative mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <Link
              to="/support"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-amber)] px-6 py-3.5 text-sm font-bold text-[var(--color-deep-teal)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110"
            >
              Contact Support
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/docs"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.05] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}