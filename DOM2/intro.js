// ==========================================
// STUDENT DIRECTORY
// ==========================================


// Selecting HTML elements

const studentInput = document.getElementById("studentInput");

const addStudentBtn = document.getElementById("addStudentBtn");

const studentList = document.getElementById("studentList");

const studentCount = document.getElementById("studentCount");

const message = document.getElementById("message");


// Store number of students

let totalStudents = 0;


// ==========================================
// ADD STUDENTS
// ==========================================

addStudentBtn.addEventListener("click", function () {

    // Get value from input

    const inputValue = studentInput.value.trim();


    // Check whether input is empty

    if (inputValue === "") {

        message.textContent =
            "Please enter three student names.";

        return;
    }


    // Convert input into an array

    const students = inputValue
        .split(",")
        .map(name => name.trim())
        .filter(name => name !== "");


    // Check whether exactly 3 names were entered

    if (students.length !== 3) {

        message.textContent =
            "Please enter exactly three names separated by commas.";

        return;
    }


    // Clear previous message

    message.textContent = "";


    // Create a card for every student

    students.forEach(function (student) {

        // ------------------------------
        // Create main card
        // ------------------------------

        const card = document.createElement("article");

        card.classList.add("student-card");


        // ------------------------------
        // Create avatar
        // ------------------------------

        const avatar = document.createElement("div");

        avatar.classList.add("student-avatar");


        // Get first letter of name

        const firstLetter =
            student.charAt(0).toUpperCase();

        avatar.textContent = firstLetter;


        // ------------------------------
        // Create student name
        // ------------------------------

        const name = document.createElement("h3");

        name.textContent = student;


        // ------------------------------
        // Create description
        // ------------------------------

        const description =
            document.createElement("p");

        description.textContent =
            "MERN Stack Student";


        // ------------------------------
        // Create student number
        // ------------------------------

        const number =
            document.createElement("span");

        number.classList.add("student-number");


        totalStudents++;

        number.textContent =
            `#${String(totalStudents).padStart(2, "0")}`;


        // ------------------------------
        // Add elements to card
        // ------------------------------

        card.appendChild(avatar);

        card.appendChild(name);

        card.appendChild(description);

        card.appendChild(number);


        // ------------------------------
        // Add card to student list
        // ------------------------------

        studentList.appendChild(card);

    });


    // Update student counter

    studentCount.textContent = totalStudents;


    // Clear input

    studentInput.value = "";


    // Put cursor back into input

    studentInput.focus();

});