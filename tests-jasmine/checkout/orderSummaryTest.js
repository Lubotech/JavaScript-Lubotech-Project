import { renderOrderSummary } from "../../scripts/checkout/orderSummary.js";
import { addToCart, cart, loadFromStorage } from "../../data/cart.js";

describe('test suite: renderOrderSummary',() => {
  // test('renders order summary', () => {
  //   renderOrderSummary();
  //   const orderSummaryElement = document.querySelector('.js-order-summary');
  //   expect(orderSummaryElement).toBeTruthy();
  // });

  // test('renders payment summary', () => {
  //   renderOrderSummary();
  //   const paymentSummaryElement = document.querySelector('.js-payment-summary');
  //   expect(paymentSummaryElement).toBeTruthy();
  // });

  // test('renders checkout header', () => {
  //   renderOrderSummary();
  //   const checkoutHeaderElement = document.querySelector('.js-checkout-header');
  //   expect(checkoutHeaderElement).toBeTruthy();
  // });

  // test('renders cart items', () => {
  //   renderOrderSummary();
  //   const cartItemsElement = document.querySelector('.js-cart-items');
  //   expect(cartItemsElement).toBeTruthy();
  // });

  const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
  const productId2 = '54e0eccd-8f36-462b-b68a-8182611d9add';

  beforeEach(() => {
    spyOn(localStorage, 'setItem');
    
    document.querySelector('.js-test-container').innerHTML = '<div class="js-order-summary"></div> <div class="js-payment-summary"></div>'
    ;

    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([
        {
          productId: productId1,
          quantity: 2,
          deliveryOptionId:'1'
        }, {
          productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
          quantity: 1,
          deliveryOptionId:'2'
         }, {
          productId: productId2,
          quantity: 3,
          deliveryOptionId:'3'
         }
      ]);
    });
    
    loadFromStorage();

    renderOrderSummary();
  });
  it('displays the cart', () => {
    expect(
     document.querySelectorAll('.js-cart-item-container').length
    ).toEqual(3);

    expect(
     document.querySelector(`.js-product-quantity-${productId1}`).innerText
    ).toContain('Quantity: 2');

    expect(
      document.querySelector(`.js-product-quantity-${productId2}`).innerText
     ).toContain('Quantity: 3');
  });

  it('removes a product', () => {
    document.querySelector(`.js-delete-link-${productId1}`).click();
    expect(
      document.querySelector(`.js-cart-item-container`).length
     ).toEqual(1);
    expect(
     document.querySelector(`.js-cart-item-container-${productId1}`)).toEqual(null); 
  });
});