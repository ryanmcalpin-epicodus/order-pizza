function Pizza(size) {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.getPrice = function() {
  var basePrice;
  switch (this.size) {
    case "Extra Large":
      basePrice = 20;
      break;
    case "Large":
      basePrice = 15;
      break;
    case "Medium":
      basePrice = 12;
      break;
    case "Small":
      basePrice = 10;
      break;
    case "Mini":
      basePrice = 8;
      break;
  }
  var numberOfToppings = this.toppings.length;
  var price = (numberOfToppings * 2) + basePrice;
  return price;
}
