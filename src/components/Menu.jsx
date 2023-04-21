function Menu() {
  const menuFood = {
    avocadoToast: 8.99,
    acaiBowl: 9.99,
    kaleSalad: 10.99,
    quinoaBowl: 11.99,
    roastSalmon: 13.99,
    chickenSandwich: 12.99,
  };

  const menuDrinks = {
    proteinDrink: 4.99,
    smoothie: 5.99,    
    kumbucha: 3.99,
    energyDrink: 3.99,
    tea: 2.99,
    water: 1.99,
  }

  const foodItems = Object.entries(menuFood).map(([item, price]) => (
    <li key={item}>
      {item.replace(/([A-Z])/g, ' $1').toUpperCase()} - ${price.toFixed(2)}
    </li>
  ));

  const drinkItems = Object.entries(menuDrinks).map(([item, price]) => (
    <li key={item}>
      {item.replace(/([A-Z])/g, ' $1').toUpperCase()} - ${price.toFixed(2)}
    </li>
  ));

  return (
    <>
      <h2>Our Menu</h2>
      <div id="Menu">
      <ul id="foodMenu">{foodItems}</ul>
      <ul id="drinkMenu">{drinkItems}</ul>
      </div>
      <button>Order Now</button>
    </>
  );
}

export default Menu;