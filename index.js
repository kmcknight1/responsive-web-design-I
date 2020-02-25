const header = document.querySelector("header");
const button = document.querySelector(".head button");
const features = document.querySelector(".nav-features");
const vision = document.querySelector(".nav-vision");
const product = document.querySelector(".nav-product");
const contact = document.querySelector(".nav-contact");
let timer = null;

window.addEventListener("scroll", function() {
  if (timer !== null) {
    clearTimeout(timer);
  }
  header.style.opacity = "0.8";
  timer = setTimeout(function() {
    header.style.opacity = "1";
  }, 150);
});

button.addEventListener("click", function() {
  if (timer !== null) {
    clearTimeout(timer);
  }
  button.textContent = "You Clicked Me!";
  timer = setTimeout(function() {
    button.textContent = "Get Started";
  }, 1000);
});

features.addEventListener("click", function() {
  if (timer !== null) {
    clearTimeout(timer);
  }
  features.textContent = "Page Coming Soon";
  timer = setTimeout(function() {
    features.textContent = "Features";
  }, 2000);
});

vision.addEventListener("click", function() {
  if (timer !== null) {
    clearTimeout(timer);
  }
  vision.textContent = "Page Coming Soon";
  timer = setTimeout(function() {
    vision.textContent = "Vision";
  }, 2000);
});

product.addEventListener("click", function() {
  if (timer !== null) {
    clearTimeout(timer);
  }
  product.textContent = "Page Coming Soon";
  timer = setTimeout(function() {
    product.textContent = "Product";
  }, 2000);
});

contact.addEventListener("click", function() {
  if (timer !== null) {
    clearTimeout(timer);
  }
  contact.textContent = "Page Coming Soon";
  timer = setTimeout(function() {
    contact.textContent = "Contact";
  }, 1500);
});
