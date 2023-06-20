import { Kushki } from "@kushki/js";

const kushki = new Kushki({
  merchantId: 'd79d2ac25c104ee384085c8b73627e1f',
  inTestEnvironment: true,
  regional: false
});

export default function handler(req, res) {

  const { cardInfo, amount, currency } = req.body;
  const {
    cvc,
    expiryMonth,
    expiryYear,
    name,
    cardNumber,
  } = cardInfo

  kushki.requestSubscriptionToken({
    amount, currency,
    card: {
      name: name,
      number: cardNumber,
      cvc: cvc,
      expiryMonth: expiryMonth,
      expiryYear: expiryYear,
    },
  }, (response) => {
    if (!response.code) {
      console.log(response);
      res.status(200).json(response)

    } else {
      console.error('Error: ', response.error, 'Code: ', response.code, 'Message: ', response.message);
      res.status(400).json({ response })
    }
  }); // Also you can set the function directly

}
