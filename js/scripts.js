function Order(pizzas) {
  this.pizzas = pizzas;

}

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
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

Pizza.prototype.getToppings = function() {
  toppings = this.toppings.join(", ");
  return toppings;
}

Order.prototype.totalPrice = function() {
  total = 0;
  this.pizzas.forEach(function(element) {
    total += element.getPrice();
  });
  return total;
}

var pizzas = [];


$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();



    var size = $("input:radio[name=size]:checked").val();
    var toppings = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      toppings.push(this.value);
    });
    var newPizza = new Pizza(size, toppings);
    pizzas.push(newPizza);
    console.log(pizzas);
    $("ul#pies-display").append("<li>" + newPizza.size + " pie with " + newPizza.getToppings() + "</li>");
    // $("ul#order-display").append("<li><span class='pizza'>" + newPizza.size + "</span></li>");

    // $(".pizza").last().click(function() {
    //   $("#pizza-display").text(newPizza.getToppings());
    // });
  });

  $("#order").click(function() {
    var newOrder = new Order(pizzas);
    console.log(newOrder);
    $("#order-display").text("Your total is $" + newOrder.totalPrice() + ".");
  });
});
