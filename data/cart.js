export const cart = [];

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
