import styles from "./ForgotPasswordModal.module.css"
import FormItem from "../../form/FormItem";

export default function ChangePassword(props) {

    const onChange = (e) => {
        props.setPassword(e.target.value);
    }


    return (
        <div className={styles.modalContainer}>
            <h1>Select your new password</h1>
            <FormItem
                type="password"
                id="password"
                label="Password"
                onChange={onChange}
                value={props.password}
            />
            <div className={styles.buttonContainer}>
                <button className={styles.createButton} onClick={props.onSubmitPageTwo}>Create</button>
                <button className={styles.backButton} type="button" onClick={props.toggleForgotPassModal}>Back</button>
            </div>
        </div>
    )
}