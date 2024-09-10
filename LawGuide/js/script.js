function showDisclaimerPopup() {
  var disclaimerPopup = document.getElementById("disclaimerPopup");
  disclaimerPopup.style.display = "block";
}

function closeDisclaimerPopup() {
  var disclaimerPopup = document.getElementById("disclaimerPopup");
  disclaimerPopup.style.display = "none";
}

function closeWebsite() {
  window.close();
}



// Initialize the carousel
var carousel = new bootstrap.Carousel(document.querySelector('#testimonial-carousel'), {
  interval: 3000, // Adjust the interval (in milliseconds) for sliding
  wrap: true // Set to true for continuous sliding
});
