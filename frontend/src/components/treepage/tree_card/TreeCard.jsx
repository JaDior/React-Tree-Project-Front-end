import styles from './TreeCard.module.css'
import DeleteMyTree from '../DeleteMyTree'
import getId from '../../utilits/GetId'

export default function TreeCard({ tree, token, toggleEffect }) {
    async function onDelete() {
        await DeleteMyTree(token, tree.id);
        toggleEffect();
    }
    return (
        <div className={styles.card} >
            <div className={styles.cardContainer} >
                {getId(token) === tree.owner_id ?
                    <button type="submit" className={styles.deleteButton} onClick={onDelete}>Delete</button> :
                    <br />
                }
                <h3>Name: {tree.name}</h3>
                <a className={styles.downloadLink} href={tree.img}>Download</a>
                <img className={styles.treepicture} alt="tree" src={tree.img}></img>
                <p className={styles.treeDetail}> Species: {tree.species}</p>
                <p> Genus: {tree.genus}</p>
            </div>
        </div>
    )
}