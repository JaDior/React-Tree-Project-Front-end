export default async function DeleteMyTree(token, id, setMessage) {
    const formData = new FormData();
    formData.append("tree_id", id);
    const requestOptions = {
        method: 'PATCH',
        headers: {
            Authorization: "Bearer " + token,
        },
        body: formData
    };
    await fetch('user/tree-delete', requestOptions)
        .then(async response => {
            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = response.status;
                return Promise.reject(error);
            }
        })
        .catch(error => {
            setMessage(`Error ${error}: Somethings wrong`)
        });
}