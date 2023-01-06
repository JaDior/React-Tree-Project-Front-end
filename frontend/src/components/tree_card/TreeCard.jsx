import styles from './TreeCard.module.css'
import DeleteMyTree from '../my_trees/DeleteMyTree'
import getId from '../utilits/GetId'

export default function TreeCard({ tree, token }) {
    return (
        <div className={styles.card} >
            <div className={styles.cardContainer} >
                {getId(token) === tree.owner_id ?
                    <button type="submit" className={styles.deleteButton} onClick={() => { DeleteMyTree(token, tree.id) }}>Delete</button> :
                    <br />
                }
                <h3>Name: {tree.name}</h3>
                <img className={styles.treepicture} alt="tree" src={tree.img}></img>
                <p className={styles.treeDetail}> Species: {tree.species}</p>
                <p> Genus: {tree.genus}</p>
            </div>
        </div>
    )
}