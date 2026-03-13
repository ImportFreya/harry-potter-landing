"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import styles from "./PatronosSection.module.scss"
import { useCharacters } from "@/hooks/useCharacters"



const PAGE_SIZE = 8

export function PatronosSection() {
  const [page, setPage] = useState(1)
  const { characters: allChars, loading } = useCharacters()
  const characters = allChars.filter((c) => c.patronus)



  const totalPages = Math.ceil(characters.length / PAGE_SIZE)
  const paged = characters.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  return (
    <section id="patronos" className={styles.section}>


      <div className={styles.sectionTitle}>
        <span className={styles.line} />
        <span className={styles.titleText}>𓅓 Patronos</span>
        <span className={styles.line} />
      </div>

      <div className={styles.box}>
        {loading ? (
          <p className={styles.loading}>Invocando patronos...</p>
        ) : (
          <>
            <ul className={styles.list}>
              {paged.map((char) => (
                <li key={char.id} className={styles.item}>
                  <span className={styles.animal}>{char.patronus}</span>
                  <span className={styles.owner}>{char.name}</span>
                </li>
              ))}
            </ul>

            {totalPages > 1 && (
              <div className={styles.pagination}>
                <button
                  className={styles.pagBtn}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                >
                  <ChevronLeft size={13} /> Anterior
                </button>
                <span className={styles.pagInfo}>{page} / {totalPages}</span>
                <button
                  className={styles.pagBtn}
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                >
                  Próximo <ChevronRight size={13} />
                </button>
              </div>
            )}
          </>
        )}
      </div>

    </section>
  )
}
