import checkIsResponseOK from "../../../lib/checkIsResponseOK";

export default function handler(req, res) {
    const { method, headers, body } = req;
    const apiEndpoint = `${process.env.API_ENDPOINT}/goal`;
    console.log(body)
    if (method === 'POST') {
        return fetch(apiEndpoint, {
            method: 'post',
            headers,
            body: JSON.stringify(body)
        })
        .then(checkIsResponseOK)
        .then(response => response.json())
        .then(data => { 
            console.log(data)
            res.send(data) 
        })
        .catch(() => { res.status(400).end() })
    }
    else {
        res.setHeader('Allow', ['GET'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
   
}