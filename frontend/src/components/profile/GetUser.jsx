export default async function getUser(setUser, token, setApiError) {
    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
    };
    await fetch('user/me/', requestOptions)
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
};