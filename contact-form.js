// Contact Form Functionality
document.addEventListener('DOMContentLoaded', function() {
  // EmailJS Integration
  (function () {
    emailjs.init("vuVazufng8ZEBJMG4"); // Replace with your actual EmailJS Public Key
  })();

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      emailjs.sendForm("service_sbz7jld", "template_0788ht9", this)
        .then(function () {
          contactForm.reset();
          // Optional: Show success message
          alert("Message sent successfully!");
        }, function (error) {
          // Optional: Show error message
          alert("Error sending message. Please try again.");
        });
    });
  }
}); 