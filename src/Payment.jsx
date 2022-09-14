import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import "./payment.css";
import {useState,useEffect} from "react";
import axios from 'axios';
const KEY="pk_test_51LhuSwKO96OPe2eppEvdkgpSuGKnZb2bNT1MT6eBFb4gDVEwvlMiDFPyltHtg6KXDJkCeP4osGBdfQVlAdUvMRq8003zUtHYmr";
function Payment() {
  
  
    const[stripeToken,setStripeToken]=useState(null);

    const onToken=(token)=>{
  console.log(token);
   setStripeToken(token);
  }   

   useEffect(() =>{
   const makeRequest = async() =>{

    try{
        const res =  await axios.post("http://localhost:5000/api/checkout/payment",{
                 tokenId:stripeToken.id,
                 amount:2000,
        });
        console.log(res.data);
    }catch(err){
        console.log(err);
    }

   };
   stripeToken && makeRequest();

   },[stripeToken])



    return (
    <div className="pay-container">
        <StripeCheckout
        name="E-store"
        billingAddress
        shippingAddress
        description='Your total in 10$'
        amount={2000}
        token={onToken}
        stripeKey={KEY}
        >
        <button className="pay-button">
            Pay Now
            </button>
            </StripeCheckout>
    </div>
  )
}

export default Payment