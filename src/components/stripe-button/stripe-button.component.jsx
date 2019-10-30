import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price * 10;
    const publishAbleKey = 'pk_test_RKigoTbUJRBhSYsoLGmKSLVy00yNI90pLd';

    const onToken = token => {
        console.log("d", token);
        alert ('Payment Success!');
    }
    return (
        <StripeCheckout
        label="Pay now"
        name="HN Ltd."
        billingAddress
        shippingAddress
        image="https://sendeyo.com/up/d/f3eb2117da"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay now"
        token={onToken}
        stripeKey={publishAbleKey}
        />
    )
};
export default StripeCheckoutButton;