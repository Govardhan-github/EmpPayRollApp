let isUpdate = false;
let employeePayrollObj={};
window.addEventListener("DOMContentLoaded", (event) => {
  const text = document.querySelector("#name");
  const textError = document.querySelector(".text-error");
  text.addEventListener("input", function () {
    if (text.value.length == 0) {
      textError.textContent = "";
      return;
    }
    try {
      new EmployeePayrollData().name = text.value;
      textError.textContent = "";
    } catch (e) {
      textError.textContent = e;
    }
  });

  const salary = document.querySelector("#salary");
  const output = document.querySelector(".salary-output");
  output.textContent = salary.value;
  salary.addEventListener("input", function () {
    output.textContent = salary.value;
  });
  checkForUpdate();
});

const save = () => {
  try {
    let employeePayrollData = createEmployeePayroll();
    createAndUpdateStrorage(employeePayrollData);
  } catch (e) {
    console.log(e);
    return;
  }
};

function createAndUpdateStrorage(employeePayrollData) {
  let employeePayrollList = JSON.parse(
    localStorage.getItem("EmployeePayrollList")
  );

  if (employeePayrollList != undefined) {
    employeePayrollData._id=employeePayrollList.length + 1;
    employeePayrollList.push(employeePayrollData);
  } else {
    employeePayrollData._id = 1;
    employeePayrollList = [employeePayrollData];
  }
  alert(employeePayrollList.toString());
  localStorage.setItem("EmployeePayrollList",
    JSON.stringify(employeePayrollList)
  );
}

const createEmployeePayroll = () => {
  let employeePayrollData = new EmployeePayrollData();
  try {
    employeePayrollData.name = getInputValueById("#name");
  } catch (e) {
    setTextValue(".text-error", e);
    throw e;
  }
  employeePayrollData.profilePic = getSelectedValues("[name=profile]").pop();
  employeePayrollData.gender = getSelectedValues("[name=gender]").pop();
  employeePayrollData.department = getSelectedValues("[name=department]");
  employeePayrollData.salary = getInputValueById("#salary");
  employeePayrollData.note = getInputValueById("#notes");
  let date =
    getInputValueById("#day") +
    " " +
    getInputValueById("#month") +
    " " +
    getInputValueById("#year");
  employeePayrollData.startDate = Date.parse(date);
  alert(employeePayrollData.toString());
  return employeePayrollData;
};

const getSelectedValues = (propertyValue) => {
  let allItems = document.querySelectorAll(propertyValue);
  let selItems = [];
  allItems.forEach((item) => {
    if (item.checked) selItems.push(item.value);
  });
  return selItems;
};

/*
 *	1: querySelector is the newer feature.
 *	2: The querySelector method can be used when selecting by element name,
 *		nestingm, or class name.
 *	3: querySelector lets you find elements with rules that can't be
 *		expressed with getElementById.
 */

const getInputValueById = (id) => {
  let value = document.querySelector(id).value;
  return value;
};

/*
 * 1: getElementById is better supported than querySelector in older versions
 *	of the browsers.
 * 2: The things with getElementById is that it only allows to select an
 *	element by its id.
 */

const getInputElementValue = (id) => {
  let value = document.getElementById(id).value;
  return value;
};
const checkForUpdate=()=>{
  const employeePayrollJson = localStorage.getItem('editEmp');
  isUpdate=employeePayrollJson ? true:false;
  if(!isUpdate) return;
  employeePayrollObj=JSON.parse(employeePayrollJson);
  console.log("hjdjdfcee" +employeePayrollJson);
  setForm();
}

const setForm=() => {
  setValue("#name", employeePayrollObj._name);
  setSelectedValues("[name=profile]",employeePayrollObj._profilepic);
  setSelectedValues("[name=gender]",employeePayrollObj._gender);
  setSelectedValues("[name=department]",employeePayrollObj._department);
  setValue("#salary",employeePayrollObj._salary );
  setTextValue(".salary-output",employeePayrollObj._salary );
  setValue("#notes", employeePayrollObj._notes);
  setValue("#day",day[0]);
  setValue("#month",month[1]);
  setValue("#year", year[2]);
};
const setSelectedValues=(propertyValue,value) =>{
  let allItems = document.querySelectorAll(propertyValue);
  allItems.forEach(item=>{
    if(Array.isArray(value)){
      if(value.includes(item.value)){
        item.checked=true;
      }
    }
    else if(item.value==value)
      item.checked=true;
  });
}

const resetForm = () => {
  setTextValue("#name", "");
  unsetSelectedValues("[name=profile]");
  unsetSelectedValues("[name=gender]");
  unsetSelectedValues("[name=department]");
  setValue("#salary", "");
  setValue("#notes", "");
  setSelectedIndex("#day", 0);
  setSelectedIndex("#month", 0);
  setSelectedIndex("#year", 0);
}

const unsetSelectedValues = (propertyValue) => {
  let allItems = document.querySelectorAll(propertyValue);
  allItems.forEach((item) => {
    item.checked = false;
  });
};

const setTextValue = (id, value) => {
  const element = document.querySelector(id);
  element.textContent = value;
};

const setValue = (id, value) => {
  const element = document.querySelector(id);
  element.value = value;
};
