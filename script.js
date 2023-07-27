

var n = 1;
var employee = [];
var employee_tokens =[];
function add_record() {

  var id = parseInt(document.getElementById('id').value, 10);
  var name = document.getElementById('name').value;
  var age = document.getElementById('age').value;
  var url = document.getElementById('url').value;
  var designation = document.getElementById('designation').value;
  var gender = document.getElementById('gender').value;

  
 
  //check validations.
  var valid = ValidateEmployee(id, name, age, designation, url, gender);

  //add into global array.
  if(valid)
  AddObject(id, name, age, designation, url, gender);

}


//add object to an array
function AddObject(id_value, name_value, age_value, designation_value, url_value, gender_value) {

  var NewObj = {
    id: id_value, name: name_value, age: age_value,
    designation: designation_value, url: url_value, gender: gender_value
  };

  employee.push(NewObj);
  employee_tokens.push(id_value);

  showOnPage(employee);

  //clear the fields
  document.getElementById('id').value=null;
  document.getElementById('name').value= null;
  document.getElementById('age').value =null;
  document.getElementById('url').value = null;
  document.getElementById('designation').value-null;
  document.getElementById('gender').value =null;

}


//show content on page
function showOnPage(employee) {
  
  var htmlSegment = '';
  employee.map((data) => {
    htmlSegment += `
                  <tr class="rows">
                  <td>${data.id}</td>
                  <td>${data.name}</td>
                  <td>${data.age}</td>
                  <td>${data.designation}</td>
                  <td>${data.gender}</td>
                  <td> <button id="edit-button" id="edit" class="edit-button" onclick="edit_record(this)" >Edit</button>
                  <button id="delete-button" id ="delete" class ="delete-button" onclick="delete_record(this)"> delete </button>
                  <button id="view-button" id="view" class ="view-button" onclick="display_data(this)"> View </button></td>
                  </tr>`;

  });
  let container = document.querySelector('.table-body');
  container.innerHTML = htmlSegment;
}

//edit records
function edit_record(button){
  
  const row = button.parentNode.parentNode;
  let emp_id = row.cells[0].textContent;
 
  const indexToEdit =  employee.findIndex(obj => obj.id == emp_id);
  
 
   document.getElementById('id').value= employee[indexToEdit]['id'];
   document.getElementById('name').value = employee[indexToEdit]['name'];

   document.getElementById('age').value = employee[indexToEdit]['age'];
   document.getElementById('designation').value = employee[indexToEdit]['designation'];
   document.getElementById('gender').value = employee[indexToEdit]['gender'];
   document.getElementById('url').value = employee[indexToEdit]['url'];
   console.log(employee_tokens);
   employee_tokens.splice(employee_tokens.indexOf(emp_id),1);
   console.log(employee_tokens);
   deleteObject(indexToEdit);

}

//delete record by button
function delete_record(button){
  
  if(window.confirm("Do you want to Delete ?")){
    const row = button.parentNode.parentNode;
     const cell = row.cells[0];
     const emp_id = cell.textContent;
    
     const indexToDelete =  employee.findIndex(obj => obj.id == emp_id);
     deleteObject(indexToDelete);
    
     showOnPage(employee);
     alert("deleted");
    
  }
}

//delete object from array
function deleteObject(indexToDelete){
   employee.splice(indexToDelete,1);
}


//display the window of users data by clicking on "view" button
function display_data(button){

  const row = button.parentNode.parentNode;
  let emp_id = row.cells[0].textContent;
 
  const indexToEdit =  employee.findIndex(obj => obj.id == emp_id);
  
 
   document.getElementById('id-lbl').textContent= employee[indexToEdit]['id'];
   document.getElementById('name-lbl').textContent = employee[indexToEdit]['name'];

   document.getElementById('age-lbl').textContent = employee[indexToEdit]['age'];
   document.getElementById('Designation-lbl').textContent = employee[indexToEdit]['designation'];
   document.getElementById('gender-lbl').textContent = employee[indexToEdit]['gender'];
 
  
   let myImage = document.getElementById("icon-img");
   myImage.setAttribute("src", employee[indexToEdit]['url']);


  

 var model= document.getElementById('display-block').style.display= "block";

 
}