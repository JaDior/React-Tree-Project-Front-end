export default async function editUser(token, user, setUser, setApiError) {
    const requestOptions = {
         method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
        body: JSON.stringify({ username: user.username, email: user.email, full_name: user.full_name, hashed_password: user.password })
    };
    await fetch('user/update', requestOptions)
        .then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }

            setUser(data);
            console.log(data);
        })
        .catch(error => {
            setApiError(`Error: ${error}`);
            console.error('There was an error!', error);
        });
}