export default async function verifyCode(setApiError, code, incrementPage) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            "code": code
        }),
    };
    try {
        const response = await fetch("/verify-email-verification-code", requestOptions);
        const data = await response.json();
        if (response.status === 200) {
            incrementPage();
        }
        setApiError(data.message);
    }
    catch {
        setApiError("something went wrong");
    }
}