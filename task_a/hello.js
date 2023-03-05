const btn = document.getElementById("myButton");

btn.addEventListener("click", () => {
  const form = document.getElementById("form");

  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
});

function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  console.log("Username: " + username);
  console.log("Password: " + password);

  var output = document.getElementById("output");
  output.innerHTML =
    "Your username is: " + username + "<br>" + "Your password is: " + password;
}
