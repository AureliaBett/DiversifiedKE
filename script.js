// Smooth Scroll for internal links
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
});

// Card hover scaling effect
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.style.transition = 'transform 0.3s, box-shadow 0.3s';

    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.05)';
      card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
      card.style.boxShadow = 'none';
    });
  });
});


//Sidebar Menu 
 function showSidebar(){
      const sidebar = document.querySelector('.sidebar')
      sidebar.style.display ='flex'
}
 function hideSidebar(){
      const sidebar = document.querySelector('.sidebar')
      sidebar.style.display ='none'
}


//Donate Section
document.querySelector('.donate-button').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default navigation

  // Replace with your donation form or modal logic
 // alert('Thank you for your interest in donating!');
});

document.querySelector('.donate-button').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default navigation

  // Redirect user to a payment page
  window.location.href = "payment.html";
});
// scripts.js
function changeFavicon(url) {
  const favicon = document.querySelector("link[rel='icon']");
  if (favicon) {
      favicon.href = url;
  } else {
      const newFavicon = document.createElement("link");
      newFavicon.rel = "icon";
      newFavicon.href = url;
      document.head.appendChild(newFavicon);
  }
}

// Example: Change favicon after 3 seconds
setTimeout(() => {
  changeFavicon("new-favicon.png"); // Replace with the new favicon URL
}, 3000);

