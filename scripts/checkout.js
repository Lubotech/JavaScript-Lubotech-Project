import { renderOrderSummary, updateCartQuantity } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
updateCartQuantity();
renderOrderSummary();
renderPaymentSummary();