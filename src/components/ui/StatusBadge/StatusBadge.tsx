import { HeartPulse, Skull } from "lucide-react"
import styles from "./StatusBadge.module.scss"

interface Props {
  alive: boolean
}

export function StatusBadge({ alive }: Props) {
  return (
    <span className={`${styles.badge} ${alive ? styles.alive : styles.dead}`}>
      {alive
        ? <><HeartPulse size={12} /> Vivo</>
        : <><Skull size={12} /> Morto</>
      }
    </span>
  )
}
