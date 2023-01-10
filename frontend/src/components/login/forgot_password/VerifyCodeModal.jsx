import styles from "./ForgotPasswordModal.module.css"
import FormItem from "../../form/FormItem";

export default function VerifyCode(props) {

    const onChange = (e) => {
        props.setCode(e.target.value);
    }


    return (
        <div className={styles.modalContainer}>
            <FormItem
                type="text"
                id="code"
                label="Verification Code"
                onChange={onChange}
                value={props.code}
            />
            <div className={styles.buttonContainer}>
                <button className={styles.createButton} onClick={props.verifyUserGotCode}>Create</button>
                <button className={styles.backButton} type="button" onClick={props.toggleForgotPassModal}>Back</button>
            </div>
        </div>
    )
}