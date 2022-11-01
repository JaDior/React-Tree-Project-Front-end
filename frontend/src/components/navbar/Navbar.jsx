import styles from "./Navbar.module.css"

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <a className={styles.siteTitle} href="/">Trees</a>
            <ul className={styles.tabsList}>
                <li className={styles.tabContainer}>
                    <a className={styles.tab} href="/register">Register</a>
                </li>
                <li className={styles.tabContainer}>
                    <a className={styles.tab} href="/login">Login</a>
                </li>
            </ul>
        </nav>
    )
}