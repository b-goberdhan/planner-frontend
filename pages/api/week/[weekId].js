import checkIsResponseOK from "../../../lib/checkIsResponseOK";

export default function handler(req, res) {
    const { method, headers, query } = req;
    const apiEndpoint = `${process.env.API_ENDPOINT}/week/${query.weekId}`;
    if (method === 'GET') {
        return fetch(apiEndpoint, {
            method: 'get',
            headers
        })
        .then(checkIsResponseOK)
        .then(response => response.json())
        .then(data => { 
            res.send(data) 
        })
        .catch((err) => { 
            res.status(400).end() 
        })
    }
    else {
        res.setHeader('Allow', ['GET'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
}