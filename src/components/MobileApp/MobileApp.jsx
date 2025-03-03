import styles from './MobileApp.module.scss'

const MobileApp = () => {
  return (
    <section className={styles.app}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>CONTROL WITH OUR APP</h2>
          <p>Download the Gravastar app to customize your experience</p>
          <ul className={styles.features}>
            <li>RGB Light Control</li>
            <li>EQ Settings</li>
            <li>Firmware Updates</li>
            <li>Device Management</li>
          </ul>
          <div className={styles.buttons}>
            <a href="#" className={styles.appStore}>
              <img src="/images/app-store.png" alt="Download on App Store" />
            </a>
            <a href="#" className={styles.playStore}>
              <img src="/images/play-store.png" alt="Get it on Google Play" />
            </a>
          </div>
        </div>
        <div className={styles.image}>
          <img src="/images/app-preview.png" alt="Mobile App Preview" />
        </div>
      </div>
    </section>
  )
}

export default MobileApp 