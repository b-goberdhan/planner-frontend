import { getCookie } from "cookies-next"

export default function authorizedFetch(endpoint, ctx, options) {
    const {res, req} = ctx;
    const access_token = getCookie('access_token', { res, req })
    return fetch(endpoint, {
        ...options,
        headers: {
            'Authorization': `Bearer ${access_token}`,
            'Content-Type': 'application/json'
        }
    });
}