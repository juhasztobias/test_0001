const api_url = 'http://localhost:4000/';
const putFirst = async (something: string) => {
    return fetch(api_url + 'api/putFirst', {
        body: JSON.stringify({
            item: something
            }),
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
    })
}

const putLast = async (something: string) => {
    return fetch(api_url + 'api/putLast',{
        body: JSON.stringify({
            item: something
        }),
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
    })
}

const removeFirst = async () => {
    return fetch(api_url + 'api/removeFirst', { method: 'DELETE' });
}

const removeLast = async () => {
    return fetch(api_url + 'api/removeLast', { method: 'DELETE' });
}


export {
    putFirst,
    putLast,
    removeFirst,
    removeLast
}