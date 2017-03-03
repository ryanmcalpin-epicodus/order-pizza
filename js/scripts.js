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
  var toppings ="";
  if (this.toppings.length > 2) {
    var last = this.toppings.pop();
    toppings = this.toppings.join(", ") + ", and " + last;
  } else if (this.toppings.length === 2) {
    toppings = this.toppings.join(" and ");
  } else if (this.toppings.length === 1) {
    toppings = this.toppings;
  }
  return toppings;
}

Order.prototype.totalPrice = function() {
  var total = 0;
  this.pizzas.forEach(function(element) {
    if (element) {
      total += element.getPrice();
    }
  });
  return total;
}



//UI LOGIC
var pizzas = [];
var ind = 0;
var clearInputs = function() {
  $("input").prop("checked", false);
}
var clearPriceDisplay = function() {
  $("#order-display").text("");
}

var makeOrderText = function(price, amount) {
  var txt;
  if (amount === 0) {
    alert("You haven't added any pizzas to your order!")
  } else if (amount === 1) {
    txt = "Your total is $" + price + " for " + amount + " pizza pie.";
  } else {
    txt = "Your total is $" + price + " for " + amount + " pizza pies.";
  }
  return txt;
}

var pizzaDescription = function(size, toppings, price) {
  var description;
  if (!toppings) {
    description = "<li>" + size + " cheese pie ($" + price + ")</li>"
  } else {
    description = "<li>" + size + " pie with " + toppings + " ($" + price + ")</li>"
  }
  return description;
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();


    var size = $("input:radio[name=size]:checked").val();
    var toppings = [];
    if (!size) {
      alert("Please select a size.");
    } else {
      $("input:checkbox[name=toppings]:checked").each(function() {
        toppings.push(this.value);
      });
      var newPizza = new Pizza(size, toppings);
      pizzas.push(newPizza);
      console.log(pizzas);
      var description = pizzaDescription(newPizza.size, newPizza.getToppings(), newPizza.getPrice());
      $("ul#pies-display").append(description);

      clearInputs();
      clearPriceDisplay();
    }
  });

  $("#remove").click(function() {
    pizzas.pop();
    $("li").last().remove();
    clearPriceDisplay();
  });

  $("#order").click(function() {
    var newOrder = new Order(pizzas);
    console.log(newOrder);
    var displayMessage = makeOrderText(newOrder.totalPrice(), newOrder.pizzas.length);
    $("#order-display").text(displayMessage);
    clearInputs();
  });
});
