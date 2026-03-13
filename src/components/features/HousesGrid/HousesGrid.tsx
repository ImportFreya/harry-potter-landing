"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import styles from "./HousesGrid.module.scss"
import { HouseModal } from "./HouseModal"
import { useHouses } from "@/hooks/useHouses"
import { HpHouse } from "@/types/house"

const HOUSES = [
  {
    key:       "Gryffindor",
    name:      "Grifinória",
    motto:     "Coragem e Determinação",
    image:     "/img_01.png",
    cardClass: styles.cardGryffindor,
  },
  {
    key:       "Hufflepuff",
    name:      "Lufa-Lufa",
    motto:     "Lealdade e Trabalho",
    image:     "/img_02.png",
    cardClass: styles.cardHufflepuff,
  },
  {
    key:       "Slytherin",
    name:      "Sonserina",
    motto:     "Ambição e Astúcia",
    image:     "/img_03.png",
    cardClass: styles.cardSlytherin,
  },
  {
    key:       "Ravenclaw",
    name:      "Corvinal",
    motto:     "Inteligência e Sabedoria",
    image:     "/img_04.png",
    cardClass: styles.cardRavenclaw,
  },
]

export function HousesGrid() {
  const { houses, loading } = useHouses()
  const [selectedHouse, setSelectedHouse] = useState<{
    house: HpHouse
    image: string
    cardClass: string
  } | null>(null)

  return (
    <>
      <section id="houses" className={styles.section}>
        <div className={styles.sectionTitle}>
          <span className={styles.line} />
          <span className={styles.titleText}>⚯⚡︎ Casas de Hogwarts</span>
          <span className={styles.line} />
        </div>

        <div className={styles.grid}>
          {HOUSES.map((house) => {
            const houseData = houses.find((h) => h.name === house.key)

            return (
              <article key={house.key} className={`${styles.card} ${house.cardClass}`}>
                <div className={styles.banner}>
                  <Image
                    src={house.image}
                    alt={house.name}
                    width={180}
                    height={180}
                    className={styles.bannerImage}
                    style={{ mixBlendMode: "multiply" }}
                  />
                </div>
                <div className={styles.content}>
                  <h3 className={styles.houseName}>{house.name}</h3>
                  <p className={styles.houseMotto}>{house.motto}</p>
                  {!loading && houseData && (
                    <p className={styles.memberCount}>
                      {houseData.memberCount} membros
                    </p>
                  )}
                  <button
                    className={styles.btn}
                    onClick={() =>
                      houseData &&
                      setSelectedHouse({
                        house:     houseData,
                        image:     house.image,
                        cardClass: house.cardClass,
                      })
                    }
                  >
                    Saiba Mais <ChevronRight size={13} />
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      
      {selectedHouse && (
        <HouseModal
          house={selectedHouse.house}
          image={selectedHouse.image}
          cardClass={selectedHouse.cardClass}
          onClose={() => setSelectedHouse(null)}
        />
      )}
    </>
  )
}
