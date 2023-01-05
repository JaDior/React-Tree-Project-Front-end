import { useState, useEffect, useContext } from "react";
import styles from "./MyTreesPage.module.css"
import TreeCard from "../tree_card/TreeCard";
import { UserContext } from "../../context/UserContext";
import GetMyTrees from "./GetMyTrees";
import CreateTreeModal from "../create_tree/CreateTreeModal";

export default function MyTreesPage() {
    const [token] = useContext(UserContext);
    const [trees, setTrees] = useState([]);
    const [createTree, setCreateTree] = useState();
    useEffect(() => {
        GetMyTrees(token, setTrees);
    }, []);

    const toggleCreateTree = () => {
        setCreateTree(!createTree);
    }
    return (
        <div className={styles.wholePage}>
            {
                //check wheather we want to display the create tree page
                createTree ?
                    <>
                        <CreateTreeModal toggleCreateTree={toggleCreateTree} />
                    </> :
                    <>
                        <div>
                            <div className={styles.innerHeader}>
                                {
                                    !trees[0] ?
                                        <h1 className={styles.title}>You Should Create Some Trees</h1> :
                                        <h1 className={styles.title}>My Trees</h1>
                                }
                                <div className={styles.createButtonContainer}>
                                    <button className={styles.createButton} onClick={toggleCreateTree}>Create Tree</button>
                                </div>
                            </div>
                            <div className={styles.cards}>
                                {trees.map((tree) => (
                                    <div key={tree.id}>
                                        <TreeCard tree={tree} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
            }
        </div>
    )
}