function Order() {
  this.pizzas = [];

}

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
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

Order.prototype.totalPrice = function() {
  total = 0;
  this.pizzas.forEach(function(element) {
    total += element.getPrice();
  });
  return total;
}


$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var newOrder = new Order();

    var size = $("input:radio[name=size]:checked").val();
    var toppings = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      toppings.push(this);
    });
    var newPizza = new Pizza(size, toppings);
    newOrder.pizzas.push(newPizza);

    newOrder.pizzas.forEach(function(pizza) {
      $("ul#order-display").append("<li><span class='pizza'>" + pizza.size + "</span></li>");
    });
  });
});
