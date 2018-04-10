/**
 * 
 * @param {string} url 
 * @param {string} method GET and POST is supported currently 
 * @param {object} params object params, will be attached to the tail of url if method is get, set to body if it is post
 */
function fetchPromisify(url, method = 'GET', params = {}) {
    const xhr = new XMLHttpRequest();
    const isGet = method.toUpperCase() === 'GET';
    const isPost = method.toUpperCase() === 'POST'
    const body = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');

    if (isGet) {
        url += `?${body}`;
    }

    xhr.open(method, url);

    if (isPost) {
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    }

    if (isPost) {
        xhr.send(body);
    } else {
        xhr.send();
    }

    return new Promise((resolve, reject) => {
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status >= 200) {
                const response = JSON.parse(xhr.responseText);
                if (response.res === 0) {
                    reject(response.resMsg);
                } else if (response.res === 1) {
                    resolve(response.data);
                }
            }
        }
    })
}
