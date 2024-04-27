// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// TODO: Get user input to create and return an array of employee objects


const collectEmployees = function() {

  let employeeObj = {
    firstName: "",
    lastName: "",
    salary: 0
  }
  
  function containsNumbers(input) {
    for (let i = 0; i < input.length; i++) {
      if (!isNaN(parseInt(input[i]))) {
        return true
      }
    }
    return false;
  }

  while (true) {
    employeeObj.firstName = prompt("Enter the employee's first name.");
    if (employeeObj.firstName.trim() !== "" && !containsNumbers(employeeObj.firstName)) {
      break;
    } else {
      confirm("Please enter a valid first name")
    }
    return employeeObj;
  }

  while (true) {
    employeeObj.lastName = prompt("Enter the employee's last name.");
    if (employeeObj.lastName.trim() !== "" && !containsNumbers(employeeObj.lastName)) {
      break;
    } else {
      confirm("Please enter a valid last name")
    }
    return employeeObj;
  }

  while (true) {
    employeeObj.salary = prompt("Enter the employee's salary");
    if (employeeObj.salary.trim() !== "" && containsNumbers(employeeObj.salary)) {
      break;
    } else {
      confirm("Please enter a valid salary")
    }
    return employeeObj;
  }

  

  let employeesArray = []
    if (employeesArray.length === 0) {
      employeesArray = [employeeObj];
    } else {
      employeesArray.push(employeeObj);
    }
    return employeesArray;
};






// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
}







/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);