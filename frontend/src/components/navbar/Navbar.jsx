import { Link, resolvePath, useMatch, useResolvedPath } from "react-router-dom"
import styles from "./Navbar.module.css"

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <Link className={styles.siteTitle} to="/">Trees</Link>
            <ul className={styles.tabsList}>
                <CustomLink className={styles.tab} to="/register">Register</CustomLink>
                <CustomLink className={styles.tab} to="/login">Login</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? styles.tabContainerActive : styles.tabContainer}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}
