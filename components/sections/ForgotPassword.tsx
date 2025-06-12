'use client'

import { forgotPassword } from '@/actions/forgotPassword'
import React, { useState } from 'react'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setMessage(null)
    setError(null)
    setLoading(true)

    try {
      await forgotPassword(email)
      setMessage('if your email is registered, you will receive a reset link shortly.')
      setEmail('')
    } catch (err: any) {
      setError(err.message || 'something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-6 rounded-xl shadow-sm flex flex-col gap-5 border border-gray-100"
      >
        <div className="flex flex-col gap-1 text-center">
          <h1 className="text-base font-medium text-gray-800">forgot your password?</h1>
          <p className="text-xs text-gray-500">
            enter your email address and we'll send you a link to reset your password.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-xs text-gray-600">
            email address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            placeholder="you@example.com"
            className="h-9 w-full rounded-md border border-gray-300 bg-gray-50 px-3 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="h-9 w-full rounded-md bg-blue-600 text-sm text-white font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 cursor-pointer"
        >
          {loading ? 'sending...' : 'send reset link'}
        </button>

        {message && <p className="text-xs text-green-600 text-center">{message}</p>}
        {error && <p className="text-xs text-red-600 text-center">{error}</p>}
      </form>
    </div>
  )
}
