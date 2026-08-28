const API_URL =
  import.meta.env.VITE_API_URL ||
  'http://127.0.0.1:8000/api'

export async function createOrder(orderData) {
  const response = await fetch(
    `${API_URL}/orders`,
    {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },

      body: JSON.stringify(orderData),
    },
  )

  const data = await response.json()

  if (!response.ok) {
    const error = new Error(
      data.message ||
        'Unable to create order.',
    )

    error.status = response.status
    error.data = data

    throw error
  }

  return data
}

export async function getTrackedOrder(token) {
  const response = await fetch(
    `${API_URL}/orders/track/${token}`,
    {
      headers: {
        Accept: 'application/json',
      },
    },
  )

  const data = await response.json()

  if (!response.ok) {
    const error = new Error(
      data.message ||
        'Unable to load order.',
    )

    error.status = response.status
    error.data = data

    throw error
  }

  return data
}