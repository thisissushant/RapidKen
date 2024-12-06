function submitEmployeeForm(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const employee = Object.fromEntries(formData.entries());

  let employees = JSON.parse(localStorage.getItem("employees") || "[]");
  employee.id = Date.now();
  employees.push(employee);
  localStorage.setItem("employees", JSON.stringify(employees));

  loadPage("listing");
}
