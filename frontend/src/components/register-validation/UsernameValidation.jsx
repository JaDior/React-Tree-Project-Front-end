const usernameValidaiton = (username, setError) => {
    if (username.length < 3) {
        setError("Username must be greater than 3 letters.");
    } else {
        checkUsername(username, setError)
    }

}
export default usernameValidaiton

async function checkUsername(username, setError) {
    const response = await fetch('user/username=' + username);
    if (response.status === 204) {
        setError("That username has already been used");
    } else {
        setError("");
    }

}
