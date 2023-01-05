import styles from './TreeCard.module.css'

export default function TreeCard({ tree }) {
    return (
        <div className={styles.card} >
            <div className={styles.cardContainer} >
                <h3>Name: {tree.name}</h3>
                <img className={styles.treepicture} alt="tree" src={tree.img}></img>
                <p className={styles.treeDetail}> Species: {tree.species}</p>
                <p> Genus: {tree.genus}</p>
            </div>
        </div>
    )
}