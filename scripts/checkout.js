import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { renderOrderSummary, } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import '../data/cart-class.js';
//import '../data/backend-practice.js'

Promise.all([
  new Promise((resolve) =>{
  
    loadProducts(() => {
      resolve('value1');
    });
  }),
  new Promise((resolve) =>{
    loadCart(() => {
      resolve();
    });
  })
]).then((values) => {
  console.log(values);
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});


/*
new Promise((resolve) =>{
  
  loadProducts(() => {
    resolve('value1');
  });
}).then((value) => {
  console.log(value);

  return new Promise((resolve) =>{
    loadCart(() => {
      resolve();
    });
  });
}).then(() => {
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
  
});


/*
loadProducts(() => {
  // console.log(products); // You can now use the loaded products array in your app.
  // Start your app here. For example, render the checkout header, order summary, and payment summary.
  // For example:

   loadCart(() => {
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
   });

  //
  // You can also add event listeners for any buttons or form inputs to update the cart or make requests to the backend.
  // For example:
  // const addToCartButton = document.querySelector('.js-add-to-cart-button');
  // addToCartButton.addEventListener('click', addToCart);
  //
  // const updateQuantityInputs = document.querySelectorAll('.js-quantity-input');
  // updateQuantityInputs.forEach((input) => {
  //   input.addEventListener('input', updateQuantity);
  // });
  //
  // const deliveryOptionSelect = document.querySelector('.js-delivery-option-select');
  //
});
*/
