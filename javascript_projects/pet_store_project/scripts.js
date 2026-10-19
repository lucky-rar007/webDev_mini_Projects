// Smooth scroll for nav links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Form submission handler
const form = document.getElementById('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  if (email) {
    alert(`Thanks for signing up, ${email}! 🐱 We'll send you purrfect deals soon.`);
    form.reset();
  }
});

// Footer dynamic year
const footer = document.getElementById('footer');
footer.innerHTML = `<p>&copy; ${new Date().getFullYear()} Purrfect Pets. All rights reserved.</p>`;
