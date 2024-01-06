const url =  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
class involvement {
    static postApp = async () => {
        const response = await fetch (url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            }
        });
        const data = await response.json();
        return data
    };

    static postComments = async (id, name, com) => {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                item_id: id,
                username: name,
                Comment: com,
            }),
            headers: {
                'content-type': 'application/json'
            }
        })
    }

    static getComments = async (id) => {
        const res = await fetch(url);
        const response = res.json();
        if (response.error) {
            return [];
        }
        return response;
    }
}

export {involvement}