import { useState, useMemo } from 'react'
import { motion } from 'motion/react'
import { Sparkles, Heart, LogOut } from 'lucide-react'
import { PoemCard } from './PoemCard'
import { PoemPage } from './PoemPage'
import { MoodFilter } from './MoodFilter'
import { poems, type Mood } from '@/lib/poems-data'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

interface PoemGridProps {
  onLogout: () => void
}

const UNLOCKED_POEMS_KEY = 'nye-unlocked-poems'

export function PoemGrid({ onLogout }: PoemGridProps) {
  const [unlockedPoems, setUnlockedPoems] = useState<Set<string>>(() => {
    // Load unlocked poems from session storage
    if (typeof window !== 'undefined') {
      const stored = sessionStorage.getItem(UNLOCKED_POEMS_KEY)
      if (stored) {
        try {
          return new Set(JSON.parse(stored))
        } catch {
          return new Set()
        }
      }
    }
    return new Set()
  })
  const [selectedPoemId, setSelectedPoemId] = useState<string | null>(null)
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null)

  // Filter poems based on selected mood
  const filteredPoems = useMemo(() => {
    if (!selectedMood) return poems
    return poems.filter((poem) => poem.moods.includes(selectedMood))
  }, [selectedMood])

  const handleUnlock = (poemId: string) => {
    const newUnlocked = new Set(unlockedPoems)
    newUnlocked.add(poemId)
    setUnlockedPoems(newUnlocked)
    sessionStorage.setItem(UNLOCKED_POEMS_KEY, JSON.stringify([...newUnlocked]))
    // Navigate to the poem page
    setSelectedPoemId(poemId)
  }

  const handleBack = () => {
    setSelectedPoemId(null)
  }

  // If a poem is selected, show the full poem page
  const selectedPoem = selectedPoemId
    ? poems.find((p) => p.id === selectedPoemId)
    : null
  if (selectedPoem) {
    return <PoemPage poem={selectedPoem} onBack={handleBack} />
  }

  return (
    <div className="min-h-screen relative">
      {/* Logout button with confirmation */}
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="fixed top-4 right-4 z-50 flex items-center gap-2 px-3 py-2 rounded-lg bg-[#1A1F2C]/80 border border-[#D4AF37]/20 text-[#F5F0E6]/60 hover:text-[#F5F0E6] hover:border-[#D4AF37]/40 transition-colors backdrop-blur-sm"
          >
            <LogOut className="w-4 h-4" />
            <span className="text-sm">Exit</span>
          </motion.button>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-[#1A1F2C] border-[#D4AF37]/20">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-[#F5F0E6]">
              Leave the collection?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-[#F5F0E6]/60">
              You'll need to enter the password again to return to the poems.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-transparent border-[#D4AF37]/20 text-[#F5F0E6]/60 hover:bg-[#D4AF37]/10 hover:text-[#F5F0E6]">
              Stay
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={onLogout}
              className="bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37]/30"
            >
              Exit
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Subtle background pattern */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#D4AF37]/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
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

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 md:py-20">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-[#D4AF37]/60" />
            <span className="text-[#D4AF37]/60 text-sm tracking-widest uppercase">
              hehehehehehehe hahahahahahaha
            </span>
            <Sparkles className="w-6 h-6 text-[#D4AF37]/60" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#F5F0E6] mb-4">
            Welcome to my humble collection!
          </h1>
          <p className="text-[#F5F0E6]/60 text-lg max-w-2xl mx-auto">
            Since it is the end of the year, I figured out its time to make this. Started December 18.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <Heart className="w-4 h-4 text-[#D4AF37]/40" />
            <span className="text-[#F5F0E6]/40 text-sm">
              Each poem requires its own key to unlock, so you can read it personally. Other people cannot unlock dedicated sections,
              unless I reveal the passwords myself.
            </span>
            <Heart className="w-4 h-4 text-[#D4AF37]/40" />
          </div>
        </motion.header>

        {/* Mood Filter */}
        <MoodFilter
          selectedMood={selectedMood}
          onMoodSelect={setSelectedMood}
        />

        {/* Poem Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {filteredPoems.length > 0 ? (
            filteredPoems.map((poem, index) => (
              <PoemCard
                key={poem.id}
                poem={poem}
                index={index}
                onUnlock={handleUnlock}
                isUnlocked={unlockedPoems.has(poem.id)}
              />
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center py-16"
            >
              <p className="text-[#F5F0E6]/60 text-lg">
                No poems match this mood. Try another feeling.
              </p>
            </motion.div>
          )}
        </div>

        {/* Results count */}
        {selectedMood && filteredPoems.length > 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-[#F5F0E6]/40 text-sm mt-8"
          >
            Showing {filteredPoems.length} of {poems.length} poems
          </motion.p>
        )}

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-20 pt-12 border-t border-[#D4AF37]/10"
        >
          <p className="text-[#F5F0E6]/40 text-sm">
            © Adriaan Dimate, 2025. All rights reserved.
          </p>
        </motion.footer>
      </div>
    </div>
  )
}
