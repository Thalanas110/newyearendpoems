import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  X,
  Facebook,
  Download,
  ChevronLeft,
  ChevronRight,
  Loader2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { StanzaImage, chunkStanzas } from './StanzaImage'
import type { Poem } from '@/lib/poems-data'

interface ShareModalProps {
  poem: Poem
  isOpen: boolean
  onClose: () => void
}

export function ShareModal({ poem, isOpen, onClose }: ShareModalProps) {
  const stanzaChunks = chunkStanzas(poem.stanzas)
  const [currentPage, setCurrentPage] = useState(0)
  const [images, setImages] = useState<string[]>([])
  const [isGenerating, setIsGenerating] = useState(true)

  const handleImageReady = useCallback(
    (index: number, dataUrl: string) => {
      setImages((prev) => {
        const newImages = [...prev]
        newImages[index] = dataUrl
        if (newImages.filter(Boolean).length === stanzaChunks.length) {
          setIsGenerating(false)
        }
        return newImages
      })
    },
    [stanzaChunks.length],
  )

  const handleDownload = (imageUrl: string, pageNum: number) => {
    const link = document.createElement('a')
    link.href = imageUrl
    link.download = `${poem.title.replace(/\s+/g, '-').toLowerCase()}-page-${pageNum + 1}.png`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleDownloadAll = () => {
    images.forEach((img, idx) => {
      if (img) {
        setTimeout(() => handleDownload(img, idx), idx * 500)
      }
    })
  }

  const handleShareToFacebook = () => {
    // Facebook sharing - opens share dialog
    // Note: For actual image sharing, users need to download and upload manually
    // or use Facebook's Graph API with proper authentication
    const shareUrl = encodeURIComponent(window.location.href)
    const shareText = encodeURIComponent(
      `"${poem.title}" by ${poem.author} - A poem for the New Year`,
    )
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&quote=${shareText}`,
      '_blank',
      'width=600,height=400',
    )
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 25 }}
          className="relative w-full max-w-2xl bg-[#252A38] rounded-2xl border border-[#D4AF37]/20 shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#D4AF37]/10">
            <div>
              <h2 className="text-xl font-serif text-[#F5F0E6]">
                Share "{poem.title}"
              </h2>
              <p className="text-sm text-[#F5F0E6]/60 mt-1">
                {stanzaChunks.length} image{stanzaChunks.length > 1 ? 's' : ''}{' '}
                generated
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#1A1F2C] transition-colors"
            >
              <X className="w-5 h-5 text-[#F5F0E6]/60" />
            </button>
          </div>

          {/* Hidden canvases for image generation */}
          {stanzaChunks.map((chunk, idx) => (
            <StanzaImage
              key={idx}
              poem={poem}
              stanzaGroup={chunk}
              pageNumber={idx + 1}
              totalPages={stanzaChunks.length}
              onImageReady={(dataUrl) => handleImageReady(idx, dataUrl)}
            />
          ))}

          {/* Image Preview */}
          <div className="p-6">
            {isGenerating ? (
              <div className="flex flex-col items-center justify-center h-64 text-[#F5F0E6]/60">
                <Loader2 className="w-8 h-8 animate-spin mb-4 text-[#D4AF37]" />
                <p>Generating images...</p>
              </div>
            ) : (
              <div className="relative">
                <div className="aspect-square bg-[#1A1F2C] rounded-xl overflow-hidden">
                  {images[currentPage] && (
                    <img
                      src={images[currentPage]}
                      alt={`${poem.title} - Page ${currentPage + 1}`}
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>

                {/* Navigation */}
                {stanzaChunks.length > 1 && (
                  <div className="flex items-center justify-center gap-4 mt-4">
                    <button
                      onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
                      disabled={currentPage === 0}
                      className="p-2 rounded-full bg-[#1A1F2C] hover:bg-[#6E59A5]/30 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5 text-[#F5F0E6]" />
                    </button>
                    <span className="text-[#F5F0E6]/60 text-sm">
                      {currentPage + 1} / {stanzaChunks.length}
                    </span>
                    <button
                      onClick={() =>
                        setCurrentPage((p) =>
                          Math.min(stanzaChunks.length - 1, p + 1),
                        )
                      }
                      disabled={currentPage === stanzaChunks.length - 1}
                      className="p-2 rounded-full bg-[#1A1F2C] hover:bg-[#6E59A5]/30 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronRight className="w-5 h-5 text-[#F5F0E6]" />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="p-6 pt-0 space-y-3">
            <div className="flex gap-3">
              <Button
                onClick={() => handleDownload(images[currentPage], currentPage)}
                disabled={isGenerating || !images[currentPage]}
                className="flex-1 bg-[#6E59A5] hover:bg-[#7E69AB] text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Download This Image
              </Button>
              {stanzaChunks.length > 1 && (
                <Button
                  onClick={handleDownloadAll}
                  disabled={isGenerating}
                  variant="outline"
                  className="flex-1 border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download All ({stanzaChunks.length})
                </Button>
              )}
            </div>
            <Button
              onClick={handleShareToFacebook}
              disabled={isGenerating}
              className="w-full bg-[#1877F2] hover:bg-[#166FE5] text-white"
            >
              <Facebook className="w-4 h-4 mr-2" />
              Share to Facebook
            </Button>
            <p className="text-xs text-[#F5F0E6]/40 text-center">
              Download images first, then upload them to your Facebook post for
              best results
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
