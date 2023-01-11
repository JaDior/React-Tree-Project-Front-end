const passwordValidation = (password, setError) => {
    setError(null);
    let capsCount, smallCount, numberCount, symbolCount
    if (password.length < 4) {
        setError("Password must be minimum 4 characters include one UPPERCASE, lowercase, number and special character: @$! % * ? &");
        return;
    }
    else {
        capsCount = (password.match(/[A-Z]/g) || []).length
        smallCount = (password.match(/[a-z]/g) || []).length
        numberCount = (password.match(/[0-9]/g) || []).length
        symbolCount = (password.match(/\W/g) || []).length
        if (capsCount < 1) {
            setError("Must contain one UPPERCASE letter");
            return;
        }
        else if (smallCount < 1) {
            setError("Must contain one lowercase letter");
            return;
        }
        else if (numberCount < 1) {
            setError("Must contain one number");
            return;
        }
        else if (symbolCount < 1) {
            setError("Must contain one special character: @$! % * ? &");
            return;
        } else {
            setError("");
        }
    }
}

export default passwordValidation;