const API_URL =
  import.meta.env.VITE_API_URL ||
  '/api'

export async function getProducts() {
  const response = await fetch(`${API_URL}/catalog/products`)

  if (!response.ok) {
    throw new Error('Failed to fetch products')
  }

  return response.json()
}

export async function getProductBySlug(slug) {
  const response = await fetch(
    `${API_URL}/catalog/products/${encodeURIComponent(slug)}`
  )

  if (!response.ok) {
    const error = new Error('Failed to fetch product')
    error.status = response.status
    throw error
  }

  return response.json()
}