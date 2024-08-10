export const cart = [{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 2,
}, {
  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 1,
 }, {
  productId: '54e0eccd-8f36-462b-b68a-8182611d9add',
  quantity: 3,
 }];


// Function to add a product to the cart.
export function addToCart(productId) {
  let matchingItem;

    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });
    // Increasing the quantity of the product if it already exists in the  cart.

    if (matchingItem) {
      matchingItem.quantity++;
    } else{
    // If the product is not in the cart, adding it.
    cart.push({
      productId: productId,
      quantity: 1
    });
    }
}
