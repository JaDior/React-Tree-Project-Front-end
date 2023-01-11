export default async function changePass(code, pass, email, setApiError) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            "code": code,
            "newp": pass,
            "email": email
        }),
    };
    const response = await fetch("/change-password-with-code", requestOptions);
    const data = await response.json();

    if (response.ok) {
        setApiError(data);
    } else {
        setApiError(data);
    }
}