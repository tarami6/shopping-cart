// an array with all of our cart items
var cart = [];

var updateCart = function () {
  // TODO: Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.
  var total = 0;
  $(".productList").remove();
  $(".cart-list").append("<ul class='productList'></ul>");
  for(var key in cart){
    var productName = cart[key].name;
    var productPrice=cart[key].price;
    createHandler(productName, productPrice);
    total += cart[key].price;
  }
  $(".total").html(total);
}

//create HandleBars function 
function createHandler(name,price){
  var product = {
    productName : name,
    productPrice : price
  }
  var source = $("#product-template").html();
  var template = Handlebars.compile(source);
  var newHtml = template(product);
  $(".productList").append(newHtml);
}

var addItem = function (item) {
  // TODO: Write this function. Remember this function has nothing to do with display. 
  // It simply is for adding an item to the cart array, no HTML involved - honest ;-)
  cart.push(item);
}

var clearCart = function () {
  // TODO: Write a function that clears the cart ;-)
  $(".productList").remove();
  $(".total").html(0);
  cart.length = 0;

}

$('.view-cart').on('click', function () {
  // TODO: hide/show the shopping cart!
  $(".shopping-cart").toggleClass("show");
});

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  var item = $(this).closest(".card").data();
  
  
  addItem(item);
  
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();


// test Area //
// $(this).closest(".card");



// test Area //