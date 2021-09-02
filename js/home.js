window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
  });
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
      let innerHtml = `${headerHtml}`;
      let empPayrollList = createEmployeePayRollJSON();
      for(const empPayrollData  of empPayrollList){
       innerHtml = `${innerHtml}
        <tr>
            <td>
        <img src="${empPayrollData._profilepic}" alt="" class="profile">
      </td>
      <td>${empPayrollData._name}</td>
      <td>${empPayrollData._geder}</td>
      <td>${getDeptHtml(empPayrollData._department)}</td>
      <td>${empPayrollData._salary}</td>
      <td>${empPayrollData._startDate}</td>
      <td>
        <img name="${empPayrollData._id}"src="../assets/icons/delete-black-18dp.svg" alt="delete" id="1" onclick="remove(this)">
        <img name="${empPayrollData._id}"src="../assets/icons/create-black-18dp.svg" alt="update" id="1" onclick="update(this)">
      </td>
    </tr>
      `;
  }    
      document.querySelector("#table-display").innerHTML = innerHtml;
}

const createEmployeePayRollJSON = () =>{
  let empPayRollListLocal =[
      {
      _name: "Govardan Reddy",
      _geder : "Male",
      _department : [
          'Engineering',
          'Finance'
      ],
      _salary:'500000',
      _startDate : '04 Aug 2019',
      _id : new Date().getTime(),
      _profilepic : '../assets/profiles/Ellipse -2.png'
  },
  {
      _name: "Nikhila",
      _geder : "Female",
      _department : [
          'Engineering',
      ],
      _salary:'400000',
      _startDate : '04 Aug 2018',
      _id : new Date().getTime() + 1,
      _profilepic : '../assets/profiles/Ellipse -1.png'
  }
];
return empPayRollListLocal;
}

const getDeptHtml =(deptList) => {
  let deptHtml ='';
  for(const dept of deptList) {
    deptHtml = `${deptHtml} <div class ='dept-label'>${dept}</div>`
  }
  return deptHtml;
}