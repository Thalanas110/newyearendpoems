import { useState } from 'react'
import { motion } from 'motion/react'
import { Lock, Sparkles } from 'lucide-react'
import { SITE_PASSWORD } from '@/lib/poems-data'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface PasswordGateProps {
  onSuccess: () => void
}

export function PasswordGate({ onSuccess }: PasswordGateProps) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [isShaking, setIsShaking] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === SITE_PASSWORD) {
      onSuccess()
    } else {
      setError(true)
      setIsShaking(true)
      setTimeout(() => setIsShaking(false), 500)
    }
  }

  return (
    <div className="min-h-screen bg-[#1A1F2C] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Subtle starfield background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#D4AF37]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#6E59A5]/20 border border-[#D4AF37]/30 mb-6"
          >
            <Sparkles className="w-8 h-8 text-[#D4AF37]" />
          </motion.div>
          <h1 className="text-3xl font-serif text-[#F5F0E6] mb-2">
            New Year's Eve Poetry
          </h1>
          <p className="text-[#F5F0E6]/60 text-sm">
            A private collection for family & friends
          </p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          animate={isShaking ? { x: [-10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.4 }}
          className="bg-[#252A38] rounded-2xl p-8 border border-[#D4AF37]/20 shadow-2xl"
        >
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#D4AF37]/10">
            <Lock className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-[#F5F0E6]/80 text-sm">
              Enter the family password to continue
            </span>
          </div>

          <div className="space-y-4">
            <Input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                setError(false)
              }}
              placeholder="Password"
              className="bg-[#1A1F2C] border-[#D4AF37]/20 text-[#F5F0E6] placeholder:text-[#F5F0E6]/40 focus:border-[#D4AF37]/50 focus:ring-[#D4AF37]/20 h-12"
            />

            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm"
              >
                Incorrect password. Please try again.
              </motion.p>
            )}

            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-[#6E59A5] to-[#D4AF37] hover:from-[#7E69AB] hover:to-[#E5BF47] text-white font-medium transition-all duration-300"
            >
              Enter Collection
            </Button>
          </div>
        </motion.form>

        <p className="text-center text-[#F5F0E6]/30 text-xs mt-6">
          With love, for the turning of the year
        </p>
      </motion.div>
    </div>
  )
}
