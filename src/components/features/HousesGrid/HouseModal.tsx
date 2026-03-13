"use client"

import { useRef } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, UserRound } from "lucide-react"
import { HpHouse } from "@/types/house"
import styles from "./HouseModal.module.scss"

const HOUSE_INFO: Record<string, { description: string }> = {
  Gryffindor: {
   
    description:
      "A casa daqueles que possuem coragem, bravura e determinação. Seus membros são conhecidos por enfrentar desafios sem medo e lutar pelo que acreditam ser certo.",
  },
  Hufflepuff: {
  
    description:
      "Valorizando lealdade, dedicação e trabalho duro, esta casa reúne bruxos que acreditam na justiça, amizade e na força da união.",
  },
  Slytherin: {
    
    description:
      "Lar de estudantes ambiciosos, estratégicos e determinados. Os membros desta casa usam inteligência e astúcia para alcançar seus objetivos.",
  },
  Ravenclaw: {
    
    description:
      "A casa daqueles que valorizam sabedoria, criatividade e inteligência. Seus estudantes são conhecidos pela mente curiosa e amor pelo conhecimento.",
  },
}

const HOUSE_NAMES_PT: Record<string, string> = {
  Gryffindor: "Grifinória",
  Hufflepuff: "Lufa-Lufa",
  Slytherin:  "Sonserina",
  Ravenclaw:  "Corvinal",
}

const VISIBLE = 6   

interface HouseModalProps {
  house:     HpHouse
  image:     string
  cardClass: string
  onClose:   () => void
}

export function HouseModal({ house, image, cardClass, onClose }: HouseModalProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const info      = HOUSE_INFO[house.name]
  const namePt    = HOUSE_NAMES_PT[house.name] ?? house.name

  const withPhoto    = house.members.filter((m) => m.image)
  const withoutPhoto = house.members.filter((m) => !m.image)
  const ordered      = [...withPhoto, ...withoutPhoto]

  function scroll(dir: "left" | "right") {
    const el = scrollRef.current
    if (!el) return
    const amount = el.clientWidth * 0.8
    el.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" })
  }

  function handleBackdrop(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div className={styles.backdrop} onClick={handleBackdrop}>
      <div className={`${styles.modal} ${styles[`modal${house.name}`]}`}>

      
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <Image
              src={image}
              alt={namePt}
              width={72}
              height={72}
              className={styles.crest}
              style={{ mixBlendMode: "multiply" }}
            />
            <div>
              <h2 className={`${styles.title} ${styles[`title${house.name}`]}`}>
                {namePt}
              </h2>
              <p className={styles.memberCount}>{house.memberCount} membros</p>
            </div>
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Fechar">
            <X size={20} />
          </button>
        </div>

      
        <p className={styles.description}>{info?.description}</p>

  
        <div className={styles.carouselSection}>
          <p className={styles.carouselLabel}>Membros da casa</p>

          <div className={styles.carouselWrapper}>
            <button
              className={styles.arrow}
              onClick={() => scroll("left")}
              aria-label="Anterior"
            >
              <ChevronLeft size={18} />
            </button>

            <div className={styles.carousel} ref={scrollRef}>
              {ordered.map((member) => (
                <div key={member.id} className={styles.memberCard}>
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={64}
                      height={64}
                      className={styles.avatar}
                    />
                  ) : (
                    <div className={styles.avatarFallback}>
                      <UserRound size={28} />
                    </div>
                  )}
                  <span className={styles.memberName}>{member.name}</span>
                </div>
              ))}
            </div>

            <button
              className={styles.arrow}
              onClick={() => scroll("right")}
              aria-label="Próximo"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
