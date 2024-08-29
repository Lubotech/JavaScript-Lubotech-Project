import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { renderOrderSummary, } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
// import '../data/cart-class.js';
//import '../data/backend-practice.js'

loadProducts(() => {
  // console.log(products); // You can now use the loaded products array in your app.
  // Start your app here. For example, render the checkout header, order summary, and payment summary.
  // For example:
   renderCheckoutHeader();
   renderOrderSummary();
   renderPaymentSummary();
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
