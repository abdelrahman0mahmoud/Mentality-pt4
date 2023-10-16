/*=====================enable tooltip================ */
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})


/*===================== GET Parameters ================ */
const urlParams = new URLSearchParams(window.location.search);
const content = urlParams.get('content');

if (content === 'html') {
    //======================= Set HTML Page Content==========================
    document.querySelector("title").textContent = "HTML Course"


} else if (content === 'css') {
    //======================= Set CSS Page Content==========================
    document.querySelector("title").textContent = "CSS Course"


} else if (content === 'javascript') {
    //======================= Set JS Page Content==========================
    document.querySelector("title").textContent = "Javascript Course"


}

