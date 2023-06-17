import fetch from 'node-fetch';

const handler = async (req, res)=> {
    
    const response = await fetch('https://api-uat.kushkipagos.com/subscriptions/v1/card/search/1686929703757000', {
        method: 'GET',
        headers: {'Content-Type': 'application/json', 'Private-Merchant-Id': '3888fb5d884a489a9826646147c65dff'}, 
    });
    const data = await response.json();
    
    console.log(data);

    const {cardHolderName} = data
    res.status(200).json({cardHolderName})
}

export default handler