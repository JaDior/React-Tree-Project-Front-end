export default async function GetMyTrees(token, setTrees, setMessage) {
    const requestOptions = {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
    };
    await fetch('user/trees/', requestOptions)
        .then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }

            setTrees(data);
        })
        .catch(error => {
            setMessage(`Error ${error}: Somethings wrong`)
        });
}