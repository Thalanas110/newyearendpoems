import { useState } from 'react'
import { motion } from 'motion/react'
import { Lock, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MOODS, type Poem } from '@/lib/poems-data'

interface PoemCardProps {
  poem: Poem
  index: number
  onUnlock: (poemId: string) => void
  isUnlocked: boolean
}

export function PoemCard({ poem, index, onUnlock, isUnlocked }: PoemCardProps) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [showPasswordInput, setShowPasswordInput] = useState(false)

  // Only show the first stanza as preview
  const previewStanza = poem.stanzas[0]

  // Get mood details for this poem
  const poemMoods = poem.moods
    .map((moodId) => MOODS.find((m) => m.id === moodId))
    .filter(Boolean)

  const handleUnlock = () => {
    if (password === poem.password) {
      setError('')
      setPassword('')
      setShowPasswordInput(false)
      onUnlock(poem.id)
    } else {
      setError('Incorrect password')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleUnlock()
    }
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-gradient-to-br from-[#252A38] to-[#1A1F2C] rounded-2xl border border-[#D4AF37]/15 hover:border-[#D4AF37]/30 transition-all duration-300 overflow-hidden"
    >
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="p-6 md:p-8">
        {/* Header */}
        <header className="mb-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl md:text-2xl font-serif text-[#F5F0E6] mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">
                {poem.title}
              </h2>
              <p className="text-sm text-[#F5F0E6]/50 italic">
                — {poem.author}
              </p>
            </div>
            {isUnlocked ? (
              <div className="flex items-center gap-1 text-[#D4AF37]/60 text-xs">
                <Eye className="w-3 h-3" />
                <span>Unlocked</span>
              </div>
            ) : (
              <div className="flex items-center gap-1 text-[#F5F0E6]/40 text-xs">
                <Lock className="w-3 h-3" />
                <span>Locked</span>
              </div>
            )}
          </div>

          {/* Mood badges */}
          <div className="flex flex-wrap gap-2 mt-3">
            {poemMoods.map((mood) => (
              <span
                key={mood!.id}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs bg-[#D4AF37]/10 text-[#D4AF37]/70 border border-[#D4AF37]/20"
              >
                <span>{mood!.emoji}</span>
                <span>{mood!.label}</span>
              </span>
            ))}
          </div>
        </header>

        {/* Divider */}
        <div className="w-16 h-px bg-gradient-to-r from-[#D4AF37]/50 to-transparent mb-6" />

        {/* First Stanza Preview */}
        <div className="space-y-1 mb-6">
          {previewStanza.map((line, lineIdx) => (
            <p
              key={lineIdx}
              className="text-[#F5F0E6]/85 font-serif text-base md:text-lg leading-relaxed break-words hyphens-auto"
            >
              {line}
            </p>
          ))}
        </div>

        {/* More stanzas indicator */}
        {poem.stanzas.length > 1 && (
          <p className="text-[#F5F0E6]/40 text-sm italic mb-6">
            + {poem.stanzas.length - 1} more{' '}
            {poem.stanzas.length - 1 === 1 ? 'stanza' : 'stanzas'}...
          </p>
        )}

        {/* Actions */}
        <div className="pt-6 border-t border-[#D4AF37]/10">
          {isUnlocked ? (
            <Button
              onClick={() => onUnlock(poem.id)}
              variant="ghost"
              className="w-full text-[#D4AF37] hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 border border-[#D4AF37]/30"
            >
              <Eye className="w-4 h-4 mr-2" />
              Read Full Poem
            </Button>
          ) : showPasswordInput ? (
            <div className="space-y-3">
              <div className="flex gap-2">
                <Input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    setError('')
                  }}
                  onKeyDown={handleKeyDown}
                  className="bg-[#1A1F2C] border-[#D4AF37]/20 text-[#F5F0E6] placeholder:text-[#F5F0E6]/30 focus:border-[#D4AF37]/50"
                />
                <Button
                  onClick={handleUnlock}
                  className="bg-[#D4AF37]/20 text-[#D4AF37] hover:bg-[#D4AF37]/30 border border-[#D4AF37]/30"
                >
                  Unlock
                </Button>
              </div>
              {error && <p className="text-red-400/80 text-sm">{error}</p>}
              <button
                onClick={() => {
                  setShowPasswordInput(false)
                  setPassword('')
                  setError('')
                }}
                className="text-[#F5F0E6]/40 text-sm hover:text-[#F5F0E6]/60 transition-colors"
              >
                Cancel
              </button>
            </div>
          ) : (
            <Button
              onClick={() => setShowPasswordInput(true)}
              variant="ghost"
              className="w-full text-[#F5F0E6]/60 hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 border border-[#D4AF37]/20"
            >
              <Lock className="w-4 h-4 mr-2" />
              Unlock to Read
            </Button>
          )}
        </div>
      </div>

      {/* Decorative corner */}
      <div className="absolute bottom-0 right-0 w-24 h-24 opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#D4AF37]">
          <path d="M100 0 L100 100 L0 100 Q50 50 100 0" fill="currentColor" />
        </svg>
      </div>
    </motion.article>
  )
}
