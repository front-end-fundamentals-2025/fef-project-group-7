//header images slideshow
// code inspired by: https://www.youtube.com/watch?v=o_hRhTZORNY accessed 2025-03-03, also got help from student Erik Sandquist

const headlineImages = document.querySelectorAll(
  ".img-grid-grafica .headline-grafica"
);

const nextImageDelay = 3000;
let currentImageCounter = 0;

headlineImages[currentImageCounter].style.opacity = 1;

console.log(headlineImages);

function nextImage() {
  console.log(headlineImages[currentImageCounter], currentImageCounter);

  headlineImages[currentImageCounter].style.opacity = 0;
  currentImageCounter = currentImageCounter + 1;
  if (currentImageCounter >= headlineImages.length) {
    currentImageCounter = 0;
  }
  headlineImages[currentImageCounter].style.opacity = 1;
}

setInterval(nextImage, nextImageDelay);
