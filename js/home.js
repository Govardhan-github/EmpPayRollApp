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
        <img id="${empPayrollData._id}"src="../assets/icons/delete-black-18dp.svg" alt="delete" id="1" onclick="remove(this)">
        <img id="${empPayrollData._id}"src="../assets/icons/create-black-18dp.svg" alt="update" id="1" onclick="update(this)">
      </td>
    </tr>
      `;
  }    
      document.querySelector("#table-display").innerHTML = innerHtml;
}
const getDeptHtml =(deptList) => {
  let deptHtml ='';
  for(const dept of deptList) {
    deptHtml = `${deptHtml} <div class ='dept-label'>${dept}</div>`
  }
  return deptHtml;
}