import { useContext } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import styles from "./Navbar.module.css"
import { UserContext } from "../../context/UserContext";

export default function Navbar() {
    const [token, setToken] = useContext(UserContext);
    return (
        <nav className={styles.nav}>
            <Link className={styles.siteTitle} to="/">Trees</Link>
            <ul className={styles.tabsList}>
                <CustomLink className={styles.tab} to="/register">Create New Account</CustomLink>
                {!token ?
                    <CustomLink className={styles.tab} to="/login">Login</CustomLink> :
                    <>
                        <CustomLink className={styles.tab} to="/register" onClick={() => { setToken(null); }}>Logout</CustomLink>
                        <CustomLink className={styles.tab} to="/profile">Profile</CustomLink>
                        <CustomLink className={styles.tab} to="/my-trees">My Trees</CustomLink>
                    </>
                }
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
