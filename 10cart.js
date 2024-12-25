// Function to double the quantities in the cart
function correctCartQuantities(cart) {
    return cart.map((quantity) => quantity * 2);
  }
  
  let cart = [1, 2, 3, 4, 5]; // Quantities in the cart are halved
  console.log("Original cart:", cart);
  
  let correctedCart = correctCartQuantities(cart);
  console.log("Corrected cart:", correctedCart);
  