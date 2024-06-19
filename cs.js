// Function to fetch and display the courses
function fetchAndDisplayCourses() {
    fetch('http://localhost:3000/courses')
      .then(response => response.json())
      .then(data => {
        const courses = data.courses;
        courses.forEach(course => addCourse(course));
      })
      .catch(error => console.error('Error fetching courses:', error));
  }
  
  // Function to add a course card to the DOM
  function addCourse(course) {
    let row = document.getElementById("course-list");
    let div = document.createElement("div");
    div.classList.add('col-md-4');
    div.innerHTML = `
      <div class="card mb-4">
        <div class="card-body">
          <h5 class="card-title">${course.title}</h5>
          <p class="card-text">${course.description}</p>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Duration: ${course.weeks} weeks</li>
            <li class="list-group-item">Tuition: $${course.tuition}</li>
            <li class="list-group-item">Minimum Skill: ${course.minimumSkill}</li>
            <li class="list-group-item">Scholarships Available: ${course.scholarshipsAvailable ? 'Yes' : 'No'}</li>
          </ul>
        </div>
      </div>
    `;
    row.appendChild(div);
  }
  
  // Fetch and display the courses on page load
  document.addEventListener('DOMContentLoaded', fetchAndDisplayCourses);
  