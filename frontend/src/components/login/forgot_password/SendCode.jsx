import { json } from "react-router-dom";

export default async function sendCode(setApiError, email, incrementPage) {
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
    try {
        const response = await fetch("/send-email-verification-code", requestOptions);
        const data = await response.json();
        setApiError(data.message);
        if (response.status === 200) {
            incrementPage();
        }
    }
    catch {
        setApiError("You game me the wrong email");
    }
}