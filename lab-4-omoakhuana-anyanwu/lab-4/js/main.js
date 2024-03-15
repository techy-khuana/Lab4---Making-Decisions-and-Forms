(function () {
  let newUsersList = document.querySelector(".new-users-list");
  console.log();
  // READ THE PDF BEFORE STARTING
  // Step 1-5 is read the pdf.

  // Add your code here
  const newUserForm = document.querySelector(".new-user-form");
  newUserForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Create variables for each input element using the "elements" attribute
    const usernameElement = e.target.elements.username;
    const cityElement = e.target.elements.city;
    const provinceElement = e.target.elements.province;

    // Create new variables for each input element value
    const username = usernameElement.value;
    const city = cityElement.value;
    const province = provinceElement.value;

    console.log("Username:", username);
    console.log("City:", city);
    console.log("Province:", province);

    let isFormValid = true; // variable to confirm form validity

    // Validate username
    if (isValueNotEmpty(username) && !hasWhiteSpace(username)) {
      usernameElement.classList.remove("is-invalid");
    } else {
      isFormValid = false;
      usernameElement.classList.add("is-invalid");
    }

    // Validate city
    if (isValueNotEmpty(city)) {
      cityElement.classList.remove("is-invalid");
    } else {
      isFormValid = false;
      cityElement.classList.add("is-invalid");
    }

    // Validate province
    if (isValueNotEmpty(province)) {
      provinceElement.classList.remove("is-invalid");
    } else {
      isFormValid = false;
      provinceElement.classList.add("is-invalid");
    }

    // If form is valid, call the addUser function
    if (isFormValid) {
      addUser(username, city, province);
      // Reset form values
      newUserForm.reset();
    }
  });

  // the isValueNotEmpty function:
  // returns true if value not empty
  // returns false if the value is empty
  function isValueNotEmpty(value) {
    if (value !== "") {
      return true;
    }
    return false;
  }

  // the hasWhiteSpace function
  // returns true if s has whitespace
  // returns false if s does not have whitespace
  function hasWhiteSpace(s) {
    return /\s/.test(s);
  }

  // adds user to the page.
  function addUser(username, city, province) {
    let newUser = `<li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">${username}</div>
                ${city}, ${province}
            </div>
            </li>`;
    newUsersList.innerHTML = newUsersList.innerHTML + newUser;
  }
})();
