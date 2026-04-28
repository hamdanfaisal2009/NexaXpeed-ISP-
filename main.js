// NexaXpeed — Main JS

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
  });
  // Close on nav link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
    });
  });
}

// Animate elements on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-item, .pkg-card, .plan-card, .intro-card, .portal-card, .tip-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});


document.getElementById("myForm").addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let address = document.getElementById("address").value;
  let message = document.getElementById("message").value;
  let area = document.getElementById("area").value;
  let package = document.getElementById("package").value;

  let fullMessage =
`New Connection Request:
Name: ${name}
Phone: ${phone}
Address: ${address}
Area: ${area}
Package: ${package}
Message: ${message}`;


  // 🔥 WhatsApp (replace number with your own)
  let whatsappNumber = "+92 3272585977"; // country code required
  let waURL = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(fullMessage);

  // 📲 SMS (mobile only works on phone)
  let smsURL = "sms:?body=" + encodeURIComponent(fullMessage);

  // Open both options (choose one)
  window.open(waURL, "_blank");

  // optional: also open SMS
  setTimeout(() => {
    window.location.href = smsURL;
  }, 1000);

});