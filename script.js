
// Smooth Scroll for internal links
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[href^="#"]');  // Selects all internal links

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();  // Prevent default action

      const targetId = link.getAttribute('href').substring(1); // Get the target ID from the href
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',  // Smooth scroll effect
          block: 'start'  // Align to the top of the section
        });
      }
    });
  });
});
