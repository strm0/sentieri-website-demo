'use client'

import { useRef, useState, useEffect, useCallback } from 'react'

interface AudioPlayerProps {
  src: string
  title: string
}

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

export default function AudioPlayer({ src, title }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const scrubberRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onLoadedMetadata = () => setDuration(audio.duration)
    const onTimeUpdate = () => setCurrentTime(audio.currentTime)
    const onEnded = () => setIsPlaying(false)

    audio.addEventListener('loadedmetadata', onLoadedMetadata)
    audio.addEventListener('timeupdate', onTimeUpdate)
    audio.addEventListener('ended', onEnded)

    return () => {
      audio.removeEventListener('loadedmetadata', onLoadedMetadata)
      audio.removeEventListener('timeupdate', onTimeUpdate)
      audio.removeEventListener('ended', onEnded)
    }
  }, [])

  const togglePlay = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }, [isPlaying])

  const handleScrub = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current
    const scrubber = scrubberRef.current
    if (!audio || !scrubber || !duration) return
    const rect = scrubber.getBoundingClientRect()
    const x = e.clientX - rect.left
    const fraction = Math.max(0, Math.min(1, x / rect.width))
    audio.currentTime = fraction * duration
    setCurrentTime(audio.currentTime)
  }, [duration])

  const progress = duration ? (currentTime / duration) * 100 : 0

  return (
    <div
      style={{
        position: 'sticky',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 20,
        height: '46px',
        background: '#FFFFFF',
        borderTop: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        paddingLeft: '14px',
        paddingRight: '0px',
        fontFamily: 'var(--font-body)',
        fontSize: '1.2rem',
        letterSpacing: '-0.07em',
        color: '#000000',
      }}
    >
      <audio ref={audioRef} src={src} preload="metadata" />

      {/* Play/Pause button */}
      <button
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pause' : 'Play'}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '20px',
          height: '20px',
          flexShrink: 0,
        }}
      >
        {isPlaying ? (
          <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
            <rect x="0" y="0" width="4.5" height="16" fill="#000000" />
            <rect x="9.5" y="0" width="4.5" height="16" fill="#000000" />
          </svg>
        ) : (
          <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
            <polygon points="0,0 14,8 0,16" fill="#000000" />
          </svg>
        )}
      </button>

      {/* Title */}
      <span
        style={{
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}
      >
        {title}
      </span>

      {/* Time */}
      <span
        style={{
          whiteSpace: 'nowrap',
          flexShrink: 0,
          fontSize: '0.8rem',
          letterSpacing: '0',
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {formatTime(currentTime)} / {formatTime(duration)}
      </span>

      {/* Scrubber */}
      <div
        ref={scrubberRef}
        onClick={handleScrub}
        style={{
          flex: 1,
          height: '2px',
          background: '#000000',
          position: 'relative',
          cursor: 'pointer',
          minWidth: '60px',
        }}
      >
        {/* Progress fill */}
        <div
          style={{
            position: 'absolute',
            top: '-2px',
            left: 0,
            width: `${progress}%`,
            height: '6px',
            background: '#000000',
          }}
        />
        {/* Playhead */}
        <div
          style={{
            position: 'absolute',
            top: '-4px',
            left: `${progress}%`,
            width: '10px',
            height: '10px',
            background: '#000000',
            borderRadius: '50%',
            transform: 'translateX(-50%)',
          }}
        />
      </div>
    </div>
  )
}
