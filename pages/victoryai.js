function clearAI(){

    document.getElementById("questionInput").focus();

document.getElementById("questionInput").value = "";

answerBox.innerHTML = "";

resourceButtons.innerHTML = "";

questionInput.placeholder = "Example: What is Cell Theory?";

document.getElementById("suggestionBox").innerHTML = "";

}

function quickQuestion(text){

questionInput.value = text;

askAI();

document.getElementById("questionInput").focus();

}

let streak = Number(localStorage.getItem("victoryStreak")) || 0;

function increaseStreak(){

    function saveGoal(){

const goal = document.getElementById("goalInput").value.trim();

function updateProgress(){

let streak = Number(localStorage.getItem("victoryStreak")) || 0;

let goal = localStorage.getItem("victoryGoal") || "No Goal";

document.getElementById("progressText").innerHTML =

`
🔥 Study Streak: ${streak} Days<br><br>

🎯 Current Goal:<br>
${goal}
`;

}

let timerRunning = false;
let studyTime = 1500;
let studyInterval;

function startStudyTimer(){

if(timerRunning) return;

timerRunning = true;

studyInterval = setInterval(function(){

let minutes = Math.floor(studyTime / 60);
let seconds = studyTime % 60;

document.getElementById("studyTimer").innerHTML =
minutes + ":" + String(seconds).padStart(2,"0");

studyTime--;

if(studyTime < 0){

clearInterval(studyInterval);

timerRunning = false;

alert("🎉 Great Job! Study session completed.");

studyTime = 1500;

document.getElementById("studyTimer").innerHTML = "25:00";

}

},1000);

}

if(goal === ""){

alert("Please enter today's goal.");

return;

}

localStorage.setItem("victoryGoal", goal);

document.getElementById("goalText").innerHTML =
"✅ Goal: " + goal;

}

streak++;

localStorage.setItem("victoryStreak", streak);

document.getElementById("streakText").innerHTML =
"🔥 Day " + streak;

}

