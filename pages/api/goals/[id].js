import checkIsResponseOK from "../../../lib/checkIsResponseOK";

export default function handler(req, res) {
    const { method, headers, query } = req;
    const apiEndpoint = `${process.env.API_ENDPOINT}/goal/${query.id}`;
    if (method === 'GET') {
        return fetch(apiEndpoint, {
            headers,
        })
        .then(checkIsResponseOK)
        .then(response => response.json())
        .then(data => { res.send(data) })
        .catch((err) => { res.status(err.status).end() })
    }
    else {
        res.setHeader('Allow', ['GET'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
   
}