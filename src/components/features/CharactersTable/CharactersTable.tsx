"use client"
import { useCharacters } from "@/hooks/useCharacters"

import { useState } from "react"
import Image from "next/image"
import { ChevronRight, ChevronLeft, UserRound, HeartPulse, Skull, Shield } from "lucide-react"
import styles from "./CharactersTable.module.scss"

interface Character {
  id: string
  name: string
  house: string
  patronus: string
  actor: string
  dateOfBirth: string
  alive: boolean
  image: string
}

const HOUSES_PT: Record<string, string> = {
  Gryffindor: "Grifinória",
  Slytherin:  "Sonserina",
  Hufflepuff: "Lufa-Lufa",
  Ravenclaw:  "Corvinal",
}

const HOUSE_CLASS: Record<string, string> = {
  Gryffindor: styles.houseGryffindor,
  Slytherin:  styles.houseSlytherin,
  Hufflepuff: styles.houseHufflepuff,
  Ravenclaw:  styles.houseRavenclaw,
}

const PAGE_SIZE = 8

export function CharactersTable() {
  const { characters, loading, error } = useCharacters()
  const [page, setPage]             = useState(1)

  

  const totalPages = Math.ceil(characters.length / PAGE_SIZE)
  const displayed  = characters.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const goTo = (p: number) => {
    setPage(p)
  
    document.getElementById("characters")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="characters" className={styles.section}>
      <div className={styles.inner}>

      
        <div className={styles.sectionHeader}>
          ⚡︎ Personagens
        </div>

        {loading ? (
          <div className={styles.loading}>
            <span>❾¾</span>
            <p>Invocando personagens...</p>
          </div>
        ) : (
          <>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Foto</th>
                    <th>Nome</th>
                    <th>Ator</th>
                    <th>Casa</th>
                    <th>Patrono</th>
                    <th>Status</th>
                    <th>Nascimento</th>
                  </tr>
                </thead>
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
                              sizes="52px"
                            />
                          ) : (
                            <UserRound size={22} className={styles.photoFallback} />
                          )}
                        </div>
                      </td>

                      <td className={styles.tdName}>{char.name}</td>
                      <td className={styles.tdMuted}>{char.actor || "—"}</td>

                      <td>
                        {char.house ? (
                          <span className={`${styles.houseBadge} ${HOUSE_CLASS[char.house] ?? ""}`}>
                            {HOUSES_PT[char.house] ?? char.house}
                          </span>
                        ) : (
                          <span className={styles.tdMuted}>—</span>
                        )}
                      </td>

                      <td className={styles.tdMuted} style={{ textTransform: "capitalize" }}>
                        {char.patronus || "Nenhum"}
                      </td>

                      <td>
                        <span className={`${styles.statusBadge} ${char.alive ? styles.alive : styles.dead}`}>
                          {char.alive
                            ? <><HeartPulse size={11} /> Vivo</>
                            : <><Skull size={11} /> Morto</>
                          }
                        </span>
                      </td>

                      <td className={styles.tdMuted}>{char.dateOfBirth || "—"}</td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Paginação */}
            <div className={styles.pagination}>
              <button
                className={styles.btnPag}
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
                      <span key={`ellipsis-${i}`} className={styles.ellipsis}>…</span>
                    ) : (
                      <button
                        key={p}
                        onClick={() => goTo(p as number)}
                        className={`${styles.pageBtn} ${p === page ? styles.pageBtnActive : ""}`}
                      >
                        {p}
                      </button>
                    )
                  )
                }
              </div>

              <button
                className={styles.btnPag}
                onClick={() => goTo(page + 1)}
                disabled={page === totalPages}
              >
                Próxima <ChevronRight size={14} />
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
