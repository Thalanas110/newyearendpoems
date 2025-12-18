import { useRef, useEffect, useCallback } from 'react'
import type { Poem } from '@/lib/poems-data'

interface StanzaImageProps {
  poem: Poem
  stanzaGroup: string[][]
  pageNumber: number
  totalPages: number
  onImageReady: (dataUrl: string) => void
}

export function StanzaImage({
  poem,
  stanzaGroup,
  pageNumber,
  totalPages,
  onImageReady,
}: StanzaImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const generateImage = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size for social media (1200x1200 for square)
    const width = 1200
    const height = 1200
    canvas.width = width
    canvas.height = height

    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, height)
    gradient.addColorStop(0, '#1A1F2C')
    gradient.addColorStop(1, '#252A38')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)

    // Add subtle decorative elements
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.1)'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(100, 100)
    ctx.lineTo(200, 100)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(width - 200, height - 100)
    ctx.lineTo(width - 100, height - 100)
    ctx.stroke()

    // Gold accent corners
    ctx.fillStyle = 'rgba(212, 175, 55, 0.15)'
    ctx.beginPath()
    ctx.arc(80, 80, 8, 0, Math.PI * 2)
    ctx.fill()
    ctx.beginPath()
    ctx.arc(width - 80, height - 80, 8, 0, Math.PI * 2)
    ctx.fill()

    // Title
    ctx.fillStyle = '#D4AF37'
    ctx.font = 'bold 48px Georgia, serif'
    ctx.textAlign = 'center'
    ctx.fillText(poem.title, width / 2, 150)

    // Author
    ctx.fillStyle = 'rgba(245, 240, 230, 0.6)'
    ctx.font = 'italic 28px Georgia, serif'
    ctx.fillText(`— ${poem.author}`, width / 2, 200)

    // Divider line
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.3)'
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(width / 2 - 100, 240)
    ctx.lineTo(width / 2 + 100, 240)
    ctx.stroke()

    // Stanzas
    ctx.fillStyle = '#F5F0E6'
    ctx.font = '32px Georgia, serif'
    ctx.textAlign = 'center'

    let yPosition = 320
    const lineHeight = 48
    const stanzaGap = 40

    stanzaGroup.forEach((stanza, stanzaIndex) => {
      stanza.forEach((line) => {
        // Word wrap for long lines
        const maxWidth = width - 200
        const words = line.split(' ')
        let currentLine = ''

        words.forEach((word, wordIndex) => {
          const testLine = currentLine + (currentLine ? ' ' : '') + word
          const metrics = ctx.measureText(testLine)

          if (metrics.width > maxWidth && currentLine) {
            ctx.fillText(currentLine, width / 2, yPosition)
            yPosition += lineHeight
            currentLine = word
          } else {
            currentLine = testLine
          }

          if (wordIndex === words.length - 1) {
            ctx.fillText(currentLine, width / 2, yPosition)
            yPosition += lineHeight
          }
        })
      })

      if (stanzaIndex < stanzaGroup.length - 1) {
        yPosition += stanzaGap
      }
    })

    // Page indicator
    ctx.fillStyle = 'rgba(245, 240, 230, 0.4)'
    ctx.font = '24px Georgia, serif'
    ctx.fillText(`${pageNumber} of ${totalPages}`, width / 2, height - 80)

    // Watermark
    ctx.fillStyle = 'rgba(212, 175, 55, 0.3)'
    ctx.font = '18px Georgia, serif'
    ctx.fillText("2025 Recall of Events", width / 2, height - 40)

    // Get data URL
    const dataUrl = canvas.toDataURL('image/png')
    onImageReady(dataUrl)
  }, [poem, stanzaGroup, pageNumber, totalPages, onImageReady])

  useEffect(() => {
    generateImage()
  }, [generateImage])

  return <canvas ref={canvasRef} className="hidden" aria-hidden="true" />
}

// Utility to chunk stanzas into groups of 4
export function chunkStanzas(stanzas: string[][]): string[][][] {
  const chunks: string[][][] = []
  for (let i = 0; i < stanzas.length; i += 4) {
    chunks.push(stanzas.slice(i, i + 4))
  }
  return chunks
}
