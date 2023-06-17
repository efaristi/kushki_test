import { Kushki } from "@kushki/js";

export default function handler(req, res) {
  var callback = function (response) {
    if (!response.code) {
      console.log(response);
      res.status(200).json({ response })

    } else {
      console.error('Error: ', response.error, 'Code: ', response.code, 'Message: ', response.message);
      res.status(400).json({ response })
    }
  }

  var kushki = new Kushki({
    merchantId: 'd79d2ac25c104ee384085c8b73627e1f', 
    inTestEnvironment: true,
    regional:false
  });

  kushki.requestToken({
    amount: '49.99',
    currency: "USD",
    card: {
      name: "Juan Guerra",
      number: "4544980425511225",
      cvc: "345",
      expiryMonth: "12",
      expiryYear: "28"
    },
  }, callback); // Also you can set the function directly

}
