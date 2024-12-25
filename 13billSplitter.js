const calculateBill = (dishes, numberOfPeople) => {
    const totalBill = dishes.reduce((total, dish) => total + dish.cost, 0);
    const perPersonBill = totalBill / numberOfPeople;

    return {
      totalBill: totalBill.toFixed(2),    
      perPersonBill: perPersonBill.toFixed(2)  
    };
  };
  

  const dishes = [
    { name: "Pizza", cost: 20 },
    { name: "Pasta", cost: 15 },
    { name: "Salad", cost: 10 }
  ];
  
  const numberOfPeople = 4;
  
  const bill = calculateBill(dishes, numberOfPeople);
  console.log(bill);
  
