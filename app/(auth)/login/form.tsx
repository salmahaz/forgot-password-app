'use client'

import React, { useState } from 'react'
import Link from 'next/link'

import { useRouter } from 'next/navigation'
import { login } from '@/actions/auth/login'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await login(email, password)

      if (res?.error) {
        setError(res.error)
      } else {
        router.replace('/')
      }
    } catch {
      setError('something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-sm bg-white p-6 rounded-xl shadow-sm flex flex-col gap-4 border border-gray-100"
    >
      <h1 className="text-center text-base font-medium text-gray-800">sign in to your account</h1>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-xs text-gray-600">email</label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="h-9 rounded-md border border-gray-300 bg-gray-50 px-3 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="text-xs text-gray-600">password</label>
        <input
          id="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="h-9 rounded-md border border-gray-300 bg-gray-50 px-3 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="h-9 rounded-md bg-blue-600 text-sm text-white font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
      >
        {loading ? 'signing in...' : 'sign in'}
      </button>

      {error && <p className="text-center text-xs text-red-600">{error}</p>}

      <p className="text-center text-xs text-gray-500">
        forgot your password?{' '}
        <Link href="/forgotPassword" className="text-blue-600 hover:underline">
          reset it
        </Link>
      </p>
    </form>
  )
}
