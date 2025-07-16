'use client'

import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function CheckoutButton({ price }: { price: number }) {
  const handleCheckout = async () => {
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ price, email: 'test@example.com' }),
    })

    const { id } = await res.json()
    const stripe = await stripePromise
    await stripe?.redirectToCheckout({ sessionId: id })
  }

  return (
    <button
      onClick={handleCheckout}
      className="mt-4 px-6 py-2 bg-cyan-600 text-white font-medium rounded-md hover:bg-cyan-700 transition"
    >
      Pay ₹{price}
    </button>
  )
}
