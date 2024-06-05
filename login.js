const form = document.querySelector(".login");
const forms = document.querySelectorAll('.needs-validation')
const movies = document.querySelector('.movies');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password, terms }
  } = event.currentTarget;
  
  if (email.value === "" || password.value === "") {
      return console.log("Please fill in all the fields!");
    }
    
console.log(email.value, password.value);

form.style.display = 'none'
movies.style.display = 'block'

  form.reset();



});