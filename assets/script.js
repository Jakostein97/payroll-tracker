// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');


// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects

  // created a temp dataset 
  const employees = [];

  // -- CAPTURE USER INPUT --> prompt() | alert() | confirm()
  const firstName = prompt("First Name")
  const lastName = prompt("Last Name")
  const salary = parseInt(prompt("Salary"))

  console.log("First: ", firstName)
  console.log("type of: ", typeof firstName)
  console.log("last: ", lastName)
  console.log("salary: ", salary)
  console.log("type of : ", typeof salary)
  
  // -- We have DATA - What do we do with it now(?)
  // create a new(temp) User Object
  const newUser = {
    firstName: firstName,
    lastName: lastName,
    salary: salary
  };

  console.log("user: ", newUser)
  console.log("type of : ", typeof newUser)
  
  employees.push(newUser)  // the .push() ADDS a new object/data to the END of our ARRAY
  console.log("Employees Array: ", employees)
  console.log("type of : ", typeof employees)
  // -- RETURN (data) --> [ { firstName: "", lastName: "", salary: 0}, {}, {}]
  return employees
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let totalSalary = 0;

  // Calculate the total salary
  employeesArray.forEach((employee) => {
    totalSalary += employee.salary;
  });

  // Calculate the average salary
  const averageSalary = totalSalary / employeesArray.length;

  console.log("Average Salary: ", averageSalary.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  }));
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  
  // TODO: Select and display a random employee
   const randomIndex = Math.floor(Math.random() * employeesArray.length);

   const randomEmployee = employeesArray[randomIndex];
 
   console.log(`Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName} - Salary: ${randomEmployee.salary.toLocaleString("en-US", { style: "currency", currency: "USD" })}`);
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
    
    newTableRow.append(firstNameCell);
    newTableRow.append(lastNameCell);
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
