import Link from 'next/link'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <div className={styles.left}>
            <Link href="/keyboard" className={styles.link}>Keyboard</Link>
            <Link href="/mouse" className={styles.link}>Mouse</Link>
            <Link href="/mousepad" className={styles.link}>MousePad</Link>
          </div>
          <div className={styles.center}>
            <Link href="/" className={styles.logo}>
              GalaxyStar
            </Link>
          </div>
          <div className={styles.right}>
            <Link href="/support" className={styles.link}>Support</Link>
            <Link href="/cart" className={styles.link}>Cart (0)</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header 