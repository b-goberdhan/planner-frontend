import { deleteCookie, setCookie } from 'cookies-next'
import checkIsResponseOK from "../../lib/checkIsResponseOK";

export default function handler(req, res) {
    const apiEndpoint = `${process.env.API_ENDPOINT}/auth/login`;
    return fetch(apiEndpoint, { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
    })
    .then(checkIsResponseOK)
    .then(response => response.json())
    .then(data => {
        if (data.access_token) {
            deleteCookie('access_token', {req, res});
            setCookie('access_token', data.access_token, {req, res});
            res.redirect('/goals');
        }
    }).catch(() => {
        res.redirect('/login?error=true');
    })

}