let currentPage = 1;
const itemsPerPage = 5;

function renderEmployeeList(searchTerm = "") {
  let employees = JSON.parse(localStorage.getItem("employees") || "[]");
  const mainContent = document.getElementById("main-content");

  if (searchTerm) {
    employees = employees.filter((emp) =>
      emp.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  const totalPages = Math.ceil(employees.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedEmployees = employees.slice(startIndex, endIndex);

  mainContent.innerHTML = `
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>About</th>
                        <th>Joining Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    ${paginatedEmployees
                      .map(
                        (emp) => `
                        <tr>
                            <td>${emp.name}</td>
                            <td>${emp.position}</td>
                            <td>${emp.about}</td>
                            <td>${emp.joining_date}</td>
                            <td>
                                <button class="delete-btn" onclick="deleteEmployee(${emp.id})">Delete</button>
                            </td>
                        </tr>
                    `
                      )
                      .join("")}
                </tbody>
            </table>
            <div class="pagination">
                <button onclick="changePage('prev')" ${
                  currentPage === 1 ? "disabled" : ""
                }>Previous</button>
                <span>Page ${currentPage} of ${totalPages}</span>
                <button onclick="changePage('next')" ${
                  currentPage === totalPages ? "disabled" : ""
                }>Next</button>
            </div>
        </div>
    `;
}

function deleteEmployee(id) {
  let employees = JSON.parse(localStorage.getItem("employees") || "[]");
  employees = employees.filter((emp) => emp.id !== id);
  localStorage.setItem("employees", JSON.stringify(employees));
  renderEmployeeList();
}

function changePage(direction) {
  let employees = JSON.parse(localStorage.getItem("employees") || "[]");
  const totalPages = Math.ceil(employees.length / itemsPerPage);

  if (direction === "prev" && currentPage > 1) {
    currentPage--;
  } else if (direction === "next" && currentPage < totalPages) {
    currentPage++;
  }

  renderEmployeeList();
}

function sortEmployees(column) {
  let employees = JSON.parse(localStorage.getItem("employees") || "[]");

  employees.sort((a, b) => {
    if (a[column] < b[column]) return -1;
    if (a[column] > b[column]) return 1;
    return 0;
  });

  localStorage.setItem("employees", JSON.stringify(employees));
  renderEmployeeList();
}
