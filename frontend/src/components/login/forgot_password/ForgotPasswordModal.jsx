import { useState } from "react"
import styles from "./ForgotPasswordModal.module.css"
import sendCode from "./SendCode";
import verifyCode from "./VerifyCode";
import SendEmail from "./SendEmailModal";
import VerifyCode from "./VerifyCodeModal";
import ChangePassModal from "./ChangePassModal";
import changePass from "./ChangePass";

export default function ForgotPasswordModal(props) {

    const [apiError, setApiError] = useState("");
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [pass, setPass] = useState("");
    const [page, setPage] = useState(1);

    const incrementPage = () => {
        var inc = page + 1;
        setPage(inc);
    }

    async function sendCodeToUser() {
        sendCode(setApiError, email, incrementPage);
    }

    async function verifyUserGotCode() {
        verifyCode(setApiError, code, incrementPage)
    }

    async function changePassword() {
        changePass(code, pass, email, setApiError)
    }

    return (
        <div className={styles.overlay}>
            <div className={styles.cancelEditProfileModalBackground}>
                {!apiError ? <div /> : <h2 className={styles.error}>{apiError}</h2>}
                {(() => {
                    switch (page) {
                        case 1:
                            return <SendEmail sendCodeToUser={sendCodeToUser} email={email} setEmail={setEmail} toggleForgotPassModal={props.toggleForgotPassModal} />
                        case 2:
                            return <VerifyCode verifyUserGotCode={verifyUserGotCode} code={code} setCode={setCode} toggleForgotPassModal={props.toggleForgotPassModal} />
                        case 3:
                            return <ChangePassModal changePassword={changePassword} toggleForgotPassModal={props.toggleForgotPassModal} setPass={setPass} />
                        default:
                            return null
                    }
                })()}
            </div>
        </div>
    )
}