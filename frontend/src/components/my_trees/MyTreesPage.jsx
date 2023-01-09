import { useState, useEffect, useContext } from "react";
import styles from "./MyTreesPage.module.css"
import { UserContext } from "../../context/UserContext";
import GetMyTrees from "./GetMyTrees";
import CreateTreeModal from "../create_tree/CreateTreeModal";
import TreePage from "../treepage/TreePage";

export default function MyTreesPage() {
    const [token] = useContext(UserContext);
    const [trees, setTrees] = useState([]);
    const [createTree, setCreateTree] = useState();
    const [toggleEff, setToggleEff] = useState();
    useEffect(() => {
        GetMyTrees(token, setTrees);
    }, [token, toggleEff]);

    const toggleEffect = () => {
        setToggleEff(!toggleEff);
    }

    const toggleCreateTree = () => {
        setCreateTree(!createTree);
    }


    return (
        <div className={styles.wholePage}>
            {
                //check wheather we want to display the create tree page
                createTree ?
                    <>
                        <CreateTreeModal toggleCreateTree={toggleCreateTree} toggleEffect={toggleEffect} />
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
                            <TreePage trees={trees} token={token} toggleEffect={toggleEffect} />
                        </div>
                    </>
            }
        </div >
    )
}