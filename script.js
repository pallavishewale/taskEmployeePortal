

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

  if(valid)
     // add into global array.
  AddObject(id, name, age, designation, url, gender);

}


//add object into an array employee
function AddObject(id_value, name_value, age_value, designation_value, url_value, gender_value) {

  var NewObj = {
    id: id_value, name: name_value, age: age_value,
    designation: designation_value, url: url_value, gender: gender_value
  };

  employee.push(NewObj);
  employee_tokens.push(id_value);

  showOnPage(employee);  //display data in table

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
