const folioApp = {};

// burger menu
folioApp.mobileMenu = () => {
  folioApp.hamburger.classList.toggle("active");
  folioApp.navMenu.classList.toggle("active");
}

// horizontal line animation
folioApp.horizontalLineAnimation = () => {
  // Select the elements
  const portfolioRows = document.querySelectorAll('.portfolioRow');

  // Initialize an array to store the maximum scroll percentage reached for each horizontal line
  const maxScrollPercentages = [];

  // Add an event listener to the window object
  window.addEventListener('scroll', () => {
    // Loop through the portfolioRow elements and apply the effect to each one
    portfolioRows.forEach((portfolioRow, index) => {
      // Get the horizontalLine element inside the portfolioRow element
      let horizontalLine = portfolioRow.querySelector('.horizontalLine');

      // Check if the horizontalLine element exists
      if (horizontalLine) {
        // Get the height of the viewport
        const viewportHeight = window.innerHeight;

        // Get the distance between the top of the viewport and the top of the portfolioRow element
        const distanceFromTop = portfolioRow.getBoundingClientRect().top;

        // Calculate the scroll percentage (between 0 and 1) based on the distance from the top of the viewport
        const scrollPercentage = Math.max(0, Math.min(1 - distanceFromTop / viewportHeight, 1));

        // Check if the current scroll percentage is greater than the maximum scroll percentage reached for this horizontal line
        if (scrollPercentage > (maxScrollPercentages[index] || 0)) {
          // Set the width of the horizontalLine element based on the scroll percentage
          horizontalLine.style.width = `${scrollPercentage * 60}%`;

          // Update the maximum scroll percentage reached for this horizontal line
          maxScrollPercentages[index] = scrollPercentage;
        } else if (scrollPercentage === 0) {
          // If the user has scrolled back to the top of the page, set the width of the horizontalLine element to 50%
          horizontalLine.style.width = '60%';
        }
      }
    });
  });
}


folioApp.init = () => {
  folioApp.hamburger = document.querySelector(".hamburger");
  folioApp.navMenu = document.querySelector(".navbarLinks");
  folioApp.hamburger.addEventListener("click", folioApp.mobileMenu);
  folioApp.horizontalLineAnimation();
}

folioApp.init();
