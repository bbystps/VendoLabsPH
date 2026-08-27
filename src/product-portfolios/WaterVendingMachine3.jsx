import {
  Check,
  Coins,
  Cpu,
  Gauge,
  ShoppingCart,
  Zap,
} from 'lucide-react'

import { useCart } from '../context/CartContext'
import { formatCurrency } from '../utils/formatCurrency'

export default function WaterVendingMachine3({ product }) {
  const { addToCart } = useCart()

  const inStock = product.stock > 0

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* HERO / DATABASE SUMMARY */}
      <section className="border-b border-white/5 bg-gradient-to-b from-[#07383a] to-slate-950 px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">

          {/* Product Image */}
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">
            <img
              src={product.image_url || product.image}
              alt={product.name}
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </div>

          {/* Product Summary */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-amber)]">
              {product.category}
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {product.name}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-400">
              <span>
                SKU: {product.sku}
              </span>

              <span>•</span>

              <span
                className={
                  inStock
                    ? 'text-emerald-300'
                    : 'text-red-300'
                }
              >
                {inStock
                  ? `${product.stock} in stock`
                  : 'Out of stock'}
              </span>
            </div>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              {product.description}
            </p>

            <div className="mt-8">
              <strong className="text-4xl font-bold">
                {formatCurrency(product.price)}
              </strong>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                disabled={!inStock}
                onClick={() => addToCart(product)}
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-amber)] px-6 py-3.5 font-bold text-[var(--color-deep-teal)] transition hover:-translate-y-0.5 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ShoppingCart size={19} />
                Add to Cart
              </button>

              <a
                href="/support"
                className="inline-flex items-center rounded-xl border border-white/15 px-6 py-3.5 font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
              >
                Ask About Compatibility
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT INTRODUCTION */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-amber)]">
              Built for Vending Projects
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              One controller platform for your vending machine.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Designed as the central control system of a vending
              machine, the VendoLabsPH controller can receive customer
              inputs, calculate credits, process selections, monitor
              sensors, and control the actuators that dispense your
              product.
            </p>
          </div>
        </div>
      </section>

      {/* KEY CAPABILITIES */}
      <section className="border-y border-white/5 bg-white/[0.02] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-amber)]">
              Key Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Everything needed to control a vending system.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Connect payment inputs, customer controls, sensors,
              displays, relays, actuators, and compatible expansion
              modules around one vending controller.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={Coins}
              title="Payment Inputs"
              description="Connect compatible coin slots and other supported payment input devices."
            />

            <FeatureCard
              icon={Cpu}
              title="Smart Control"
              description="Handles vending logic, customer credit, selections, sensors, and configured outputs."
            />

            <FeatureCard
              icon={Zap}
              title="Actuator Control"
              description="Control pumps, solenoids, relays, SSRs, contactors, and compatible dispensing mechanisms."
            />

            <FeatureCard
              icon={Gauge}
              title="Expandable"
              description="Add supported sensors, displays, expansion modules, and vending accessories."
            />
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-amber)]">
              Applications
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              What can you build?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-slate-400">
              Use the controller as the core of different
              coin-operated and automated vending projects.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <ApplicationCard
              title="Water Vending Machine"
              description="Control water dispensing pumps or solenoid valves based on available customer credit."
            />

            <ApplicationCard
              title="Carwash Vendo"
              description="Activate pumps, compressors, foam systems, vacuums, or other timed equipment."
            />

            <ApplicationCard
              title="Coffee Vending"
              description="Handle customer selections and activate compatible dispensing mechanisms."
            />

            <ApplicationCard
              title="Charging Station"
              description="Build prepaid or coin-operated charging systems for compatible devices."
            />

            <ApplicationCard
              title="WiFi Vendo"
              description="Integrate payment input with compatible network access or external control systems."
            />

            <ApplicationCard
              title="Custom Vending Machine"
              description="Develop your own vending concept using configurable inputs and outputs."
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-y border-white/5 bg-[#06191d] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-amber)]">
              Simple Operation
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              From payment to dispensing.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              A typical vending transaction can be handled through a
              simple sequence of payment, credit, selection, and output
              activation.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <ProcessStep
              number="01"
              title="Insert Payment"
              description="The customer inserts a supported coin or uses a compatible payment input."
            />

            <ProcessStep
              number="02"
              title="Credit Recorded"
              description="The controller calculates and stores the available customer credit."
            />

            <ProcessStep
              number="03"
              title="Make Selection"
              description="The customer selects the desired product, service, or dispensing option."
            />

            <ProcessStep
              number="04"
              title="Activate Output"
              description="The controller activates the configured relay, actuator, pump, or dispensing mechanism."
            />
          </div>
        </div>
      </section>

      {/* TECHNICAL INFORMATION */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-amber)]">
                Technical Information
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                Built around practical vending hardware.
              </h2>

              <p className="mt-5 leading-7 text-slate-400">
                The controller is intended for integration with
                compatible payment devices, sensors, actuators,
                displays, and expansion modules used in custom vending
                machines.
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10">
              <SpecificationRow
                label="Main Supply"
                value="12V DC"
              />

              <SpecificationRow
                label="Payment Input"
                value="Coin Slot / Compatible Payment Input"
              />

              <SpecificationRow
                label="User Interface"
                value="Push Buttons / LCD / Expansion"
              />

              <SpecificationRow
                label="Outputs"
                value="Relay / 12V Actuator Control"
              />

              <SpecificationRow
                label="Sensors"
                value="Limit Switch / IR / Door / Custom"
              />

              <SpecificationRow
                label="Expansion"
                value="I2C and supported modules"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 pt-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-3xl border border-[var(--color-amber)]/20 bg-gradient-to-br from-[#07383a] to-slate-900 p-8 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-amber)]">
                  Build with VendoLabsPH
                </p>

                <h2 className="mt-4 text-3xl font-bold">
                  Ready to start your vending project?
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                  Get the controller board, review the documentation,
                  or ask us about compatibility with your planned
                  vending machine.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  disabled={!inStock}
                  onClick={() => addToCart(product)}
                  className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-amber)] px-6 py-3.5 font-bold text-[var(--color-deep-teal)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ShoppingCart size={19} />
                  Add to Cart
                </button>

                <a
                  href="/support"
                  className="inline-flex items-center rounded-xl border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white/5"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


/* =========================================================
   SMALL REUSABLE COMPONENTS
========================================================= */

function FeatureCard({
  icon: Icon,
  title,
  description,
}) {
  return (
    <article className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--color-amber)]/30">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-amber)]/10 text-[var(--color-amber)]">
        <Icon size={22} />
      </div>

      <h3 className="mt-5 text-lg font-bold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-400">
        {description}
      </p>
    </article>
  )
}


function ApplicationCard({
  title,
  description,
}) {
  return (
    <article className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 transition duration-300 hover:border-white/20">
      <div className="flex items-start gap-3">
        <Check
          size={19}
          className="mt-1 shrink-0 text-emerald-300"
        />

        <div>
          <h3 className="font-bold text-white">
            {title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            {description}
          </p>
        </div>
      </div>
    </article>
  )
}


function ProcessStep({
  number,
  title,
  description,
}) {
  return (
    <article className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <span className="text-4xl font-black text-[var(--color-amber)]/20">
        {number}
      </span>

      <h3 className="mt-4 text-lg font-bold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-400">
        {description}
      </p>
    </article>
  )
}


function SpecificationRow({
  label,
  value,
}) {
  return (
    <div className="flex flex-col gap-1 border-b border-white/10 bg-slate-900/60 px-6 py-5 last:border-b-0 sm:flex-row sm:items-center sm:justify-between">
      <span className="text-sm text-slate-400">
        {label}
      </span>

      <span className="font-semibold text-white">
        {value}
      </span>
    </div>
  )
}