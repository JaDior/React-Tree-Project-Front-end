export default async function GetAllPublicTrees(setTrees, setApiError) {
    const requestOptions = {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("thisGuysToken"),
        },
    };
    await fetch('users/trees/public', requestOptions)
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
            console.log(data);
        })
        .catch(error => {
            setApiError(`Error: ${error}`);
            console.error('There was an error!', error);
        });
}