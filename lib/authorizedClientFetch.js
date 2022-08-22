import { getCookie } from "cookies-next";

export default async function authorizedClientFetch(endpoint, body = undefined, options) {
    const access_token = getCookie('access_token');
    console.log(body)
    const response = await fetch(endpoint, {
        ...options,
        ...(body ? { body: JSON.stringify(body) }: {}),
        headers: {
            'Authorization': `Bearer ${access_token}`,
            'Content-Type': 'application/json'
        }
    });

    let data = {};
    try {
        data = await response.json();
    }
    catch {}

    return {
       status: response.status,
       data
    }
}