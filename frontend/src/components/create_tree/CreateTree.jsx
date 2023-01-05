export default async function createTree(token, tree, formData, setApiError) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',
            Authorization: "Bearer " + token,
        },
        body: { formData }
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
        })
        .catch(error => {
            setApiError(`Error: ${error}`);
        });
}