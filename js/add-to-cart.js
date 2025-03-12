const addToCartButton = document.getElementById("ring-button");
const quantity = document.getElementById("quantity");

addToCartButton.addEventListener("click", function (event) {
  let qty = quantity.value;
  if (qty !== "") {
    localStorage.setItem("qty", qty);
  }
});
