export default async function submitLogin(creds, setToken, setErrorMessage, navigate) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: JSON.stringify(
            `grant_type=&username=${creds.username}&password=${creds.password}&scope=&client_id=&client_secret=`
        ),
    };
    const response = await fetch("/token", requestOptions);
    const data = await response.json();

    if (!response.ok) {
        setErrorMessage(data.detail);
    } else {
        setToken(data.access_token);
        navigate("/");
    }
}