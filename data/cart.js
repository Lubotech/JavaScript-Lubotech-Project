export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
  cart = [
    {
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
      deliveryOptionId:'1'
    }, {
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 1,
      deliveryOptionId:'2'
     }, {
      productId: '54e0eccd-8f36-462b-b68a-8182611d9add',
      quantity: 3,
      deliveryOptionId:'3'
     }
  ];
}


 function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
 }

// Function to add a product to the cart.
export function addToCart(productId) {
  let matchingItem;
  let addedMessageTimeoutId;

    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });

    const addedMessage = document.querySelector(
      `.js-added-to-cart-${productId}`
    );

    addedMessage.classList.add('added-to-cart-visible');

    // Check if a previous timeoutId exists. If it does,
      // we will stop it.
      if (addedMessageTimeoutId) {
        clearTimeout(addedMessageTimeoutId);
      }

      const timeoutId = setTimeout(() => {
        addedMessage.classList.remove('added-to-cart-visible');
      }, 2000);

      // Save the timeoutId so we can stop it later.
      addedMessageTimeoutId = timeoutId;
    // Increasing the quantity of the product if it already exists in the  cart.

    const quantitySelector = document.querySelector(
      `.js-quantity-selector-${productId}`
    );
    
    const quantity = Number(quantitySelector.value);

    if (matchingItem) {
      matchingItem.quantity += quantity;
    } else{
    // If the product is not in the cart, adding it.
    cart.push({
      productId: productId,
      quantity: quantity,
      deliveryOptionId:'1'
    });
    }

    saveToStorage();
}

// Function to remove a product from the cart.
export function removeFromCart(productId){
  const newCart = [];

  cart.forEach((cartItem) => {
    if (productId!== cartItem.productId) {
      newCart.push(cartItem);
    }
  });
  cart = newCart;

  saveToStorage();
}

// Function to update the quantity of a product in the cart.
export function updateDeliveryOption(productId, deliveryOptionId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.deliveryOptionId = deliveryOptionId;

  saveToStorage();
}

export function calculateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  return cartQuantity;
}

export function updateQuantity(productId, newQuantity) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.quantity = newQuantity;

  saveToStorage();
}