import { useState, useEffect, useContext } from "react";
import GetAllPublicTrees from "./GetAllPublicTrees";
import styles from "./HomePage.module.css"
import TreeCard from "../tree_card/TreeCard";
import { UserContext } from "../../context/UserContext";

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
            <div className={styles.cards}>
                {trees.map((tree) => (
                    <div key={tree.id}>
                        <TreeCard tree={tree} />
                    </div>
                ))}
            </div>
        </div>
    )
}