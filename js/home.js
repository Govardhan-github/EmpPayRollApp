let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
  empPayrollList = getEmpDataFromStorage();
  document.querySelector(".emp-count").textContent=empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp')
  });
const getEmpDataFromStorage = () => {
  return localStorage.getItem('EmployeePayrollList') ?
                      JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}

  //Using Template Literals
  const createInnerHtml = () => {   
    const headerHtml = `
      <tr>
        <th></th>
        <th>Name</th>
        <th>Gender</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Start Date</th>
        <th>Actions</th>
      </tr>`;
      if(empPayrollList.length == 0) return;
      let innerHtml = `${headerHtml}`
      for(const empPayrollData  of empPayrollList){
        console.log(empPayrollData);
       innerHtml = `${innerHtml}
        <tr>
            <td>
        <img src="${empPayrollData._profilePic}" alt="" class="profile">
      </td>
      <td>${empPayrollData._name}</td>
      <td>${empPayrollData._gender}</td>
      <td>${getDeptHtml(empPayrollData._department)}</td>
      <td>${empPayrollData._salary}</td>
      <td>${empPayrollData._startDate}</td>
      <td>
        <img id="${empPayrollData._id}"  src="../assets/icons/delete-black-18dp.svg" alt="delete" 
        onclick="remove(this)">
        <img id="${empPayrollData._id}" src="../assets/icons/create-black-18dp.svg" alt="update" onclick="update(this)">
      </td>
    </tr>
      `;
      console.log(empPayrollList);

  }    
      document.querySelector("#table-display").innerHTML = innerHtml;


  }

const remove = (node) => {
  console.log(node.id);
  let empPayrollData = empPayrollList.find(empData => empData._id == node.id);
  if(!empPayrollData) return;
  const index = empPayrollList
                .map(empData => empData._id)
                .indexOf(empPayrollData._id);
  empPayrollList.splice(index,1);
  localStorage.setItem("EmployeePayrollList" , JSON.stringify(empPayrollList));
  document.querySelector(".emp-count").textContent = empPayrollList.length;
  console.log("End of remove operator");
  createInnerHtml();              
}
  
const getDeptHtml =(deptList) => {
  let deptHtml ='';
  for(const dept of deptList) {
    deptHtml = `${deptHtml} <div class ='dept-label'>${dept}</div>`
  }
  return deptHtml;
}