
export default function handler(req, res) {
    const body = req.body;
    const apiEndpoint = `${process.env.API_ENDPOINT}/account`
    
    fetch(apiEndpoint, { 
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(response =>  response.json())
    .then(data => {
        switch (data.statusCode) {
            case 400:
                res.redirect('/signup');
                break;
            default:
                res.redirect('/login');
                break;
        }
    });

}