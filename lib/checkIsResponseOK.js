
export default function checkIsResponseOK(response) {

    if (response.status === 200 || response.status === 201) {    
        return Promise.resolve(response)
    }
    else {
        return Promise.reject(response)
    }
}