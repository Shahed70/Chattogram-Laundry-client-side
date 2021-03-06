import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import axios from 'axios';
const CheckOutForm = ({bookItem}) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }

    axios.post('https://serene-coast-10697.herokuapp.com/setBookedInfo',(bookItem))
    .then(res => console.log(res))
    .catch(err => console.log(err))
  };


  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" className="btn btn-primary mt-3" disabled={!stripe}>
        Pay Now
      </button>
    </form>
  );
};

export default CheckOutForm;