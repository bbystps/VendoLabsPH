import {
  CheckCircle2,
  ShoppingCart,
} from 'lucide-react'

import { useCart } from '../context/CartContext'

export default function CartNotification() {
  const {
    cartNotice,
  } = useCart()

  if (!cartNotice) {
    return null
  }

  return (
    <div className="fixed right-4 top-24 z-[9999] w-[calc(100%-2rem)] max-w-sm animate-[fadeIn_.2s_ease-out] sm:right-6">

      <div className="overflow-hidden rounded-2xl border border-emerald-400/20 bg-slate-900/95 shadow-2xl shadow-black/40 backdrop-blur-xl">

        <div className="flex items-start gap-3 p-4">

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
            <CheckCircle2
              size={21}
            />
          </div>

          <div className="min-w-0 flex-1">

            <p className="font-bold text-white">
              Added to Cart
            </p>

            <p className="mt-1 text-sm leading-5 text-slate-400">
              {cartNotice}
            </p>

          </div>

          <ShoppingCart
            size={18}
            className="mt-1 shrink-0 text-[var(--color-amber)]"
          />

        </div>

      </div>

    </div>
  )
}