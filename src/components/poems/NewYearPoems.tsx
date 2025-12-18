import { useState, useEffect, useCallback } from 'react'
import { PasswordGate } from './PasswordGate'
import { PoemGrid } from './PoemGrid'
import { SnowEffect } from './SnowEffect'
import { useIdleTimeout } from '@/hooks/use-idle-timeout'

const STORAGE_KEY = 'nye-poems-authenticated'
const IDLE_TIMEOUT_MS = 5 * 60 * 1000 // 5 minutes

export function NewYearPoems() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const handleLogout = useCallback(() => {
    sessionStorage.removeItem(STORAGE_KEY)
    setIsAuthenticated(false)
  }, [])

  // Auto sign-out after 5 minutes of inactivity (only when authenticated)
  useIdleTimeout({
    timeout: IDLE_TIMEOUT_MS,
    onIdle: handleLogout,
    enabled: isAuthenticated,
  })

  useEffect(() => {
    // Check if user has already authenticated in this session
    const stored = sessionStorage.getItem(STORAGE_KEY)
    if (stored === 'true') {
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [])

  const handleAuthenticate = () => {
    sessionStorage.setItem(STORAGE_KEY, 'true')
    setIsAuthenticated(true)
  }

  // Prevent flash of content
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#1A1F2C] flex items-center justify-center">
        <SnowEffect />
        <div className="w-8 h-8 border-2 border-[#D4AF37]/30 border-t-[#D4AF37] rounded-full animate-spin" />
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <>
        <SnowEffect />
        <PasswordGate onSuccess={handleAuthenticate} />
      </>
    )
  }

  return (
    <>
      <SnowEffect />
      <PoemGrid onLogout={handleLogout} />
    </>
  )
}
