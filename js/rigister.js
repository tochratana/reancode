const eyes = document.querySelectorAll(".eye");
const createSucessfull = document.getElementById("createSucessfull");
const lastName = document.getElementById("lastName");
eyes.forEach((eye) => {
  let isOpen = true; // Track the state of each eye individually

  eye.addEventListener("click", () => {
    if (isOpen) {
      eye.innerHTML = `<i class="fa-regular fa-eye"></i>`;
      isOpen = false;
    } else {
      eye.innerHTML = `<i class="fa-regular fa-eye-slash"></i>`;
      isOpen = true;
    }
  });
});
function togglePassword(fieldId) {
  const passwordField = document.getElementById(fieldId);
  if (passwordField.type === "password") {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
}

function login() {
  alert("I don't have to complete with this function yet!");
  // You can replace this with actual redirection logic
  // window.location.href = "login.html";
}

let stroname;

document
  .getElementById("createAccountForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const createPassword = document.getElementById("createPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const lastName = document.getElementById("lastName").value;

    // Function to display the text
    function displayText() {
      const messageElement = document.getElementById("message");
      messageElement.style.display = "block"; // Show the text

      // Set a timeout to hide the text after 5 seconds
      setTimeout(() => {
        messageElement.style.display = "none"; // Hide the text
      }, 2000); // 2000 milliseconds = 5 seconds
    }

    // Call the function to display the text

    if (createPassword !== confirmPassword) {
      displayText();
      return;
    }
    console.log(createPassword);
    console.log(confirmPassword);
    console.log(lastName);

    // Here you can add your form submission logic, e.g., sending data to a server
    window.location.href = "../dashboard/index.html";

    // window.location.href = "success.html"; // Redirect to a success page
  });

console.log("Hello");
