import styles from "./ForgotPasswordModal.module.css"
import FormItem from "../../form/FormItem";

export default function SendEmail(props) {

    const onChange = (e) => {
        props.setEmail(e.target.value);
    }


    return (
        <div className={styles.modalContainer}>
            <FormItem
                type="text"
                id="email"
                label="Email"
                onChange={onChange}
                value={props.email}
            />
            <div className={styles.buttonContainer}>
                <button className={styles.createButton} onClick={props.sendCodeToUser}>Create</button>
                <button className={styles.backButton} type="button" onClick={props.toggleForgotPassModal}>Back</button>
            </div>
        </div>
    )
}