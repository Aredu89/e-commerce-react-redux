import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51JJmYfIJ70jgOfZoth8vmcP2jg1EIBRjlKGZ7hWpYacfcQCkKOpkPTfSVSnWbnIMavNOlq5wGbbir05ijE7IlHUz00tvHNtNfD';

  const onToken = token => {
    console.log("Token: ", token);
    alert('Payment Successful');
  };

  return(
    <StripeCheckout
      label='Pay Now'
      name='e-commerce-react'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;