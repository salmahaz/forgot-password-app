'use client'

import { resetPassword } from '@/actions/resetPassword'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

type ResetPasswordResponse = {
  message?: string
  error?: string
}

export default function ResetPassword() {
  const searchParams = useSearchParams()
  const token = searchParams.get('token') || ''
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setMessage('')

    if (password !== confirmPassword) {
      setError('passwords do not match')
      return
    }

    setLoading(true)

    try {
      const res: ResetPasswordResponse = await resetPassword(token, password)
      if (res?.error) {
        setError(res.error ?? '')
      } else {
        setMessage(res.message ?? '')
        setPassword('')
        setConfirmPassword('')
      }
    } catch {
      setError('something went wrong. please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-6 rounded-xl shadow-sm flex flex-col gap-5 border border-gray-100"
      >
        <div className="flex flex-col gap-1 text-center">
          <h1 className="text-base font-medium text-gray-800 lowercase">reset your password</h1>
          <p className="text-xs text-gray-500 lowercase">enter and confirm your new password</p>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-xs text-gray-600">
            new password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            placeholder="enter new password"
            className="h-9 w-full rounded-md border border-gray-300 bg-gray-50 px-3 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="confirmPassword" className="text-xs text-gray-600">
            confirm password
          </label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
            placeholder="confirm new password"
            className="h-9 w-full rounded-md border border-gray-300 bg-gray-50 px-3 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="h-9 w-full rounded-md bg-blue-600 text-sm text-white font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 cursor-pointer"
        >
          {loading ? 'resetting...' : 'reset password'}
        </button>

        {message && <p className="text-xs text-green-600 text-center">{message}</p>}
        {error && <p className="text-xs text-red-600 text-center">{error}</p>}
      </form>
    </div>
  )
}
