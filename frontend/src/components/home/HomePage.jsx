import { useState, useEffect, useContext } from "react";
import GetAllPublicTrees from "./GetAllPublicTrees";
import styles from "./HomePage.module.css"
import { UserContext } from "../../context/UserContext";
import TreePage from "../treepage/TreePage";

export default function HomePage() {
    const [token] = useContext(UserContext);
    const [trees, setTrees] = useState([]);
    const [apiError, setApiError] = useState();
    useEffect(() => {
        GetAllPublicTrees(token, setTrees, setApiError);
    }, []);

    return (
        <div className={styles.wholePage}>
            {!apiError ? <h1>Home</h1> : <h2 className={styles.error}>{apiError}</h2>}
            <TreePage trees={trees} token={token} />
        </div>
    )
}