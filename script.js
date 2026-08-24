// ===============================
// VICTORYDESK — MAIN SCRIPT
// ===============================

// ===============================
// SEARCH & NAVIGATION
// ===============================

function searchTools() {

    let searchBox = document.getElementById("searchInput");

if (!searchBox) return;

let input = searchBox.value.toLowerCase();

let cards = document.querySelectorAll(".grid .card");

cards.forEach(function(card){

let text = card.innerText.toLowerCase();

if(text.includes(input)){
    card.style.display = "block";
}
else{
    card.style.display = "none";
}

});

}

window.onload = function () {

    let tools = document.getElementById("tools-count");
    let websites = document.getElementById("website-count");
    let students = document.getElementById("student-count");

    if (tools) tools.innerHTML = "150+";
    if (websites) websites.innerHTML = "600+";
    if (students) students.innerHTML = "1200+";

    let loader = document.getElementById("loader");

    if (loader) {

        setTimeout(function () {

            loader.style.opacity = "0";

            setTimeout(function () {

                loader.style.display = "none";

            }, 600);

        }, 1200);

    }

};

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {

    let btn = document.getElementById("topBtn");

    if (!btn) return;

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }

}

function topFunction() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

// ===============================
// PAGE NAVIGATION
// ===============================

function selectExam(exam){
    window.location.href = "pages/exam.html?exam=" + exam;
}

// ===============================
// THEME / DARK MODE
// ===============================

function toggleDarkMode(){

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){

localStorage.setItem("theme","dark");

}

else{

localStorage.setItem("theme","light");

}

}

window.addEventListener("load", function () {

    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
        document.body.classList.add("dark-mode");
    }

});

// ===============================
// DAILY MOTIVATION
// ===============================

const quotes = [

"Success is the sum of small efforts repeated every day.",

"Small progress is still progress.",

"Discipline beats motivation.",

"Dream big. Start small. Act now.",

"Every study session counts."

];

function loadDailyQuote(){

const index = new Date().getDate() % quotes.length;

const quote = document.getElementById("dailyQuote");

if(quote){

quote.innerHTML = quotes[index];

}

}

window.addEventListener("load", loadDailyQuote);
function searchWebsite(){

const query = document.getElementById("globalSearch").value.toLowerCase().trim();

if(query.includes("cell") || query.includes("biology")){

window.location.href="pages/notes.html?exam=NEET&subject=🧬 Biology&chapter=🧬 Cell";

}

else if(query.includes("chemistry")){

window.location.href="pages/exam.html?exam=NEET";

}

else if(query.includes("physics")){

window.location.href="pages/exam.html?exam=NEET";

}

else if(query.includes("neet")){

window.location.href="pages/exam.html?exam=NEET";

}

else if(query.includes("jee")){

window.location.href="pages/exam.html?exam=JEE";

}

else if(query.includes("cuet")){

window.location.href="pages/exam.html?exam=CUET";

}

else if(query.includes("banking")){

window.location.href="pages/exam.html?exam=BANKING";

}

else if(query.includes("clat")){

window.location.href="pages/exam.html?exam=CLAT";

}

else if(query.includes("nda")){

window.location.href="pages/exam.html?exam=NDA";

}

else if(query.includes("upsc")){

window.location.href="pages/exam.html?exam=UPSC";

}

else if(query.includes("ssc")){

window.location.href="pages/exam.html?exam=SSC";

}

else{

alert("No matching result found yet.");

}

}

// ===============================
// LOGIN / PROFILE
// ===============================

function checkLogin(){

    const profileActivity = document.getElementById("profileActivity");

if (profileActivity) {
    profileActivity.innerHTML =
        "🕒 Last Activity: " +
        (localStorage.getItem("victoryRecentActivity") || "No Activity");
}

const user = localStorage.getItem("victoryUser");

const welcome = document.getElementById("welcomeUser");
const loginBtn = document.getElementById("loginBtn");

if(!welcome || !loginBtn) return;

if(user){

welcome.innerHTML = "👋 Welcome, " + user;

loginBtn.innerHTML = "🚪 Logout";

const profileCard = document.getElementById("profileCard");

if(profileCard){

profileCard.style.display = "block";

document.getElementById("profileName").innerHTML =
"👋 Name: " + user;

document.getElementById("profileStreak").innerHTML =
"🔥 Study Streak: " +
(localStorage.getItem("victoryStreak") || 0) +
" Days";

document.getElementById("profileGoal").innerHTML =
"🎯 Goal: " +
(localStorage.getItem("victoryGoal") || "No Goal Yet");

}

loginBtn.href = "#";

loginBtn.onclick = function(){

localStorage.removeItem("victoryUser");

location.reload();

return false;

};

}

}

window.addEventListener("load", checkLogin);

// ===============================
// STUDY DATA / USER SETTINGS
// ===============================

function changeName(){

const newName =
document.getElementById("newName").value.trim();

if(newName===""){

alert("Please enter a name.");

return;

}

localStorage.setItem("victoryUser", newName);

checkLogin();

alert("✅ Name updated successfully!");

}
function clearStudyData(){

if(!confirm("Reset all study progress?")){
return;
}

localStorage.removeItem("victoryStreak");
localStorage.removeItem("victoryGoal");
localStorage.removeItem("victoryRecentActivity");

alert("✅ Study progress has been reset.");

location.reload();

}