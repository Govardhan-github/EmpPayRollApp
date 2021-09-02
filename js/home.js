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
      const innerHtml = `${headerHtml}
        <tr>
            <td>
        <img src="../assets/profiles/Ellipse -3.png" alt="" class="profile">
      </td>
      <td>Govardhan Reddy</td>
      <td>Male</td>
      <td>
        <div class="dept-label">Hr</div>
        <div class="dept-label">Engineering</div>
      </td>
      <td>4000000</td>
      <td>31 aug 2018</td>
      <td>
        <img src="../assets/icons/delete-black-18dp.svg" alt="delete" id="1" onclick="remove(this)">
        <img src="../assets/icons/create-black-18dp.svg" alt="update" id="1" onclick="update(this)">
      </td>
    </tr>
      `;
      document.querySelector("#table-display").innerHTML = innerHtml;
      }
