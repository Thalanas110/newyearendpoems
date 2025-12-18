import { useState } from 'react'
import { motion } from 'motion/react'
import { ArrowLeft, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ShareModal } from './ShareModal'
import { MOODS, type Poem } from '@/lib/poems-data'

interface PoemPageProps {
  poem: Poem
  onBack: () => void
}

export function PoemPage({ poem, onBack }: PoemPageProps) {
  const [isShareOpen, setIsShareOpen] = useState(false)

  // Get mood details for this poem
  const poemMoods = poem.moods
    .map((moodId) => MOODS.find((m) => m.id === moodId))
    .filter(Boolean)

  return (
    <>
      <div className="min-h-screen bg-[#1A1F2C] relative">
        {/* Subtle background pattern */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#D4AF37]/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.1, 0.4, 0.1],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 py-8 md:py-16">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Button
              onClick={onBack}
              variant="ghost"
              className="mb-8 text-[#F5F0E6]/60 hover:text-[#D4AF37] hover:bg-[#D4AF37]/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Collection
            </Button>
          </motion.div>

          {/* Poem content */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-[#252A38] to-[#1A1F2C] rounded-2xl border border-[#D4AF37]/20 p-8 md:p-12"
          >
            {/* Header */}
            <header className="text-center mb-10">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl md:text-4xl font-serif text-[#D4AF37] mb-4"
              >
                {poem.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-[#F5F0E6]/60 italic text-lg mb-4"
              >
                — {poem.author}
              </motion.p>

              {/* Mood badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="flex flex-wrap justify-center gap-2"
              >
                {poemMoods.map((mood) => (
                  <span
                    key={mood!.id}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-[#D4AF37]/10 text-[#D4AF37]/70 border border-[#D4AF37]/20"
                  >
                    <span>{mood!.emoji}</span>
                    <span>{mood!.label}</span>
                  </span>
                ))}
              </motion.div>
            </header>

            {/* Decorative divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-32 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mx-auto mb-10"
            />

            {/* Stanzas */}
            <div className="space-y-8">
              {poem.stanzas.map((stanza, stanzaIdx) => (
                <motion.div
                  key={stanzaIdx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + stanzaIdx * 0.1 }}
                  className="space-y-2"
                >
                  {stanza.map((line, lineIdx) => (
                    <p
                      key={lineIdx}
                      className="text-[#F5F0E6]/90 font-serif text-lg md:text-xl leading-relaxed text-center"
                    >
                      {line}
                    </p>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* Footer actions */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-12 pt-8 border-t border-[#D4AF37]/10 flex justify-center"
            >
              <Button
                onClick={() => setIsShareOpen(true)}
                variant="ghost"
                className="text-[#F5F0E6]/60 hover:text-[#D4AF37] hover:bg-[#D4AF37]/10"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share as Images
              </Button>
            </motion.div>
          </motion.article>

          {/* Decorative elements */}
          <div className="absolute top-20 left-4 w-32 h-32 opacity-5 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#D4AF37]">
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r="30"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </div>
          <div className="absolute bottom-20 right-4 w-32 h-32 opacity-5 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#D4AF37]">
              <path
                d="M10 50 Q50 10 90 50 Q50 90 10 50"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </div>

      <ShareModal
        poem={poem}
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
      />
    </>
  )
}
