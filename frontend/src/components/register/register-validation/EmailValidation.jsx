const emailValidation = (email, setError) => {
    const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,5})/;
    if (!email || !emailRegex.test(email)) {
        setError("Invalid Email");
    } else {
        setError("");
    }

}
export default emailValidation