import { useContext } from "react";
import { useState } from "react"
import { UserContext } from "../../context/UserContext";
import styles from "./CreateTreeModal.module.css"
import FormItem from "../form/FormItem";
import createTree from "./CreateTree";

export default function CreateTreeModal(props) {

    const [token] = useContext(UserContext);
    const [tree, setTree] = useState({ file: "", private: false, name: "", species: "", genus: "" });
    const [file, setFile] = useState([]);
    const [apiError, setApiError] = useState("");


    const onChange = (e) => {
        if (e.target.id === 'img') {
            let files = e.target.files;
            setFile(files[0]);
        }
        setTree({ ...tree, [e.target.id]: e.target.value });
    }


    const onSubmit = () => {
        const formData = new FormData();
        formData.append("file", file, file.name);
        formData.append("private", tree.private);
        formData.append("name", tree.name);
        formData.append("species", tree.species);
        formData.append("genus", tree.genus);
        createTree(token, formData, setApiError);
        props.toggleCreateTree();
    }


    return (
        <div className={styles.overlay}>
            <div className={styles.cancelEditProfileModalBackground}>
                <div className={styles.modalContainer}>
                    <form id="createTreeForm" >
                        <FormItem
                            type="checkbox"
                            id="private"
                            label="Private"
                            onChange={onChange}
                            value={tree.private}
                        />
                        <FormItem
                            type="text"
                            id="name"
                            label="Name"
                            onChange={onChange}
                            value={tree.name}
                        />
                        <FormItem
                            type="text"
                            id="species"
                            label="Species"
                            onChange={onChange}
                            value={tree.species}
                        />
                        <FormItem
                            type="text"
                            id="genus"
                            label="Genus"
                            onChange={onChange}
                            value={tree.genus}
                        />
                        <FormItem
                            type="file"
                            id="img"
                            label="File"
                            onChange={onChange}
                            value={tree.img}
                        />
                    </form>
                    <div className={styles.buttonContainer}>
                        <button className={styles.createButton} onClick={onSubmit}>Create</button>
                        <button className={styles.backButton} type="button" onClick={props.toggleCreateTree}>Back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}