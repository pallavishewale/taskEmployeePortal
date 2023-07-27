//validations for new employee.
function ValidateEmployee(id, name, age, designation, url, gender) {

  let v1 = checkId(id);
  let v2 = checkName(name);
  let v3 = checkAge(age);
  let v4 = checkDesiganation(designation);
  let v5 = checkUrl(url);
  let v6= checkGender(gender);

  if (v1 && v2 && v3 && v4 && v5 && v6) {
    return 1;
  }
  return 0;

}


var error_msg = "";
//validations for id
function checkId(id) {

  id = parseInt(id, 10);   //convert into integer
  document.getElementById('id-error').style.display = "none";
  error_msg = '';

  if (id != null) {

    if (employee_tokens.includes(id)) {
      error_msg = " Token already exist";
    }
    else {
      if (Number.isInteger(id)) {

        if (id < 1 ) {
          error_msg = "Id should be greter than 0"
        }
        if(id > 999999){
          error_msg="Enter 6 digit Id only."
        }

      }
      else {
        error_msg = "Enter numaric value."

      }
    }
  }


  if (error_msg) {
    document.getElementById('id-error').innerHTML = error_msg;
    document.getElementById('id-error').style.display = "block";

  }
  else {
    return 1;
  }
}

//validations for name
function checkName(name) {

  document.getElementById('name-error').style.display = "none";
  error_msg = "";

  if (name != "") {

    if (!/^[a-zA-Z\s]+$/.test(name)) {
      error_msg = "Enter only alphabets.";
    }
  }
  else
    error_msg = "fill the name";

  if (error_msg) {
    document.getElementById('name-error').innerHTML = error_msg;
    document.getElementById('name-error').style.display = "block";
  }
  else
    return 1;

}

// validations for age
function checkAge(age) {

  error_msg = "";
  age = parseInt(age, 10);
  document.getElementById('age-error').style.display = "none";


  if (age != null) {
    if (Number.isInteger(age)) {

      if (age > 60 || age < 18) {

        error_msg = "age group 18 to 60 is allow";
      }

    } else
      error_msg = "Enter possitive age";
  }

  if(error_msg) {

    document.getElementById('age-error').innerHTML = error_msg;
    document.getElementById('age-error').style.display = "block";
  }
  else
    return 1;


}


function checkDesiganation(designation) {
  document.getElementById('designation-error').style.display = "none";
  console.log(designation)
  error_msg = "";

  if (designation != "Designation") {
    return 1;
  }else {
    error_msg = "select your desigation";
    document.getElementById('designation-error').innerHTML = error_msg;
    document.getElementById('designation-error').style.display = "block";
  }

  
  return 0;
}

// validations for url
function checkUrl(url){
  document.getElementById('url-error').style.display = "none";
  console.log(url);
  error_msg = "";

  if (url != "") {
    
    return 1;
  }else {
    
    error_msg = "Provide image path";
    document.getElementById('url-error').innerHTML = error_msg;
    document.getElementById('url-error').style.display = "block";
  }
  return 0;
}

//validation for gender
function checkGender(gender){
  document.getElementById('gender-error').style.display = "none";
  console.log(designation)
  error_msg = "";

  if (gender != "gender") {
    return 1;
  }else {
    error_msg = "select your gender";
    document.getElementById('gender-error').innerHTML = error_msg;
    document.getElementById('gender-error').style.display = "block";
  }

  
  return 0;
}