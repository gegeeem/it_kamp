const CART_DATA = [
    {
      id: 1,
      name: "Hawai Shirt",
      price: 30,
      amount: 2,
      categorty: "summer",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Adidas Slippers",
      price: 35,
      amount: 1,
      categorty: "summer",
      rating: 4.5,
    },
    {
      id: 6,
      name: "White T-Shirt",
      price: 15,
      amount: 4,
      categorty: "summer",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Summer hat",
      price: 7.5,
      amount: 3,
      categorty: "summer",
      rating: 40,
    },
  ];

  
  function shpCart(array){
    const shoppinCart = array.map(el=>{
        return {
            name: el.name,
            price: el.price,
            amount: el.amount,
            total: ''
        }
      }).map(el=>{
        let totalPrice = el.amount*el.price;
        //console.log(totalPrice);
        el.total = totalPrice;
        return {
            name: el.name,
            
            total: el.total
        }
      });
      const sumAllPrices = shoppinCart.reduce((acc, curr)=>{
        acc =acc + curr.total;
        return acc
      },0);
      const shipping_cost = 320;
      const final_price = sumAllPrices + shipping_cost;
      const numberOfProducts = shoppinCart.length;
      //console.log(sumAllPrices);
      //console.log(shoppinCart);
    
      console.log(`You got products ${numberOfProducts} in cart, shipping cost is ${shipping_cost}, your total is ${final_price}`)
  }
  shpCart(CART_DATA);