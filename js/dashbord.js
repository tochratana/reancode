const nam_user = document.querySelector(".name-user");
const profile_description = document.getElementById("display_none");
const profile_user = document.querySelector(".profile-user");
const logout = document.querySelector(".logout");

// logout.addEventListener("click", () => {
//   localStorage.removeItem("name");
// });

profile_description.style.display = "none";
profile_user.addEventListener("click", function () {
  if (profile_description.style.display == "none") {
    profile_description.style.display = "block";
  } else {
    profile_description.style.display = "none";
  }
});
let lastName_String = JSON.parse(localStorage.getItem("name"));

console.log(lastName_String);
nam_user.innerHTML = lastName_String;
