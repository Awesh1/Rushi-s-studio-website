function setErrorMsg(input, errormsg) {
  const formControl = input.parentElement;
  const element = formControl.querySelector("small");
  element.innerHTML = errormsg;
  formControl.className = "form-control error";
}

function setSuccessMsg(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

const isEmail = (mail) => {
  var atSymbol = mail.indexOf("@");
  if (atSymbol < 1) return false;
  return true;
};

function validate() {
  var name = document.getElementById("username").value.trim();
  var mail = document.getElementById("email").value.trim();
  var phone = document.getElementById("mobile").value.trim();
  var uadd = document.getElementById("address").value.trim();
  var event = document.getElementById("ename").selectedIndex;
  var eadd = document.getElementById("eventadd").value.trim();
  var edate = document.getElementById("eventdate").value.trim();

  //username validation
  if (name == "") {
    setErrorMsg(username, "Name is blank");
  } else if (name.length <= 2) {
    setErrorMsg(username, "Minimum 3 characters required");
  } else {
    setSuccessMsg(username);
  }

  //email Validation
  if (mail === "") {
    setErrorMsg(email, "Email-ID can not be blank");
  } else if (!isEmail(mail)) {
    setErrorMsg(email, "Not valid Email-ID");
  } else {
    setSuccessMsg(email);
  }

  //mobile validation
  if (phone == "") {
    setErrorMsg(mobile, "Mobile number is blank");
  } else if (phone.length == 10) {
    setSuccessMsg(mobile);
  } else {
    setErrorMsg(mobile, "Mobile number is not valid");
  }

  //address validation
  if (uadd == "") {
    setErrorMsg(address, "Address is blank");
  } else {
    setSuccessMsg(address);
  }

  //eventname validation
  if (event == 0) {
    setErrorMsg(ename, "Select any one option");
  } else {
    setSuccessMsg(ename);
  }

  //event date validation
  if (edate) {
    setSuccessMsg(eventdate);
  } else {
    setErrorMsg(eventdate, "Event Address is blank");
  }

  //event address validation
  if (eadd == "") {
    setErrorMsg(eventadd, "Event Date is blank");
  } else {
    setSuccessMsg(eventadd);
  }
}
