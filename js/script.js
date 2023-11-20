// Sample course data
const courses = [
    {
      title: "Web Development",
      category: "web",
      image:
        "https://images.pexels.com/photos/12829984/pexels-photo-12829984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "Learn the fundamentals of web development using HTML, CSS, and JavaScript.",
    },
    {
      title: "Data Science",
      category: "data",
      image:
        "https://images.pexels.com/photos/12829984/pexels-photo-12829984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "Explore the world of data science with hands-on projects and real-world applications.",
    },
    {
      title: "ai",
      category: "ai",
      image:
        "https://images.pexels.com/photos/12829984/pexels-photo-12829984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "Learn the fundamentals of web development using HTML, CSS, and JavaScript.",
    },
    {
      title: "Full stack web development",
      category: "web",
      image:
        "https://images.pexels.com/photos/12829984/pexels-photo-12829984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "Learn the fundamentals of web development using HTML, CSS, and JavaScript.",
    },
    {
      title: "Data Science",
      category: "data",
      image:
        "https://images.pexels.com/photos/12829984/pexels-photo-12829984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "Explore the world of data science with hands-on projects and real-world applications.",
    },
    {
      title: "ai",
      category: "ai",
      image:
        "https://images.pexels.com/photos/12829984/pexels-photo-12829984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "Learn the fundamentals of web development using HTML, CSS, and JavaScript.",
    },
    // Add more courses as needed
  ];

  // Function to filter courses based on category
  function filterCourses(category) {
    const filteredCourses =
      category === "all"
        ? courses
        : courses.filter((course) => course.category === category);
    displayCourses(filteredCourses);
  }

  // Function to display courses
  function displayCourses(coursesToShow) {
    const courseContainer = document.getElementById("courseContainer");
    courseContainer.innerHTML = "";

    coursesToShow.forEach((course) => {
      const courseCard = document.createElement("div");
      courseCard.className = "course-card";

      courseCard.innerHTML = `
              <img src="${course.image}" alt="${course.title}">
              <div class="course-info">
                  <h2>${course.title}</h2>
                  <p>${course.description}</p>
                  <button class="btn_Exp">Explore</button>
              </div>
          `;

      courseContainer.appendChild(courseCard);
    });
  }

  // Initial display of all courses
  displayCourses(courses);