const url =  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
class Involvement {
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
        await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HW8Zns3g7hE8XehtHEw6/comments', {
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
        const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/4va6c4ouZmpzSETsANV3/comments?item_id=${id}`).then((res) => res.json());
        return response;
    };
}

export {Involvement}