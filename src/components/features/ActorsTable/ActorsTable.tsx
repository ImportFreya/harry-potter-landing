"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { UserRound, ChevronRight, ChevronLeft } from "lucide-react"
import styles from "./ActorsTable.module.scss"
import { useCharacters } from "@/hooks/useCharacters"



const PAGE_SIZE = 8

export function ActorsTable() {
  const { characters: allChars, loading } = useCharacters()
const characters = allChars.filter((c) => c.actor)
  const [page, setPage]             = useState(1)

 
  const totalPages = Math.ceil(characters.length / PAGE_SIZE)
  const displayed  = characters.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const goTo = (p: number) => {
    setPage(p)
    document.getElementById("actors")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="actors" className={styles.section}>

      <div className={styles.sectionTitle}>
        <span className={styles.line} />
        <span className={styles.titleText}>⚯ ͛ Atores</span>
        <span className={styles.line} />
      </div>

      <div className={styles.box}>

       
        <div className={styles.tableHeader}>
          <div className={styles.headerCols}>
            <span>⌁☍ Personagem</span>
            <span>Ator / Atriz</span>
          </div>
        </div>

        {loading ? (
          <p className={styles.loading}>Invocando atores...</p>
        ) : (
          <>
            <table className={styles.table}>
              <tbody>
                {displayed.map((char) => (
                  <tr key={char.id}>
                    <td className={styles.tdPhoto}>
                      <div className={styles.photoWrapper}>
                        {char.image ? (
                          <Image
                            src={char.image}
                            alt={char.name}
                            fill
                            className={styles.photo}
                            sizes="44px"
                          />
                        ) : (
                          <UserRound size={18} className={styles.photoFallback} />
                        )}
                      </div>
                    </td>
                    <td className={styles.tdName}>{char.name}</td>
                    <td className={styles.tdActor}>{char.actor}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {totalPages > 1 && (
              <div className={styles.pagination}>
                <button
                  className={styles.pagBtn}
                  onClick={() => goTo(page - 1)}
                  disabled={page === 1}
                >
                  <ChevronLeft size={14} /> Anterior
                </button>

                <div className={styles.pages}>
                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter((p) => p === 1 || p === totalPages || Math.abs(p - page) <= 1)
                    .reduce<(number | "...")[]>((acc, p, idx, arr) => {
                      if (idx > 0 && p - (arr[idx - 1] as number) > 1) acc.push("...")
                      acc.push(p)
                      return acc
                    }, [])
                    .map((p, i) =>
                      p === "..." ? (
                        <span key={`e-${i}`} className={styles.ellipsis}>…</span>
                      ) : (
                        <button
                          key={p}
                          onClick={() => goTo(p as number)}
                          className={`${styles.pageBtn} ${p === page ? styles.pageBtnActive : ""}`}
                        >
                          {p}
                        </button>
                      )
                    )}
                </div>

                <button
                  className={styles.pagBtn}
                  onClick={() => goTo(page + 1)}
                  disabled={page === totalPages}
                >
                  Próxima <ChevronRight size={14} />
                </button>
              </div>
            )}
          </>
        )}

      </div>
    </section>
  )
}
