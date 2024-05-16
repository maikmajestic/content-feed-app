import Image from "next/image";
import styles from "./nav.module.scss"

export default function Nav() {
  return (
    <nav>
      <div className={styles.navWrapper}>
        <h1>Content Feed App</h1>
        <div className={styles.logoWrapper}>
          <Image src="/ml-logo.svg" width={300} height={30} alt="Monkey Lion Logo" priority/>
        </div>
      </div>
    </nav>
  )
}