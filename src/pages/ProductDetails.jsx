import {
  useEffect,
  useState,
} from 'react'

import { useParams } from 'react-router'

import { getProductBySlug } from '../services/productApi'

import DefaultProductPortfolio from '../product-portfolios/DefaultProductPortfolio'
import WaterVendingMachine3 from '../product-portfolios/WaterVendingMachine3'

const portfolioComponents = {
  'water-vending-machine-3':
    WaterVendingMachine3,
}

export default function ProductDetails() {
  const { slug } = useParams()

  const [product, setProduct] =
    useState(null)

  const [loading, setLoading] =
    useState(true)

  const [error, setError] =
    useState('')

  useEffect(() => {
    let cancelled = false

    async function loadProduct() {
      try {
        setLoading(true)
        setError('')

        const data =
          await getProductBySlug(slug)

        if (!cancelled) {
          setProduct(data)
        }
      } catch (requestError) {
        console.error(requestError)

        if (!cancelled) {
          setError(
            requestError.status === 404
              ? 'Product not found.'
              : 'Unable to load the product.',
          )
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    loadProduct()

    return () => {
      cancelled = true
    }
  }, [slug])

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-10 text-center">
            <p className="text-slate-300">
              Loading product...
            </p>
          </div>
        </div>
      </main>
    )
  }

  if (error || !product) {
    return (
      <main className="min-h-screen bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-red-400/20 bg-red-400/10 p-10 text-center">
            <h1 className="text-2xl font-bold">
              Product unavailable
            </h1>

            <p className="mt-3 text-red-200">
              {error ||
                'Product not found.'}
            </p>
          </div>
        </div>
      </main>
    )
  }

  const PortfolioComponent =
    portfolioComponents[product.slug] ||
    DefaultProductPortfolio

  return (
    <PortfolioComponent
      product={product}
    />
  )
}