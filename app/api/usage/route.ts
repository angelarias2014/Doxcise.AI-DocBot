import { NextResponse } from 'next/server'
import { db } from '@/app/(utils)/db'
import { AIOutput } from '@/app/(utils)/schema'
import { eq } from 'drizzle-orm'

export async function POST(req: Request) {
  const { email } = await req.json()

  if (!email) return NextResponse.json({ error: 'Email required' }, { status: 400 })

  const results = await db.select().from(AIOutput).where(eq(AIOutput.createdBy, email))
  let total = 0

  results.forEach(item => {
    total += item.aiResponse?.length || 0
  })

  return NextResponse.json({ totalUsage: total })
}
