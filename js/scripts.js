function Pizza(size) {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.getPrice = function() {
  var basePrice;
  switch (this.size) {
    case "xl":
      basePrice = 20;
      break;
    case "lg":
      basePrice = 15;
      break;
    case "md":
      basePrice = 12;
      break;
    case "sm":
      basePrice = 10;
      break;
    case "mi":
      basePrice = 8;
      break;
  }
  var numberOfToppings = this.toppings.length;
  var price = (numberOfToppings * 2) + basePrice;
  return price;
}
