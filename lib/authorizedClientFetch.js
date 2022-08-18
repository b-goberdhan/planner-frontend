import { getCookie } from "cookies-next";

export default async function authorizedClientFetch(endpoint, body = {}, options) {
    const access_token = getCookie('access_token');
    const response = await fetch(endpoint, {
        ...options,
        body: JSON.stringify(body),
        headers: {
            'Authorization': `Bearer ${access_token}`,
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return {
       status: response.status,
       data
    }
}