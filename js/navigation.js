function loadPage(page) {
  const mainContent = document.getElementById("main-content");

  switch (page) {
    case "home":
      mainContent.innerHTML = `
              <div class="home-container">
                  <div class="home-hero">
                      <h1>Employee Management System</h1>
                      <p>Streamline your workforce management with ease</p>
                      <div class="home-actions">
                          <button onclick="loadPage('registration')" class="home-btn">
                              <i class="icon-register"></i>
                              Register Employee
                          </button>
                          <button onclick="loadPage('listing')" class="home-btn">
                              <i class="icon-list"></i>
                              Employee List
                          </button>
                      </div>
                  </div>
                  <div class="home-features">
                      <div class="feature">
                          <div class="feature-icon">🔍</div>
                          <h3>Easy Search</h3>
                          <p>Quickly find employees by name or position</p>
                      </div>
                      <div class="feature">
                          <div class="feature-icon">💾</div>
                          <h3>Local Storage</h3>
                          <p>Data saved securely in your browser</p>
                      </div>
                      <div class="feature">
                          <div class="feature-icon">📊</div>
                          <h3>Pagination</h3>
                          <p>Smooth navigation through employee records</p>
                      </div>
                  </div>
              </div>
          `;
      break;

    case "registration":
      mainContent.innerHTML = `
              <div class="form-container">
                  <form id="employee-form" onsubmit="submitEmployeeForm(event)">
                      <label for="name">Employee Name</label>
                      <input type="text" id="name" name="name" required>
                      
                      <label for="position">Position</label>
                      <input type="text" id="position" name="position" required>
                      
                      <label for="about">About Employee</label>
                      <textarea id="about" name="about" required></textarea>
                      
                      <label for="joining_date">Joining Date</label>
                      <input type="date" id="joining_date" name="joining_date" required>
                      
                      <button type="submit">Register Employee</button>
                  </form>
              </div>
          `;
      break;

    case "listing":
      renderEmployeeList();
      break;
  }
}

function toggleMenu() {
  const headerRight = document.querySelector(".header-right");
  headerRight.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-menu a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const headerRight = document.querySelector(".header-right");
      headerRight.classList.remove("active");
    });
  });

  document.addEventListener("click", (event) => {
    const headerRight = document.querySelector(".header-right");
    const hamburger = document.querySelector(".hamburger");

    if (
      !headerRight.contains(event.target) &&
      !hamburger.contains(event.target) &&
      headerRight.classList.contains("active")
    ) {
      headerRight.classList.remove("active");
    }
  });

  loadPage("home");
});
