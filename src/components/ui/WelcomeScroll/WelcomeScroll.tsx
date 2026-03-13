"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import styles from "./WelcomeScroll.module.scss"

const FULL_TEXT = `Queridos Potterheads,

Acabei enfrentando um desafio de programação inspirado no mundo de Harry Potter e preciso dizer que foi realmente um grande desafio pensar em algo que pudesse agradar visualmente os fãs desse universo mágico. No final, cheguei a essa criação e fiquei muito feliz com o resultado.

Durante esse desafio aprendi bastante coisa, tanto sobre o universo de Harry Potter quanto sobre programação — afinal, a gente aprende todos os dias, não é? Hahaha. Foi deveras interessante criar essa landing page e mergulhar nesse projeto.

Bom, sem muitas delongas… na segunda-feira, dia 16, vou descobrir qual casa vou ser escolhida. Estou torcendo muito para ir para Grifinória! Hahaha.

Agora preciso ir… nos encontramos lá na plataforma secreta ❾¾
`

const STORAGE_KEY = "hp-scroll-seen"
const CHAR_DELAY  = 28  

export function WelcomeScroll() {
  const [visible,  setVisible]  = useState(false)
  const [displayed, setDisplayed] = useState("")
  const [done,     setDone]     = useState(false)
  const indexRef = useRef(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    const seen = localStorage.getItem(STORAGE_KEY)
    if (!seen) setVisible(true)
  }, [])

  
  useEffect(() => {
    if (!visible) return
    indexRef.current = 0
    setDisplayed("")
    setDone(false)

    const type = () => {
      if (indexRef.current < FULL_TEXT.length) {
        setDisplayed(FULL_TEXT.slice(0, indexRef.current + 1))
        indexRef.current++
        timerRef.current = setTimeout(type, CHAR_DELAY)
      } else {
        setDone(true)
      }
    }
    timerRef.current = setTimeout(type, 600)

    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [visible])

  const handleClose = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    localStorage.setItem(STORAGE_KEY, "1")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>

        
        <Image
          src="/parchment.jpg"
          alt="Pergaminho"
          fill
          className={styles.parchmentBg}
          sizes="700px"
          priority
        />

        
        <button className={styles.closeBtn} onClick={handleClose} aria-label="Fechar">
          <X size={18} />
        </button>

      
        <div className={styles.content}>
          <h2 className={styles.seal}>⚯ ͛</h2>
          <div className={styles.text}>
            {displayed}
            {!done && <span className={styles.cursor}>|</span>}
          </div>
          {done && (
            <button className={styles.enterBtn} onClick={handleClose}>
              Estação de Hogsmeade
            </button>
          )}
        </div>

      </div>
    </div>
  )
}
