import styles from "./HeroSection.module.scss"

export function HeroSection() {
  return (
    <section className={styles.hero}>

      <div className={styles.ornamentTop}>
        <span className={styles.line} />
        <span className={styles.ornamentIcon}>❾¾</span>
        <span className={styles.line} />
      </div>

      <h1 className={styles.title}>
        Bem-vindos a Enciclopedia Bruxa
      </h1>

      <p className={styles.subtitle}>
        Explore o mundo mágico dos personagens, casas e patronos do universo de{" "}
        <strong className={styles.highlight}>Harry Potter</strong>.
      </p>

      <div className={styles.ornamentBottom}>
        <span className={styles.line} />
        <span className={styles.ornamentIcon}>❾¾</span>
        <span className={styles.line} />
      </div>
    </section>
  )
}
