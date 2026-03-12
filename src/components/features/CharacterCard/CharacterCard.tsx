import Image from "next/image";
import { Badge } from "@/components/ui/Badge/Badge";
import { HpCharacter } from "@/types/character";
import styles from "./CharacterCard.module.scss";

interface CharacterCardProps {
  character: HpCharacter;
}

export function CharacterCard({ character }: CharacterCardProps) {
  const {
    name,
    image,
    house,
    actor,
    patronus,
    dateOfBirth,
    alive,
  } = character;

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        {image ? (
          <Image
            src={image}
            alt={`Foto de ${name}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className={styles.image}
          />
        ) : (
          <div className={styles.imagePlaceholder}>
            <Image
              src="/sprites/parchment-hogwarts.jpg"
              alt="Sem imagem disponível"
              fill
              className={styles.placeholderImage}
            />
          </div>
        )}
      </div>

      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>

        {house && (
          <Badge label={house} variant="house" house={house} />
        )}

        <ul className={styles.info}>
          {actor && (
            <li>
              <span className={styles.infoLabel}>Ator</span>
              <span>{actor}</span>
            </li>
          )}
          {patronus && (
            <li>
              <span className={styles.infoLabel}>Patrono</span>
              <span>{patronus}</span>
            </li>
          )}
          {dateOfBirth && (
            <li>
              <span className={styles.infoLabel}>Nascimento</span>
              <span>{dateOfBirth}</span>
            </li>
          )}
        </ul>

        <Badge
          label={alive ? "Vivo" : "Morto"}
          variant="status"
          alive={alive}
        />

      </div>
    </article>
  );
}
