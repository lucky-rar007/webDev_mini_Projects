const fullNameInput = document.querySelector("#full-name");
const emailInput = document.querySelector("#email");
const orderNoInput = document.querySelector("#order-no");
const productCodeInput = document.querySelector("#product-code");
const quantityInput = document.querySelector("#quantity");

const complaints = document.querySelectorAll(
  "#complaints-group input[type='checkbox']"
);

const complaintsGroup = document.querySelector("#complaints-group");
const otherComplaint = document.querySelector("#other-complaint");
const complaintDescription = document.querySelector("#complaint-description");

const solutions = document.querySelectorAll(
  "#solutions-group input[type='radio']"
);

const solutionsGroup = document.querySelector("#solutions-group");
const otherSolution = document.querySelector("#other-solution");
const solutionDescription = document.querySelector("#solution-description");

const form = document.querySelector("#form");


function validateForm() {
  let result = {
    "full-name": false,
    "email": false,
    "order-no": false,
    "product-code": false,
    "quantity": false,
    "complaints-group": false,
    "complaint-description": true,
    "solutions-group": false,
    "solution-description": true
  };


  result["full-name"] = fullNameInput.value.trim() !== "";


  result["email"] =
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
      .test(emailInput.value);


  result["order-no"] =
    /^2024\d{6}$/
      .test(orderNoInput.value);


  result["product-code"] =
    /^[A-Za-z]{2}\d{2}-[A-Za-z]\d{3}-[A-Za-z]{2}\d$/
      .test(productCodeInput.value);


  result["quantity"] =
    Number(quantityInput.value) > 0;


  result["complaints-group"] =
    Array.from(complaints)
      .some(checkbox => checkbox.checked);


  if (otherComplaint.checked) {
    result["complaint-description"] =
      complaintDescription.value.trim().length >= 20;
  }


  result["solutions-group"] =
    Array.from(solutions)
      .some(radio => radio.checked);


  if (otherSolution.checked) {
    result["solution-description"] =
      solutionDescription.value.trim().length >= 20;
  }


  return result;
}



function isValid(result) {
  return Object.values(result)
    .every(value => value === true);
}



function setColor(element, valid) {
  element.style.borderColor = valid ? "green" : "red";
}


function setGroupColor(fieldset, valid) {
  fieldset.style.borderColor = valid ? "green" : "red";
}





fullNameInput.addEventListener("change", () => {
  const result = validateForm();
  setColor(fullNameInput, result["full-name"]);
});


emailInput.addEventListener("change", () => {
  const result = validateForm();
  setColor(emailInput, result["email"]);
});


orderNoInput.addEventListener("change", () => {
  const result = validateForm();
  setColor(orderNoInput, result["order-no"]);
});


productCodeInput.addEventListener("change", () => {
  const result = validateForm();
  setColor(productCodeInput, result["product-code"]);
});


quantityInput.addEventListener("change", () => {
  const result = validateForm();
  setColor(quantityInput, result["quantity"]);
});



complaints.forEach(checkbox => {
  checkbox.addEventListener("change", () => {
    const result = validateForm();

    setGroupColor(
      complaintsGroup,
      result["complaints-group"]
    );
  });
});



complaintDescription.addEventListener("change", () => {
  const result = validateForm();

  setColor(
    complaintDescription,
    result["complaint-description"]
  );
});



solutions.forEach(radio => {
  radio.addEventListener("change", () => {
    const result = validateForm();

    setGroupColor(
      solutionsGroup,
      result["solutions-group"]
    );
  });
});



solutionDescription.addEventListener("change", () => {
  const result = validateForm();

  setColor(
    solutionDescription,
    result["solution-description"]
  );
});




form.addEventListener("submit", (e) => {
  e.preventDefault();

  const result = validateForm();

  if (!isValid(result)) {

    if (!result["full-name"])
      setColor(fullNameInput, false);

    if (!result["email"])
      setColor(emailInput, false);

    if (!result["order-no"])
      setColor(orderNoInput, false);

    if (!result["product-code"])
      setColor(productCodeInput, false);

    if (!result["quantity"])
      setColor(quantityInput, false);

    if (!result["complaints-group"])
      setGroupColor(complaintsGroup, false);

    if (!result["complaint-description"])
      setColor(complaintDescription, false);

    if (!result["solutions-group"])
      setGroupColor(solutionsGroup, false);

    if (!result["solution-description"])
      setColor(solutionDescription, false);

    return;
  }

  console.log("Form submitted successfully");
});