function askAI(){

    document.getElementById("answerBox").innerHTML =
"<div class='ai-answer'>🤖 Victory AI is thinking...</div>";

localStorage.setItem("victoryRecentActivity", question);

document.getElementById("activityText").innerHTML =
"Last Search: " + question;

document.getElementById("streakCard").style.display = "block";

document.getElementById("goalCard").style.display = "block";

document.getElementById("progressCard").style.display = "block";

updateProgress();

document.getElementById("timerCard").style.display = "block";

document.getElementById("activityCard").style.display = "block";

document.getElementById("historyCard").style.display = "block";

const history =
JSON.parse(localStorage.getItem("questionHistory")) || [];

if(history.length > 0){

document.getElementById("historyList").innerHTML =
history.map(item =>
`<div class="btn" onclick="quickQuestion('${item}')">
${item}
</div>`
).join("")

}
else{

document.getElementById("historyList").innerHTML =
"No questions yet.";

}

const recentActivity =
localStorage.getItem("victoryRecentActivity");

if(recentActivity){

document.getElementById("activityText").innerHTML =
"Last Search: " + recentActivity;

}

const savedGoal = localStorage.getItem("victoryGoal");

if(savedGoal){

document.getElementById("goalText").innerHTML =
"✅ Goal: " + savedGoal;

}

document.getElementById("streakText").innerHTML =
"🔥 Day " + (localStorage.getItem("victoryStreak") || 0);

    const answerBox = document.getElementById("answerBox");
const resourceButtons = document.getElementById("resourceButtons");

    resourceButtons.innerHTML = "";

let question =
questionInput.value.toLowerCase();

question = question.replace(/[?.!,]/g, "");

question = question.trim();

let history =
JSON.parse(localStorage.getItem("questionHistory")) || [];

history.unshift(question);

history = history.slice(0,10);

localStorage.setItem(
"questionHistory",
JSON.stringify(history)
);

let answer = "";

let matched = false;

let originalQuestion = question;

for (let key in victoryAIData.allTopics) 

let resources = "";

let icon = "🤖";

let placeholder = "💡 Keep learning with Victory AI!";

let title = "🤖 Victory AI";

question = question.trim();

question = question.replace(/\s+/g," ");

question = question.replace("what is ", "");
question = question.replace("tell me about ", "");
question = question.replace("explain ", "");
question = question.replace("define ", "");

if(question==""){

    if(matched){
    answer += "<br><br>✨ Smart Match Found";
}

answerBox.innerHTML =
"<div class='ai-answer'><h3>⚠️ Empty Question</h3><p>Please type a question first.</p></div>";

resourceButtons.innerHTML = "";

questionInput.placeholder = placeholder;

return;

}

for (let key in victoryAIData.allTopics) {

    if (question.includes(key)) {

        answer = victoryAIData.allTopics[key];

        matched = true;

        break;

    }

}

if (matched) {

    title = "🤖 Victory AI";

}

if(!matched && question.includes("cell")){

    title = "🧬 Biology";

answer = victoryAIData.biology.cell;

}

else if(!matched && question.includes("mitochondria")){

answer =
"⚡ Mitochondria is known as the powerhouse of the cell.";

}

else if(!matched && question.includes("dna")){

    title = "🧬 Biology";

answer = victoryAIData.biology.dna;

}

else if(question.includes("photosynthesis")){

    title = "🌿 Biology";

answer = victoryAIData.biology.photosynthesis;

}

else if(question.includes("heart")){

    title = "❤️ Human Biology";

answer = victoryAIData.biology.heart;

}

else if(question.includes("respiration")){

answer =
"🌬️ Respiration is the process by which cells release energy from food.";

}

else if(question.includes("blood")){

answer =
"🩸 Blood transports oxygen, nutrients and hormones throughout the body.";

}

else if(question.includes("atom")){

    title = "⚛️ Chemistry";

answer = victoryAIData.chemistry.atom;

}

else if(question.includes("force")){

    title = "⚡ Physics";

answer = victoryAIData.physics.force;

}



else if(question.includes("newton")){

answer = victoryAIData.physics.newton;

}

else if(question.includes("notes")){

    if(question.includes("biology")){

title = "🧬 Biology";

answer = "Choose your Biology study material.";

resources = `
<br>
<a href="../studenthub.html" class="btn">📚 Biology Notes</a>
<a href="../studenthub.html" class="btn">📄 Biology PDF</a>
<a href="../studenthub.html" class="btn">📝 Biology PYQs</a>
`;

}

else if(question.includes("physics")){

title = "⚡ Physics";

answer = "Choose your Physics study material.";

resources = `
<br>
<a href="../studenthub.html" class="btn">📚 Physics Notes</a>
<a href="../studenthub.html" class="btn">📄 Physics PDF</a>
<a href="../studenthub.html" class="btn">📝 Physics PYQs</a>
`;

}

else if(question.includes("chemistry")){

title = "🧪 Chemistry";

answer = "Choose your Chemistry study material.";

resources = `
<br>
<a href="../studenthub.html" class="btn">📚 Chemistry Notes</a>
<a href="../studenthub.html" class="btn">📄 Chemistry PDF</a>
<a href="../studenthub.html" class="btn">📝 Chemistry PYQs</a>
`;

}

title = "📚 Notes";

answer = "Open your subject notes from the Student Hub.";

resources = `
<br>
<a href="../studenthub.html" class="btn">📚 Open Notes</a>
`;

}

else if(question.includes("pdf")){

title = "📄 PDF Library";

answer = "Browse study PDFs from the Student Hub.";

resources = `
<br>
<a href="../studenthub.html" class="btn">📄 Open PDFs</a>
`;

}

else if(question.includes("pyq")){

title = "📝 Previous Year Questions";

answer = "Practice previous year questions to improve your preparation.";

resources = `
<br>
<a href="../studenthub.html" class="btn">📝 Open PYQs</a>
`;

}

else if(!matched && question.includes("neet")){

    title = "🩺 NEET";

    answer = victoryAIData.exams.neet;

    resources = `
    <br>
    <a href="../pages/exam.html?exam=NEET" class="btn">📚 NEET Notes</a>
    <a href="../pages/exam.html?exam=NEET" class="btn">📄 NEET PDFs</a>
    <a href="../pages/exam.html?exam=NEET" class="btn">📝 NEET PYQs</a>
    `;

}

else if(question.includes("mock")){

title = "🎯 Mock Tests";

answer = "Start practicing with mock tests.";

resources = `
<br>
<a href="../pages/exam.html?exam=NEET" class="btn">📚 NEET Notes</a>
<a href="../pages/exam.html?exam=NEET" class="btn">📄 NEET PDFs</a>
<a href="../pages/exam.html?exam=NEET" class="btn">📝 NEET PYQs</a>
`;

}

else if(question.includes("jee")){

title = "⚙️ JEE";

answer = victoryAIData.exams.jee;

answer += "<br><br>Choose one option below:";

resources = `
<br>
<a href="../pages/exam.html?exam=JEE" class="btn">📚 JEE Notes</a>
<a href="../pages/exam.html?exam=JEE" class="btn">📄 JEE PDFs</a>
<a href="../pages/exam.html?exam=JEE" class="btn">📝 JEE PYQs</a>
`;

}

else if(question.includes("cuet")){

title = "🎓 CUET";

answer = victoryAIData.exams.cuet;

resources = `
<br>
<a href="../pages/exam.html?exam=CUET" class="btn">📚 CUET Notes</a>
<a href="../pages/exam.html?exam=CUET" class="btn">📄 CUET PDFs</a>
<a href="../pages/exam.html?exam=CUET" class="btn">📝 CUET PYQs</a>
`;

}

else if(question.includes("help")){

title = "❓ Victory AI Help";

answer = "You can ask about Biology, Physics, Chemistry, NEET, JEE, CUET, Notes, PDFs, PYQs or Mock Tests.";

resources = `
<br>
<a href="../studenthub.html" class="btn">📚 Student Hub</a>
`;

}

else if(question.includes("school")){

title = "🏫 School Studies";

answer =
"Choose your class and subject to start learning with VictoryDesk.";

resources = `
<a href="../pages/exam.html?exam=SCHOOL" class="btn">📚 School Notes</a>
<a href="../pages/exam.html?exam=SCHOOL" class="btn">📄 School PDFs</a>
<a href="../pages/exam.html?exam=SCHOOL" class="btn">📝 Practice Questions</a>
`;

}

else if(question.includes("study plan")){

title = "📅 Study Plan";

answer =
"Study 2 hours daily with this routine:<br><br>📚 45 min Study<br>☕ 10 min Break<br>📖 45 min Revision<br>📝 20 min MCQs";

resources = `
<a href="../studenthub.html" class="btn">📅 Open Study Hub</a>
`;

}

else if(question.includes("motivation")){

title = "💪 Daily Motivation";

answer =
"Success doesn't come from what you do occasionally. It comes from what you do consistently. Keep studying every day! 🚀";

resources = `
<a href="../index.html" class="btn">🏠 Home</a>
`;

}

else{

    title = "❓ Unknown Topic";

answer =
"🤖 Sorry! I don't know this answer yet. More topics will be added soon.";

answer += "<br><br>Choose one option below:";

}

answerBox.innerHTML =
`
<div class="ai-answer">

<h3>${icon} ${title}</h3>

<p>${answer}</p>

<small>
🤖 Victory AI • Smart Learning Assistant
</small>

</div>
`;

let resourceTitle = "";

resourceTitle = "<h3>📖 Study Resources</h3>";

resources = `
<p style="margin-top:15px;font-weight:bold;">📚 Recommended Resources</p>
`;

if(question.includes("cell") || question.includes("dna") || question.includes("photosynthesis") || question.includes("heart")){

resourceTitle = "📚 Recommended Study Material";

resources = `
<br>
<a href="../studenthub.html" class="btn">📚 Open Notes</a>
<a href="../studenthub.html" class="btn">📄 PDFs</a>
<a href="../studenthub.html" class="btn">📝 PYQs</a>
`;

}

resourceButtons.innerHTML =
resourceTitle + resources;

}

function showSuggestions(){

const text =
document.getElementById("questionInput").value.toLowerCase();

const box =
document.getElementById("suggestionBox");

if(text.length < 2){
    box.innerHTML = "";
    return;
}

const topics = [
"cell",
"dna",
"photosynthesis",
"heart",
"biology",
"physics",
"chemistry",
"neet",
"jee",
"cuet",
"mock test",
"notes" ,
"mitochondria",
"respiration",
"blood",
"atom",
"newton"
];

const result = topics.filter(item =>
item.startsWith(text));

if(result.length === 0){
    box.innerHTML = "";
    return;
}

box.innerHTML = result.map(item =>
`<div class="btn" onclick="quickQuestion('${item}')">${item}</div>`
).join("");

}