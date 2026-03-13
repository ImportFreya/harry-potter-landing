"use client"

import { useState, useRef, useEffect } from "react"
import { Volume2, VolumeX } from "lucide-react"
import styles from "./AudioPlayer.module.scss"

export function AudioPlayer() {
  const audioRef             = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1000)
    return () => clearTimeout(t)
  }, [])

  
  useEffect(() => {
    if (!visible) return
    const audio = audioRef.current
    if (!audio) return

    audio.volume = 0.4
    audio.play()
      .then(() => setPlaying(true))
      .catch(() => {
        
        setPlaying(false)
      })
  }, [visible])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.volume = 0.4
      audio.play().then(() => setPlaying(true))
    }
  }

  return (
    <>
      <audio ref={audioRef} src="/audio/hedwigs-theme.mp3" loop />

      <button
        className={`${styles.btn} ${visible ? styles.visible : ""}`}
        onClick={toggle}
        aria-label={playing ? "Pausar música" : "Tocar música"}
        title={playing ? "Pausar música" : "Tocar música de Hogwarts"}
      >
        {playing ? <Volume2 size={18} /> : <VolumeX size={18} />}
        <span className={styles.label}>
          {playing ? "♪ Tocando" : "♪ Música"}
        </span>
      </button>
    </>
  )
}
