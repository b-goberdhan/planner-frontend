
export default function checkIsResponseOK(response) {
    if (response.status === 200) {
        return Promise.resolve(response)
    }
    else {
        return Promise.reject(response)
    }
}