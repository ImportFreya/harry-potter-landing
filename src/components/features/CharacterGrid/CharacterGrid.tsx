"use client";

import { CharacterCard } from "@/components/features/CharacterCard/CharacterCard";
import { useCharacters } from "@/hooks/useCharacters";
import styles from "./CharacterGrid.module.scss";

function SkeletonCard() {
  return (
    <div className={styles.skeleton} aria-hidden="true">
      <div className={styles.skeletonImage} />
      <div className={styles.skeletonContent}>
        <div className={styles.skeletonLine} />
        <div className={`${styles.skeletonLine} ${styles.skeletonLineShort}`} />
        <div className={styles.skeletonLine} />
      </div>
    </div>
  );
}

export function CharacterGrid() {
  const { characters, loading, error } = useCharacters();

  if (error) {
    return (
      <div className={styles.errorState}>
        <span className={styles.errorIcon}>⚡</span>
        <p>Um feitiço deu errado por aqui...</p>
        <small>{error}</small>
      </div>
    );
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Personagens do Mundo Mágico</h2>

      <div className={styles.grid}>
        {loading
          ? Array.from({ length: 8 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))
          : characters.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
      </div>
    </section>
  );
}
