// /app/api/create-checkout-session/route.ts

import Stripe from 'stripe'
import { NextResponse } from 'next/server'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST() {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Pro Plan',
            },
            unit_amount: 5000, // $50.00
          },
          quantity: 1,
        },
      ],
      success_url: 'http://localhost:3000/success', // ✅ Use absolute URLs
      cancel_url: 'http://localhost:3000/cancel',
    })

    return NextResponse.json({ id: session.id, url: session.url })
  } catch (error) {
    console.error('[STRIPE_ERROR]', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
