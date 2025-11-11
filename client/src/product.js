/* global Razorpay */

import TshirtImg from "./demo-tshirt.173097bd.svg";

function Product() {
  const amount = 500;
  const currency = "INR";
  const receipt = "receipt#1";

  const paymentHandler = async(e)=>{
    const response = await fetch("http://localhost:5000/order",{
      method:"POST",
      body:JSON.stringify({
        amount,
        currency,
        receipt:receipt,
      }),
      headers:{
        "content-type":"application/json",
      },
    });
    const order = await response.json();
    console.log(order);


    var options = {
    "key": "rzp_test_Rd7rjuRtJDimd1", // Enter the Key ID generated from the Dashboard
    amount , // Amount is in currency subunits.
    currency,
    "name": "Acme Corp", //your business name
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "handler": function (response){
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature)
    },
    "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
        "name": "A Shiva Kumar", //your customer's name
        "email": "Shiva.kumar@example.com", 
        "contact": "+910020200022"  //Provide the customer's phone number for better conversion rates 
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
var rzp1 = new window.Razorpay(options);
rzp1.on('payment.failed', function (response){
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
});
   rzp1.open();
   e.preventDefault();
    
};


  return (
    <>
    <div className="product">
      <h2>T-Shirt</h2>
      <p>This printed T-shirt</p>
      <img src={TshirtImg}/>
      <br />

      <button onClick={paymentHandler}>Pay</button>
    </div>
      
    </>
  );
}

export default Product;
