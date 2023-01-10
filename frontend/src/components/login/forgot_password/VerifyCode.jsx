export default async function verifyCode(setApiError, code) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: code }),
    };
    const response = await fetch("/verify-email-verification-code", requestOptions);
    const data = await response.json();

    if (!response.ok) {
        setApiError(data.detail);
    } else {

    }
}