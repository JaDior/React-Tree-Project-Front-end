import { json } from "react-router-dom";

export default async function sendCode(setApiError, email) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body:
            JSON.stringify({
                "email": [
                    email
                ]
            }),
    };
    const response = await fetch("/send-email-verification-code", requestOptions);
    const data = await response.json();

    if (!response.ok) {
        setApiError(data.detail);
    } else {

    }
}