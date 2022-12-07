export default async function editUser(user, setError) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ username: user.username, email: user.email, full_name: user.full_name, hashed_password: user.password })
    };

    const response = await fetch('register/', requestOptions);
    if (!response.ok) {
        setError(response.status, response.statusText);
    }
}
