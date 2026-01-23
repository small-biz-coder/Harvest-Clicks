
function updateMainHeight() {
  var heroPic = document.querySelector("#hero-main");
  var mainHeight = heroPic.offsetHeight + 'px';
  document.documentElement.style.setProperty
  ('--heroMainHeight', mainHeight);
}

window.addEventListener("load", updateMainHeight);
window.addEventListener("resize", updateMainHeight);


function scrollToPricing() {
  const pricingDiv = document.getElementById('pricing');
  pricingDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
document.addEventListener('DOMContentLoaded', () => {
    // Create an object to easily access URL parameters
  const urlParams = new URLSearchParams(window.location.search);

    // Get the value of the 'action' parameter
  const action = urlParams.get('action');

    // Check if the parameter has the value we expect
  if (action === 'pricing') {
scrollToPricing();
}
});

