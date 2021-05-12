function validation() {
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var errorMessage = document.getElementById("errorMessage");
  var text;

  errorMessage.style.padding = "10px";

  if (name.length < 5) {
    text = "Please Enter Valid Name";
    errorMessage.innerHTML = text;
    return false;
  }

  if (subject.length < 5) {
    text = "Please Enter A Subject (min. 5 characters)";
    errorMessage.innerHTML = text;
    return false;
  }

  if (email.indexOf("@") == -1 || email.length < 6) {
    text = "Please Enter Valid Email";
    errorMessage.innerHTML = text;
    return false;
  }

  if (message.length <= 40) {
    text = "Please Enter More Than 40 Characters";
    errorMessage.innerHTML = text;
    return false;
  }
  alert("Message sent");
  return true;
}
