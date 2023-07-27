
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