// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// This section of code that is enveloped in a while loop with more while loops inside it serves as the gatherer
// of employee data. The while loops inside the main one check that the user input meets a set criteria before
// allowing the user to progress and before the prompt value is passed on through the function. The function
// "containsNubers" is used to check is a inputed value has numbers or not to then be used within the while loops.
// The main while loop represents what to do if the user wants to add another employee or not, and if they do,
// it will execute all the code again thats within the loop so another employee and their data can be collected.
// the .push right before the end of the main while loop will allow the new object to be saved and added to the array
// in the case that the main while loop needs to be executed again.
const collectEmployees = function() {

  let employeesArray = []

  while (true) {

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
        alert("Please enter a valid first name")
      }
    }

    while (true) {
      employeeObj.lastName = prompt("Enter the employee's last name.");
      if (employeeObj.lastName.trim() !== "" && !containsNumbers(employeeObj.lastName)) {
        break;
      } else {
        alert("Please enter a valid last name")
      }
    }

    while (true) {
      employeeObj.salary = prompt("Enter the employee's salary");
      if (employeeObj.salary.trim() !== "" && containsNumbers(employeeObj.salary)) {
        break;
      } else {
        alert("Please enter a valid salary")
      }
    }

    employeesArray.push(employeeObj)

    let addMore = confirm("Would you like to add another employee?")
    if (!addMore) {
      break
    }
  } 
  return employeesArray
}

// The "displayAverageSalary" function is taking in all the properties of each object that provide a "salary" property value
// .reduce is then going to add all the salary values together
// then the divideSum variabe will get the sum divided by the ammout of instances where a salary property will be in the array
// since each object contains a salary value, I used the ammount of objects that exist within the array to get the number
// that the sum should be divided by.
const displayAverageSalary = function(employeesArray) {
  let salaryValue = 'salary'
  let sum = employeesArray.reduce((valueTotal, itemValue) => {
    return valueTotal + parseInt(itemValue[salaryValue])
  }, 0);
  let divideSum = sum / employeesArray.length;
  console.log(`The average salary between all employee's is: ${divideSum}`);
}

// The "getRandomEmployee" function is taking all the objects within the array and selecting a random one using the Math.random()
// which is multiplied by the length of the array to give it a value between 0 and the total ammount of objects rather than a number between 0
// and 1. Then the first name and last name values are retreived from the randomObject that represents one of the objects within the array
// and are placed as string literals in the string that the console is logging.
const getRandomEmployee = function(employeesArray) {
    let randomObject = employeesArray[Math.floor(Math.random() * employeesArray.length)];
    let first = randomObject.firstName;
    let last = randomObject.lastName;
    console.log(`CONGRATULATIONS, ${first} ${last}, you are the winner of the random drawing!`)
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
