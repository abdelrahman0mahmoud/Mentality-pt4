// =========================== Add Student Border ===============================//
function addStudentBorder(imgSrc, name, id, score, projectsNum, stu_level) {
    const border_stu = document.createElement("div");
    border_stu.classList.add("border");
    border_stu.classList.add("border-0");
    border_stu.classList.add(stu_level);
    
    // Student image
    const image = document.createElement("img");
    image.classList.add(stu_level);
    image.src = imgSrc;
    image.alt = "student photo";

    // Student name
    const p_name = document.createElement("p");
    p_name.classList.add("stu-name");
    p_name.textContent = "Name: " + name;

    // Student ID
    const p_id = document.createElement("p");
    p_id.textContent = "ID: ";
    const span_id = document.createElement("span");
    span_id.classList.add("stu-id");
    span_id.textContent = id;
    p_id.appendChild(span_id);

    // Student score
    const p_score = document.createElement("p");
    p_score.classList.add("stu-score");
    p_score.textContent = "Score: " + score;

    // Student projects number
    const p_projects = document.createElement("p");
    p_projects.classList.add("stu-projects-number");
    p_projects.textContent = "Projects: " + projectsNum;

    // Append elements to the student border
    border_stu.appendChild(image);
    border_stu.appendChild(p_name);
    border_stu.appendChild(p_id);
    border_stu.appendChild(p_score);
    border_stu.appendChild(p_projects);

    // Append the student border to the container
    const borders = document.querySelector(".borders");
    borders.appendChild(border_stu);
}

//Golden Students 
//Silver Students
addStudentBorder("img/user.png", "User", 1,  "%", 15, "silver");
addStudentBorder("img/user.png", "User", 2,  "%", 15, "silver");
addStudentBorder("img/user.png", "User", 3,  "%", 15, "silver");
//Bronze Students





//================ search input  ====================
var search_id_btn = document.querySelector(".search-btn");
var search_input = document.querySelector(".search-section input")

var students_borders = document.querySelectorAll(".border");
search_id_btn.addEventListener("click", () => {
    var search_id = search_input.value;
    if (search_id.trim() === "") {
        students_borders.forEach((border) => {
            border.style.display = "flex";
        });
    } else {
        students_borders.forEach((border) => {
            if (border.querySelector(".stu-id").textContent == search_id) {
                border.style.display = "flex";
            } else {
                border.style.display = "none";
            }
        });
    }
});



// ===========================  ===============================//
// ===========================  ===============================//
// ===========================  ===============================//
// ===========================  ===============================//
// ===========================  ===============================//
// ===========================  ===============================//
// ===========================  ===============================//
// ===========================  ===============================//