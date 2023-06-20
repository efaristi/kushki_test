import fetch from 'node-fetch';

const kushki = new Kushki({
    merchantId: 'd79d2ac25c104ee384085c8b73627e1f',
    inTestEnvironment: true,
    regional: false
});

export default async function handler(req, res) {

    const { firstName, lastName, email, phoneNumber, amount, currency, token } = req.body;
    console.log({ firstName, lastName, email, phoneNumber, amount, currency, token });
    
    const response = await fetch('https://api-uat.kushkipagos.com/subscriptions/v1/card', {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Private-Merchant-Id': '3888fb5d884a489a9826646147c65dff'}, 
        body: {
            token,
            amount: { subtotalIva: 0, subtotalIva0: amount, ice: 0, iva: 0, currency },
            planName: 'Premium',
            periodicity: 'monthly',
            contactDetails: { firstName, lastName, email: email || 'pruebas@kushki.com', phoneNumber: phoneNumber || '+593984775632' },
            startDate: new Date().toISOString().slice(0, 10), // Fecha del primer cobro
            metadata: { contractID: '157AB' }
        },
    });
    const data = await response.json();
    
    console.log(data);
    res.status(200).json(data)

}

