'use client'

import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'

export default function UsageTrack() {
  const { user, isSignedIn, isLoaded } = useUser()
  const [usage, setUsage] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  const USAGE_LIMIT = 10000

  useEffect(() => {
    const fetchUsage = async () => {
      if (!isSignedIn || !isLoaded || !user?.primaryEmailAddress?.emailAddress) return

      try {
        const res = await fetch('/api/usage', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: user.primaryEmailAddress.emailAddress }),
        })

        const data = await res.json()
        if (typeof data.totalUsage === 'number') {
          setUsage(data.totalUsage)
        }
      } catch (error) {
        console.error('Error fetching usage:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchUsage()
  }, [user, isSignedIn, isLoaded])

  const percentage = usage ? Math.min((usage / USAGE_LIMIT) * 100, 100) : 0


  return (
    <div className="w-full max-w-2xl mx-auto px-6 py-1 bg-white border border-cyan-200 shadow-lg rounded-xl">
      <h2 className="text-md w-[180px] font-semibold text-cyan-700 mb-1">Your Free Usage</h2>


      <div className="relative w-full h-2 bg-cyan-100 rounded-full overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500"
          style={{ width: `${percentage < 2 ? 2 : percentage}%` }}
        ></div>
      </div>

  
    </div>
  )
}
