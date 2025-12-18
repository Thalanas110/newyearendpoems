import { motion } from 'motion/react'
import { MOODS, type Mood } from '@/lib/poems-data'

interface MoodFilterProps {
  selectedMood: Mood | null
  onMoodSelect: (mood: Mood | null) => void
}

export function MoodFilter({ selectedMood, onMoodSelect }: MoodFilterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mb-12"
    >
      <div className="text-center mb-6">
        <h2 className="text-[#F5F0E6]/80 text-lg font-medium mb-2">
          How are you feeling tonight?
        </h2>
        <p className="text-[#F5F0E6]/40 text-sm">
          Select a mood to discover poems that resonate with you
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {/* All poems button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onMoodSelect(null)}
          className={`
                        px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                        border backdrop-blur-sm
                        ${
                          selectedMood === null
                            ? 'bg-[#D4AF37]/20 border-[#D4AF37]/60 text-[#D4AF37]'
                            : 'bg-[#1A1F2C]/60 border-[#D4AF37]/20 text-[#F5F0E6]/60 hover:border-[#D4AF37]/40 hover:text-[#F5F0E6]/80'
                        }
                    `}
        >
          <span className="mr-1.5">🌟</span>
          All Poems
        </motion.button>

        {/* Mood buttons */}
        {MOODS.map((mood) => (
          <motion.button
            key={mood.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onMoodSelect(mood.id)}
            className={`
                            px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                            border backdrop-blur-sm group relative
                            ${
                              selectedMood === mood.id
                                ? 'bg-[#D4AF37]/20 border-[#D4AF37]/60 text-[#D4AF37]'
                                : 'bg-[#1A1F2C]/60 border-[#D4AF37]/20 text-[#F5F0E6]/60 hover:border-[#D4AF37]/40 hover:text-[#F5F0E6]/80'
                            }
                        `}
          >
            <span className="mr-1.5">{mood.emoji}</span>
            {mood.label}

            {/* Tooltip */}
            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-[#252A38] border border-[#D4AF37]/20 rounded-lg text-xs text-[#F5F0E6]/70 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
              {mood.description}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Selected mood indicator */}
      {selectedMood && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-6"
        >
          <p className="text-[#D4AF37]/80 text-sm">
            Showing poems for when you're feeling{' '}
            <span className="font-medium text-[#D4AF37]">
              {MOODS.find((m) => m.id === selectedMood)?.label.toLowerCase()}
            </span>
          </p>
        </motion.div>
      )}
    </motion.div>
  )
}
