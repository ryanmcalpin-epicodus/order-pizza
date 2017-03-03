function Pizza(size) {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.getPrice = function() {
  var basePrice = 15;
  var numberOfToppings = this.toppings.length;
  var price = (numberOfToppings * 2) + basePrice;
  return price;
}
