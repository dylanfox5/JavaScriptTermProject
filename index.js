// JavaScript source code
function toggleGym() {
    var popup = document.getElementById("gymPopup");
    var p = document.getElementById("text");
    togglePicPopup("closson.jpg");
    p.innerHTML = "The Closson Gym is...";
    p.classList.toggle("show");
    popup.classList.toggle("show");
}

function toggleFootball() {
    var popup = document.getElementById("footballPopup");
    var p = document.getElementById("text");
    p.innerHTML = "The Huntsman Football Field is..."
    p.classList.toggle("show");
    popup.classList.toggle("show");
}

function toggleAdmin() {
    var popup = document.getElementById("adminPopup");
    var p = document.getElementById("text");
    p.innerHTML = "The Higdon Administration Building is..."
    p.classList.toggle("show");
    popup.classList.toggle("show");
}

function toggleShaw() {
    var popup = document.getElementById("shawPopup");
    var p = document.getElementById("text");
    p.innerHTML = "The Shaw Center is..."
    p.classList.toggle("show");
    popup.classList.toggle("show");
}

function toggleMSC() {
    var popup = document.getElementById("mscPopup");
    var p = document.getElementById("text");
    p.innerHTML = "The Memorial Student Center is..."
    p.classList.toggle("show");
    popup.classList.toggle("show");
}

function toggleBigG() {
    var popup = document.getElementById("bigGPopup");
    var p = document.getElementById("text");
    p.innerHTML = "Big G Lake is..."
    p.classList.toggle("show");
    popup.classList.toggle("show");
}

function toggleFounders() {
    var popup = document.getElementById("foundersPopup");
    var p = document.getElementById("text");
    p.innerHTML = "Founders Lake is..."
    p.classList.toggle("show");
    popup.classList.toggle("show");
}

function toggleCommons() {
    var popup = document.getElementById("commonsPopup");
    var p = document.getElementById("text");
    p.innerHTML = "The Floyd M. McDowell Commons is..."
    p.classList.toggle("show");
    popup.classList.toggle("show");
}

function toggleResch() {
    var popup = document.getElementById("reschPopup");
    var p = document.getElementById("text");
    p.innerHTML = "Resch Science and Technology Hall is..."
    p.classList.toggle("show");
    popup.classList.toggle("show");
}

function toggleBriggs() {
    var popup = document.getElementById("briggsPopup");
    var p = document.getElementById("text");
    p.innerHTML = "Briggs Hall is..."
    p.classList.toggle("show");
    popup.classList.toggle("show");
}

function toggleZimmerman() {
    var popup = document.getElementById("zimmermanPopup");
    var p = document.getElementById("text");
    p.innerHTML = "Zimmerman Hall is..."
    p.classList.toggle("show");
    popup.classList.toggle("show");
}

function toggleTess() {
    var popup = document.getElementById("tessPopup");
    var p = document.getElementById("text");
    p.innerHTML = "Tess Morgan Hall is..."
    p.classList.toggle("show");
    popup.classList.toggle("show");
}

function toggleWalker() {
    var popup = document.getElementById("walkerPopup");
    var p = document.getElementById("text");
    p.innerHTML = "Walker Hall is..."
    p.classList.toggle("show");
    popup.classList.toggle("show");
}

function toggleGunsulley() {
    var popup = document.getElementById("gunsulleyPopup");
    var p = document.getElementById("text");
    p.innerHTML = "Gunsolley Hall is..."
    p.classList.toggle("show");
    popup.classList.toggle("show");
}

function toggleGraybill() {
    var popup = document.getElementById("graybillPopup");
    var p = document.getElementById("text");
    p.innerHTML = "Graybill Hall is..."
    p.classList.toggle("show");
    popup.classList.toggle("show");
}

function toggleLibrary() {
    var popup = document.getElementById("libraryPopup");
    var p = document.getElementById("text");
    p.innerHTML = "The Frederick Mason Smith Library is..."
    p.classList.toggle("show");
    popup.classList.toggle("show");
}

function togglePicPopup(name) {
    var img = document.getElementById("picPopup");
    img.src = name;

    if (img.style.visibility != "visible") {
        img.style.visibility = "visible";
    }
    else {
        img.style.visibility = "hidden";

    }
}