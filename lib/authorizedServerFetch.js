import { getCookie } from "cookies-next"

export default async function authorizedServerFetch(endpoint, ctx, options) {
    const {res, req} = ctx;
    const access_token = getCookie('access_token', { res, req });
    const response = await fetch(endpoint, {
        ...options,
        headers: {
            'Authorization': `Bearer ${access_token}`,
            'Content-Type': 'application/json'
        }
    });
    
    let data = {};
    try {
        data = await response.json();
    }
    catch { }
    return {
        status: response.status,
        data
    }
}