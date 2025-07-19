
/* ----To switch between Login and Register Forms---- */

function showForm(formId) {
    document.querySelectorAll(".form-box").forEach(form => form.classList.remove("active"));
    document.getElementById(formId).classList.add("active");
}

/*----To connect html form with google Sheet---- */

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#registerForm form');

  form.addEventListener('submit', registerUser);

function registerUser(event) {
  event.preventDefault();

  const form = event.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    password: form.password.value
  };

  fetch("https://script.google.com/macros/s/AKfy******upMMQyu/exec", 
    {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(response => {
    alert("Registration Successful!");
    form.reset();
  })
  .catch(error => {
    alert("Registration failed: " + error);
  });
}
});
