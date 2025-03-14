const paragraphElement = document.getElementById("empty-paragraph");
const buttonElementDesc = document.getElementById("description-button");
const buttonElementComp = document.getElementById("composition-button");

paragraphElement.innerText =
  "This elegant silver ring features a delicate design adorned with sparkling rhinestones, adding a touch of brilliance to any look. Its sleek and timeless shape makes it perfect for both everyday wear and special occasions. Lightweight and comfortable, this ring effortlessly enhances your style with a subtle yet eye-catching shimmer.";

buttonElementDesc.addEventListener("click", function (event) {
  // page refresh fix via https://stackoverflow.com/questions/71671527/why-is-the-page-instantly-reloading-on-clicking-the-form-on-submit-button
  event.preventDefault();
  paragraphElement.innerText =
    "This elegant silver ring features a delicate design adorned with sparkling rhinestones, adding a touch of brilliance to any look. Its sleek and timeless shape makes it perfect for both everyday wear and special occasions. Lightweight and comfortable, this ring effortlessly enhances your style with a subtle yet eye-catching shimmer.";
});

buttonElementComp.addEventListener("click", function (event) {
  // page refresh fix via https://stackoverflow.com/questions/71671527/why-is-the-page-instantly-reloading-on-clicking-the-form-on-submit-button
  event.preventDefault();
  paragraphElement.innerText =
    "All jewelry is made of 925 sterling silver, a high-quality alloy consisting of 92.5% pure silver and 7.5% other metals, usually copper, to enhance durability. Each piece is carefully crafted and tested to meet the highest quality standards. All jewelry complies with EU regulations for nickel safety, meaning that the amount of nickel released is below the permitted limit (0.05%). While most metals contain trace amounts of nickel, the levels are minimal and safe for wear. The materials used in production are continuously tested to ensure the highest possible quality.";
});
