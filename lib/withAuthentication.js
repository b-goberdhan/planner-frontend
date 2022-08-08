import { getCookie } from "cookies-next";
import checkIsResponseOK from "./checkIsResponseOK";

export default (serverSidePropsFunc) => async (ctx) => {
    const {req, res} = ctx;
    const token = getCookie('access_token', {req, res});
    const apiEndpoint = `${process.env.API_ENDPOINT}/auth`;
    return fetch(apiEndpoint, { 
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(checkIsResponseOK)
    .then(() => serverSidePropsFunc(ctx))
    .catch(() => ({
            redirect: {
                destination: '/login',
                permanent: false
            }
        })
    )
}