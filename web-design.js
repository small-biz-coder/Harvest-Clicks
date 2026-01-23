


function scrollToPricing() {
  const pricingDetails = document.getElementById('pricing-details');
  pricingDetails.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
document.addEventListener('DOMContentLoaded', () => {
    // Create an object to easily access URL parameters
  const urlParams = new URLSearchParams(window.location.search);

    // Get the value of the 'action' parameter
  const action = urlParams.get('action');

    // Check if the parameter has the value we expect
  if (action === 'pricing-section') {
scrollToPricing();
}
});