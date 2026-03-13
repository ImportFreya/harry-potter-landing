import { ChevronRight } from "lucide-react"
import styles from "./HousesGrid.module.scss"

const HOUSES = [
  {
    key:       "Gryffindor",
    name:      "Grifinória",
    motto:     "Coragem e Determinação",
    spritePos: "0% 0%",
    cardClass: styles.cardGryffindor,
  },
  {
    key:       "Hufflepuff",
    name:      "Lufa-Lufa",
    motto:     "Lealdade e Trabalho",
    spritePos: "100% 0%",
    cardClass: styles.cardHufflepuff,
  },
  {
    key:       "Slytherin",
    name:      "Sonserina",
    motto:     "Ambição e Astúcia",
    spritePos: "0% 100%",
    cardClass: styles.cardSlytherin,
  },
  {
    key:       "Ravenclaw",
    name:      "Corvinal",
    motto:     "Inteligência e Sabedoria",
    spritePos: "100% 100%",
    cardClass: styles.cardRavenclaw,
  },
]

export function HousesGrid() {
  return (
    <section id="houses" className={styles.section}>

    
      <div className={styles.sectionTitle}>
        <span className={styles.line} />
        <span className={styles.titleText}>⚯⚡︎ Casas de Hogwarts</span>
        <span className={styles.line} />
      </div>

  
      <div className={styles.grid}>
        {HOUSES.map((house) => (
          <article key={house.key} className={`${styles.card} ${house.cardClass}`}>

          
            <div
              className={styles.banner}
              style={{
                backgroundImage:    "url('/houses-banner.jpg')",
                backgroundSize:     "200% 200%",
                backgroundPosition: house.spritePos,
                backgroundRepeat:   "no-repeat",
              }}
            />

            
            <div className={styles.content}>
              <h3 className={styles.houseName}>{house.name}</h3>
              <p className={styles.houseMotto}>{house.motto}</p>
              <button className={styles.btn}>
                Saiba Mais <ChevronRight size={13} />
              </button>
            </div>

          </article>
        ))}
      </div>

    </section>
  )
}
