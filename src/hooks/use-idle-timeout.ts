import { useEffect, useRef, useCallback } from 'react'

interface UseIdleTimeoutOptions {
    timeout: number // in milliseconds
    onIdle: () => void
    enabled?: boolean // whether the timeout is active
}

/**
 * Hook that detects user inactivity and triggers a callback after the specified timeout.
 * Tracks mouse movement, clicks, keyboard input, scrolling, and touch events.
 * SSR-safe: only runs on the client.
 */
export function useIdleTimeout({ timeout, onIdle, enabled = true }: UseIdleTimeoutOptions) {
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    const resetTimer = useCallback(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
        timeoutRef.current = setTimeout(() => {
            onIdle()
        }, timeout)
    }, [timeout, onIdle])

    useEffect(() => {
        // Only run on client and when enabled
        if (typeof window === 'undefined' || !enabled) {
            return
        }

        // Events that indicate user activity
        const events: (keyof WindowEventMap)[] = [
            'mousemove',
            'mousedown',
            'keydown',
            'scroll',
            'touchstart',
            'click',
        ]

        // Start the initial timer
        resetTimer()

        // Reset timer on any activity
        const handleActivity = () => {
            resetTimer()
        }

        // Add event listeners
        events.forEach((event) => {
            window.addEventListener(event, handleActivity, { passive: true })
        })

        // Cleanup
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
            events.forEach((event) => {
                window.removeEventListener(event, handleActivity)
            })
        }
    }, [resetTimer, enabled])
}
