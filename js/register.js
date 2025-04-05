document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('registrationForm');

  form.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const dob = document.getElementById('dob').value;
      const gender = document.getElementById('gender').value;
      const race = document.getElementById('race').value;
      const terms = document.getElementById('terms').checked;

      // Validate form fields
      if (name && email && phone && dob && gender && race && terms) {
          localStorage.setItem('registrationData', JSON.stringify({
              name,
              email,
              phone,
              dob,
              gender,
              race
          }));

          // Redirect to confirmation page
          window.location.href = "confirmation.html";
      } else {
          alert('Please fill in all fields and agree to the terms and conditions.');
      }
  });
});
