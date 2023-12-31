const tvId =  'MjgCDPvMKfBMbwFq4McF';
const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${tvId}/likes`;

const LikeApi = async () => {
    const LikeResult = await fetch(url);
    const getLikeResult =await LikeResult.json();
    return getLikeResult;
}

const submitLike = async (id) => {
    await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            item_id: id,
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
}

export {LikeApi, submitLike}