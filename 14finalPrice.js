const calculateTotalCost = (cart) => {
    return cart.reduce((total, item) => {
      return total + (item.unitPrice * item.quantity);
    }, 0);
  };
  
  // An Array of objects having unitPrice and Quantity
  const customerCart = [
    { unitPrice: 10, quantity: 2 },
    { unitPrice: 15, quantity: 1 },
    { unitPrice: 7, quantity: 3 }
  ];
  
  const totalCost = calculateTotalCost(customerCart);
  console.log("Total Cost:", totalCost);  // Output: Total Cost: 61
  