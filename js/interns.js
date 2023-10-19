// =========================== Add Student Border ===============================//
function addStudentBorder(imgSrc, name, id, score, projectsNum, stu_level) {
    const border_stu = document.createElement("div");
    border_stu.classList.add("border");
    border_stu.classList.add(stu_level);
    
    // Student image
    const image = document.createElement("img");
    image.classList.add(stu_level);
    image.src = imgSrc;
    image.alt = "student photo";

    // Student name
    const p_name = document.createElement("p");
    p_name.classList.add("stu-name");
    p_name.textContent = name;

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
addStudentBorder("img/user.png", "Shrouk ragap abdelazim", 1,  "%", 15, "silver");
addStudentBorder("img/user.png", "ميرنا سامح سيد محمد", 2,  "%", 15, "silver");
addStudentBorder("img/user.png", "Sama Hesham Sayed", 3,  "%", 15, "silver");
addStudentBorder("img/user.png", "Waleed Mohamed", 4,  "%", 15, "silver");
addStudentBorder("img/user.png", "Kholoud Hassan Tawfik", 5,  "%", 15, "silver");
addStudentBorder("img/user.png", "Hamza mohamed", 6,  "%", 15, "silver");
addStudentBorder("img/user.png", "Jana Mohamed Ibrahim ", 7,  "%", 15, "silver");
addStudentBorder("img/user.png", "alaa mohamed abdellatif", 8,  "%", 15, "silver");
addStudentBorder("img/user.png", "Amal Farid Galal", 9,  "%", 15, "silver");
addStudentBorder("img/user.png", "Hagar Ahmed Elfakharany", 10,  "%", 15, "silver");
addStudentBorder("img/user.png", "Mina Khalifa", 11,  "%", 15, "silver");
addStudentBorder("img/user.png", "مينا كمال بطرس", 12,  "%", 15, "silver");
addStudentBorder("img/user.png", "Ali Ahmed", 13,  "%", 15, "silver");
addStudentBorder("img/user.png", "Mazen Abd-El Hameed", 14,  "%", 15, "silver");
addStudentBorder("img/user.png", "Fatma khaled abdelwahab", 15,  "%", 15, "silver");
addStudentBorder("img/user.png", "ميسرة محمد سيد العوام", 16,  "%", 15, "silver");
addStudentBorder("img/user.png", "بسمة عبدالخالق", 17,  "%", 15, "silver");
addStudentBorder("img/user.png", "مهاب محمد سيد", 18,  "%", 15, "silver");
addStudentBorder("img/user.png", "Mina Anis", 19,  "%", 15, "silver");
addStudentBorder("img/user.png", "Donia Sherif", 20,  "%", 15, "silver");
addStudentBorder("img/user.png", "Amira Ibrahim Mabrouk", 21,  "%", 15, "silver");
addStudentBorder("img/user.png", "Ezzeldien Abdelwahab", 22,  "%", 15, "silver");
addStudentBorder("img/user.png", "محمد مجدي عبادة", 23,  "%", 15, "silver");
addStudentBorder("img/user.png", "Manar Khaled abdelgawad ", 24,  "%", 15, "silver");
addStudentBorder("img/user.png", "nour adly mostafa", 25,  "%", 15, "silver");
addStudentBorder("img/user.png", "يوسف عبدالحميد", 26,  "%", 15, "silver");
addStudentBorder("img/user.png", "Abdallah Mahmoud Fawzy", 27,  "%", 15, "silver");
addStudentBorder("img/user.png", "ahmed khafagy", 28,  "%", 15, "silver");
addStudentBorder("img/user.png", "Manar Emad ElDeen ", 29,  "%", 15, "silver");
addStudentBorder("img/user.png", "مينا روماني فوزي", 30,  "%", 15, "silver");
addStudentBorder("img/user.png", "Mohamed Abo El-Hagag", 31,  "%", 15, "silver");
addStudentBorder("img/user.png", "Amera Abdelaziz Saber", 32,  "%", 15, "silver");
addStudentBorder("img/user.png", "Ammar Yasser farouk", 33,  "%", 15, "silver");
addStudentBorder("img/user.png", "كيرلس مجدي فايز", 34,  "%", 15, "silver");
addStudentBorder("img/user.png", "Dalia Abd Elazim", 35,  "%", 15, "silver");
addStudentBorder("img/user.png", "مي عاطف شفيق", 36,  "%", 15, "silver");
addStudentBorder("img/user.png", "Doha Aly Mohammed", 37,  "%", 15, "silver");
addStudentBorder("img/user.png", "Yasser Muhamed Desokey", 38,  "%", 15, "silver");
addStudentBorder("img/user.png", "Saad Mohamed Hassan", 39,  "%", 15, "silver");
addStudentBorder("img/user.png", "محمود عاطف محمد", 40,  "%", 15, "silver");
addStudentBorder("img/user.png", "مهاب ابراهيم محمود", 41,  "%", 15, "silver");
addStudentBorder("img/user.png", "Bassant Hussein fathy", 42,  "%", 15, "silver");
addStudentBorder("img/user.png", "Adel Ahmed Mohamed", 43,  "%", 15, "silver");
addStudentBorder("img/user.png", "Zeyad aymen Mohamed", 44,  "%", 15, "silver");
addStudentBorder("img/user.png", "Bishoy Sedra Saber", 45,  "%", 15, "silver");
addStudentBorder("img/user.png", "Mostafa Mohamed Bayoumi", 46,  "%", 15, "silver");
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