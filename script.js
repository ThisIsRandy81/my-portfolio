// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Back-to-top button functionality
const backToTopButton = document.createElement('button');
backToTopButton.innerText = 'Top';
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);
backToTopButton.style.display = 'none';

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Contact form validation
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const message = form.querySelector('textarea').value;

  if (name && email && message) {
    alert('Form submitted successfully!');
    form.reset();
  } else {
    alert('Please fill in all fields.');
  }
});
