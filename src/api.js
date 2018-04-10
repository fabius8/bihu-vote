function getUserInfo() {
    const userInfo = JSON.parse(localStorage.getItem("ANDUI_BIHU_LOGININFO"));
    if (!userInfo) {
        throw 'please login!';
    }
    return userInfo;
}

/**
 * 
 * @param {*} sort how to sort articles will be called by sort
 */
async function fetchFollowArticles() {
    const URL = "https://be02.bihu.com/bihube-pc/api/content/show/getFollowArtList";
    const {
        userId,
        accessToken
    } = getUserInfo();

    const response = await fetchPromisify(URL, 'POST', {
        userId,
        accessToken
    })

    return response.artList.list;
}

/**
 * 
 * @param {number} artId article id
 */
function vote(artId) {
    const URL = 'https://be02.bihu.com/bihube-pc/api/content/upVote';
    const {
        userId,
        accessToken
    } = getUserInfo();

    fetchPromisify(URL, 'POST', {
        userId,
        accessToken,
        artId
    })
}
