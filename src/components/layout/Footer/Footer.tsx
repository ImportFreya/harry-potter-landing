import styles from "./Footer.module.scss"

export function Footer() {
  return (
    <footer className={styles.footer}>

    
      <div className={styles.train} />

      
      <div className={styles.content}>
        <p className={styles.title}>Harry Potter</p>
        <p className={styles.title}>
          Desenvolvido por Thauane Souza
        </p>
      </div>

    </footer>
  )
}
