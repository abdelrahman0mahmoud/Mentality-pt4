/**============== Video Show & video Info======================== */
const video_Show = document.querySelector('.video-show iframe');
const video_info_title = document.querySelector(".video-title");

document.addEventListener("click", function() {
    const lessons = document.querySelectorAll(".lesson-box");

    lessons.forEach(function (lesson) {
        lesson.addEventListener("click", () => {
            video_info_title.textContent = lesson.querySelector(".lesson-name").textContent;
            video_Show.src = lesson.querySelector(".lesson-url").textContent;
        });
    });
});


/**============== Add Lesson ======================== */
function addLesson(imgSrc, lessonName, lessonURL) {
    const lessonBox = document.createElement("div");
    lessonBox.classList.add("lesson-box");
    
    //lesson img
    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = "lesson-photo";
    
    //lesson name
    const span = document.createElement("span");
    span.classList.add("lesson-name");
    span.textContent = lessonName;
    
    //lesson url
    const url = document.createElement("span");
    url.classList.add("lesson-url");
    url.textContent = lessonURL;
    url.style.display = "none";
    
    lessonBox.appendChild(img);
    lessonBox.appendChild(span);
    lessonBox.appendChild(url);
    const lessonsContainer = document.querySelector(".lessons-container");
    lessonsContainer.appendChild(lessonBox);
}




/*===================== GET Parameters ================ */
const urlParams = new URLSearchParams(window.location.search);
const content = urlParams.get('content');

if (content === 'html') {
    //======================= Set HTML Page Content==========================
    document.querySelector("title").textContent = "HTML Course"
    video_Show.src = "https://www.youtube.com/embed/Wxfg0GaEAx4"
    video_info_title.textContent =" HTML Intro & meta tag"
    addLesson("img/logo/1.png", "HTML Intro & meta tag",  "https://www.youtube.com/embed/Wxfg0GaEAx4");
    addLesson("img/logo/1.png", "HTML: h, p, span, bdi, details & other tags",  "https://www.youtube.com/embed/wX_UFHFeLLo");
    addLesson("img/logo/1.png", "HTML : Links & Buttons & Paths",  "https://www.youtube.com/embed/Fh-M-M87QpU");
    addLesson("img/logo/1.png", "HTML : Comments & Entities",  "https://www.youtube.com/embed/SN4QgaQX5dA");
    addLesson("img/logo/1.png", "HTML : Classes & IDs",  "https://www.youtube.com/embed/xcUmcRgH00k");
    addLesson("img/logo/1.png", "HTML : DIVs & Semantic Elements",  "https://www.youtube.com/embed/Ly-M3OdchQ0");
    addLesson("img/logo/1.png", "HTML : Img & Audio",  "https://www.youtube.com/embed/y5dHxR-RO1I");
    

    
} else if (content === 'css') {
    //======================= Set CSS Page Content==========================
    document.querySelector("title").textContent = "CSS Course"
    video_Show.src = "https://www.youtube.com/embed/j0m7QZFIri8"
    video_info_title.textContent ="CSS : Intro"
    addLesson("img/logo/1.png", "CSS : Intro",  "https://www.youtube.com/embed/j0m7QZFIri8");


} else if (content === 'javascript') {
    //======================= Set JS Page Content==========================
    document.querySelector("title").textContent = "Javascript Course"


}



