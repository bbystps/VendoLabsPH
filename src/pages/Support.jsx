import { Link } from 'react-router'
import {
  ArrowRight,
  BookOpen,
  Cable,
  CheckCircle2,
  CircleHelp,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Wrench,
  Zap,
} from 'lucide-react'

const supportChannels = [
  {
    icon: MessageCircle,
    title: 'Messenger Support',
    description:
      'Send your machine details, wiring photos, and a clear description of the issue through your official support channel.',
    action: 'Open Messenger',
    href: 'https://m.me/YOUR_PAGE',
    external: true,
  },
  {
    icon: Mail,
    title: 'Email Support',
    description:
      'Best for detailed technical concerns, quotation requests, documents, and multiple image attachments.',
    action: 'Send Email',
    href: 'mailto:support@vendolab.ph',
    external: false,
  },
  {
    icon: Phone,
    title: 'Phone Support',
    description:
      'Use phone support for urgent installation questions or issues that are easier to explain through a live call.',
    action: 'Call Support',
    href: 'tel:+630000000000',
    external: false,
  },
]

const supportChecklist = [
  'Board model or product name',
  'Machine type and intended function',
  'Clear photo of the complete wiring',
  'Power supply voltage and current rating',
  'Connected pumps, relays, valves, or sensors',
  'Exact problem, error, or unexpected behavior',
]

const troubleshootingTopics = [
  {
    icon: Zap,
    title: 'Power Issues',
    description:
      'Board does not turn on, resets unexpectedly, or becomes unstable when a pump or relay activates.',
  },
  {
    icon: Cable,
    title: 'Wiring Problems',
    description:
      'Coin slots, buttons, sensors, relays, valves, or pumps are not responding as expected.',
  },
  {
    icon: Wrench,
    title: 'Machine Setup',
    description:
      'Help selecting the correct controller, expansion board, or connection method for a project.',
  },
  {
    icon: Smartphone,
    title: 'Configuration',
    description:
      'Questions about timing, output behavior, machine sequence, or future setup interfaces.',
  },
]

export default function Support() {
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
              Technical Support
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Get help choosing, wiring, and{' '}
              <span className="bg-gradient-to-r from-[var(--color-amber)] to-yellow-200 bg-clip-text text-transparent">
                setting up your board.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Find setup guidance, prepare the right project information, and
              contact support for help with controller selection, installation,
              wiring, or troubleshooting.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#contact-support"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-amber)] px-6 py-3.5 text-sm font-bold text-[var(--color-deep-teal)] shadow-[0_0_30px_rgba(245,158,11,0.16)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110"
              >
                Contact Support
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <Link
                to="/docs"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.05] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:border-[var(--color-amber)]/40 hover:bg-white/10"
              >
                <BookOpen size={17} />
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting topics */}
      <section className="border-b border-white/5 bg-slate-950 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-amber)]">
              Common Support Topics
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              What do you need help with?
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400">
              Most inquiries fall under power, wiring, machine setup, or
              configuration.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {troubleshootingTopics.map((topic) => {
              const Icon = topic.icon

              return (
                <article
                  key={topic.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--color-amber)]/30 hover:bg-white/[0.06]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--color-amber)]/20 bg-[var(--color-amber)]/10 text-[var(--color-amber)] transition duration-300 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.18)]">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-white">
                    {topic.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {topic.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Support channels and checklist */}
      <section
        id="contact-support"
        className="relative bg-slate-900/40 px-6 py-24 lg:px-8"
      >
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-teal-500/5 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[var(--color-amber)]/5 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-amber)]">
              Contact Options
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Choose the best support channel.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
              Use Messenger for quick questions, email for detailed technical
              concerns, and phone support for urgent installation assistance.
            </p>

            <div className="mt-10 space-y-5">
              {supportChannels.map((channel) => {
                const Icon = channel.icon

                return (
                  <article
                    key={channel.title}
                    className="group rounded-2xl border border-white/10 bg-slate-950/75 p-6 transition duration-300 hover:border-[var(--color-amber)]/30"
                  >
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                      <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl border border-teal-400/20 bg-teal-400/10 p-3 text-teal-300">
                        <Icon size={25} />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white">
                          {channel.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {channel.description}
                        </p>
                      </div>

                      <a
                        href={channel.href}
                        target={channel.external ? '_blank' : undefined}
                        rel={channel.external ? 'noreferrer' : undefined}
                        className="group/button inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white transition hover:border-[var(--color-amber)]/30 hover:bg-[var(--color-amber)]/10 hover:text-[var(--color-amber)]"
                      >
                        {channel.action}
                        <ArrowRight
                          size={16}
                          className="transition-transform group-hover/button:translate-x-1"
                        />
                      </a>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>

          <aside className="h-fit rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-8 lg:sticky lg:top-28">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--color-amber)]/20 bg-[var(--color-amber)]/10 text-[var(--color-amber)]">
                <ShieldCheck size={24} />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-amber)]">
                  Before Contacting Support
                </p>

                <h2 className="mt-1 text-xl font-bold text-white">
                  Prepare these details
                </h2>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              Complete information helps support understand your setup faster
              and reduces repeated questions.
            </p>

            <div className="mt-7 space-y-3">
              {supportChecklist.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.025] p-4"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-[var(--color-amber)]"
                  />

                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* Support process */}
      <section className="bg-slate-950 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-amber)]">
              Support Process
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              A clearer way to resolve technical concerns.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                number: '01',
                title: 'Describe the project',
                description:
                  'Provide the machine type, controller model, connected components, and expected behavior.',
              },
              {
                number: '02',
                title: 'Share clear evidence',
                description:
                  'Include wiring photos, voltage readings, error messages, or a short video of the issue.',
              },
              {
                number: '03',
                title: 'Follow the recommended checks',
                description:
                  'Test the suggested wiring, power, configuration, or component changes one step at a time.',
              },
            ].map((step) => (
              <article
                key={step.number}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6"
              >
                <span className="absolute right-5 top-4 text-5xl font-bold text-white/[0.025]">
                  {step.number}
                </span>

                <p className="text-xs font-bold tracking-[0.22em] text-[var(--color-amber)]">
                  STEP {step.number}
                </p>

                <h3 className="mt-4 text-xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-6 pb-24 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[var(--color-amber)]/20 bg-gradient-to-br from-[#073b3d] via-[#082f32] to-slate-950 px-7 py-10 shadow-[0_0_60px_rgba(20,184,166,0.08)] sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[var(--color-amber)]/10" />

          <div className="relative max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-amber)]">
              Planning a New Machine?
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Start with the correct controller setup.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-300">
              Browse the available products or review the system documentation
              before selecting boards for your project.
            </p>
          </div>

          <div className="relative mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <Link
              to="/products"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-amber)] px-6 py-3.5 text-sm font-bold text-[var(--color-deep-teal)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110"
            >
              <ShoppingBag size={18} />
              Browse Products
            </Link>

            <Link
              to="/faq"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.05] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View FAQ
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}