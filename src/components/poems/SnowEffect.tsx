import { useEffect, useState } from 'react'

interface Snowflake {
  id: number
  x: number
  size: number
  duration: number
  delay: number
  opacity: number
}

export function SnowEffect() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([])

  useEffect(() => {
    const flakes: Snowflake[] = []
    const count = 60

    for (let i = 0; i < count; i++) {
      flakes.push({
        id: i,
        x: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 10,
        opacity: Math.random() * 0.6 + 0.4,
      })
    }

    setSnowflakes(flakes)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute rounded-full bg-white animate-fall"
          style={{
            left: `${flake.x}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity,
            animationDuration: `${flake.duration}s`,
            animationDelay: `${flake.delay}s`,
          }}
        />
      ))}
      <style>{`
                @keyframes fall {
                    0% {
                        transform: translateY(-10px) rotate(0deg);
                    }
                    100% {
                        transform: translateY(100vh) rotate(360deg);
                    }
                }
                .animate-fall {
                    animation: fall linear infinite;
                }
            `}</style>
    </div>
  )
}
