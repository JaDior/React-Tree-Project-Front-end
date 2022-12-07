const emailValidation = (email, setError) => {
    const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (!email || !emailRegex.test(email)) {
        setError("Invalid Email");
    } else {
        setError("");
    }

}
export default emailValidation