import { Link } from '@tanstack/react-router'
import { Button } from './ui/button'
import { Home, Snowflake } from 'lucide-react'
import { useState, useEffect, useMemo } from 'react'

// Individual snowflake component
function FallingSnowflake({ delay, duration, left, size, opacity, sway }: {
  delay: number
  duration: number
  left: string
  size: number
  opacity: number
  sway: number
}) {
  return (
    <div
      className="absolute pointer-events-none snowflake"
      style={{
        left,
        top: '-30px',
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        // @ts-expect-error Custom CSS property for sway animation
        '--sway': `${sway}px`,
      }}
    >
      <Snowflake
        className="text-white drop-shadow-md"
        style={{
          width: size,
          height: size,
          opacity,
        }}
      />
    </div>
  )
}

export function NotFoundComponent() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Generate snowflakes with varied properties for a realistic look
  const snowflakes = useMemo(() => Array.from({ length: 40 }, (_, i) => ({
    id: i,
    delay: Math.random() * 10,
    duration: 8 + Math.random() * 8,
    left: `${Math.random() * 100}%`,
    size: 8 + Math.random() * 18,
    opacity: 0.4 + Math.random() * 0.5,
    sway: 20 + Math.random() * 40,
  })), [])

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Snow overlay - adds depth */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {mounted && snowflakes.map((flake) => (
          <FallingSnowflake key={flake.id} {...flake} />
        ))}
      </div>

      {/* Frosted glass card for content - improves readability */}
      <div
        className={`
          relative z-10 mx-4 px-8 py-10 sm:px-12 sm:py-14 
          max-w-md w-full
          rounded-3xl
          bg-black/70 backdrop-blur-xl
          border border-white/20
          shadow-2xl shadow-black/50
          transition-all duration-700 
          ${mounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}
        `}
      >

        {/* Large 404 number */}
        <div className="relative mb-6 text-center">
          <h1 className="text-8xl sm:text-9xl font-black leading-none tracking-tight text-white drop-shadow-lg select-none">
            404
          </h1>

          {/* Decorative snowflakes around the number */}
          <Snowflake className="absolute -top-2 -left-2 w-6 h-6 text-white/70 animate-spin-slow" />
          <Snowflake className="absolute top-4 -right-2 w-4 h-4 text-white/50 animate-spin-slow-reverse" />
          <Snowflake className="absolute -bottom-2 left-6 w-5 h-5 text-white/60 animate-spin-slow" style={{ animationDelay: '0.5s' }} />
        </div>

        {/* Subtitle */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-4">
          Lost in the Snow
        </h2>

        {/* Description */}
        <p className="text-center text-white/90 text-base sm:text-lg leading-relaxed mb-8">
          The page you're looking for has drifted away like a snowflake. Let's get you back home.
        </p>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <Snowflake className="w-4 h-4 text-white/60" />
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </div>

        {/* Call to action button */}
        <div className="flex justify-center">
          <Button
            asChild
            size="lg"
            className="
              group relative overflow-hidden 
              bg-white text-gray-900 font-semibold
              hover:bg-white/90
              transition-all duration-300 
              shadow-lg hover:shadow-xl hover:scale-105
              px-8
            "
          >
            <Link to="/">
              <Home className="w-5 h-5 mr-2 transition-transform group-hover:-translate-y-0.5" />
              Return Home
            </Link>
          </Button>
        </div>

        {/* Footer quote */}
        <p className="mt-10 text-center text-sm text-white/60 italic">
          "Every snowfall is a fresh beginning" ❄️
        </p>
      </div>

      {/* CSS for snowfall animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes snowfall {
          0% {
            opacity: 0;
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(100vh) translateX(var(--sway)) rotate(360deg);
          }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        .snowflake {
          animation: snowfall linear infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 10s linear infinite;
        }
      `}} />
    </div>
  )
}
