import TreeCard from './tree_card/TreeCard'
import styles from './TreePage.module.css'

export default function TreePage({ trees, token, toggleEffect }) {

    return (
        <div className={styles.cards}>
            {trees.map((tree) => (
                <div key={tree.id}>
                    <TreeCard tree={tree} token={token} toggleEffect={toggleEffect} />
                </div>
            ))}
        </div>
    )
}