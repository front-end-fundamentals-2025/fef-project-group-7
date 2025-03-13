// the following code was retrieved from https://www.w3schools.com/howto/howto_js_collapsible.asp

var coll = document.getElementsByClassName("collapsible-menu");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var coll = document.getElementsByClassName("collapsible-cart");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// end of citation

// CART FUNCTIONALITY

const addButton = document.getElementById("ring-button");
const cartItems = document.getElementById("cart-item");
const deleteItem = document.getElementById("delete-button");
const quantityChooser = document.getElementById("quantity");
const sizeChooser = document.getElementById("size-chooser");
const checkoutButton = document.getElementById("checkout-button");

addButton?.addEventListener("click", function () {
  let quantity = quantityChooser.value;
  let size = document.querySelector('input[name="size"]:checked')?.value;

  if (quantity !== "" && size) {
    localStorage.setItem("quantity", quantity);
    localStorage.setItem("size", size);
    localStorage.setItem("tyraRing", "inCart");
    localStorage.setItem("imgSrc", "img/ring-tyra.png");
    localStorage.setItem("trashImgSrc", "img/delete.png");
    localStorage.setItem("name", "TYRA RING");
    addToCart();
  }
});

function addToCart() {
  const imgSrc = localStorage.getItem("imgSrc");
  const trashImgSrc = localStorage.getItem("trashImgSrc");
  const name = localStorage.getItem("name");
  const size = localStorage.getItem("size");
  const quantity = localStorage.getItem("quantity");
  if (imgSrc && name && size && quantity) {
    document.getElementById("empty-img").src = imgSrc;
    document.getElementById("delete-button").src = trashImgSrc;
    document.getElementById("empty-h3").innerText = name;
    document.getElementById("empty-size").innerText = "SIZE: " + size;
    document.getElementById("empty-quantity").innerText =
      "QUANTITY: " + quantity;

    const totalPrice = 500 * quantity;
    document.getElementById("cart-total").innerText =
      "TOTAL: " + totalPrice + " KR";
  }
}

deleteItem.addEventListener("click", function () {
  localStorage.removeItem("tyraRing");
  localStorage.removeItem("quantity");
  localStorage.removeItem("size");
  localStorage.removeItem("imgSrc");
  localStorage.removeItem("trashImgSrc");
  localStorage.removeItem("name");

  document.getElementById("empty-img").src = "";
  document.getElementById("delete-button").src = "";
  document.getElementById("empty-h3").innerText = "";
  document.getElementById("empty-size").innerText = "";
  document.getElementById("empty-quantity").innerText = "";
  document.getElementById("cart-total").innerText = "";
});

checkoutButton.addEventListener("click", function () {
  localStorage.removeItem("tyraRing");
  localStorage.removeItem("quantity");
  localStorage.removeItem("size");
  localStorage.removeItem("imgSrc");
  localStorage.removeItem("trashImgSrc");
  localStorage.removeItem("name");

  document.getElementById("empty-img").src = "";
  document.getElementById("delete-button").src = "";
  document.getElementById("empty-h3").innerText = "";
  document.getElementById("empty-size").innerText = "";
  document.getElementById("empty-quantity").innerText = "";
});

// Fix for cart emptying when refreshing or switching between pages https://chatgpt.com/share/67d2eafd-62ec-800e-abec-0b4fc51d19f2

document.addEventListener("DOMContentLoaded", function () {
  addToCart();
});

// end of citation
