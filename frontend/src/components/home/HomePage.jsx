import { useState } from "react";
import { useEffect } from "react"
import GetAllPublicTrees from "./GetAllPublicTrees";
import styles from "./HomePage.module.css"
import TreeCard from "./tree_card/TreeCard";

export default function HomePage() {

    const [trees, setTrees] = useState([]);
    const [apiError, setApiError] = useState();
    useEffect(() => {
        GetAllPublicTrees(setTrees, setApiError);
    }, []);

    return (
        <div className={styles.wholePage}>
            {!apiError ? <div /> : <h2 className={styles.error}>{apiError}</h2>}
            <h1>Home</h1>
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