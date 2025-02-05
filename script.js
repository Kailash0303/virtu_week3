
document.getElementById("goalForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const goalName = document.getElementById("goalName").value;
    const goalProgress = document.getElementById("goalProgress").value;

    if (goalName && goalProgress) {
        addGoal(goalName, goalProgress);
        document.getElementById("goalForm").reset();
    }
});

let goals = [];

function addGoal(name, progress) {
    goals.push({ name, progress });
    displayGoals();
}

function displayGoals() {
    const goalList = document.getElementById("goalList");
    goalList.innerHTML = "";
    goals.forEach((goal, index) => {
        goalList.innerHTML += `<p>${goal.name}: ${goal.progress}% <button onclick="updateProgress(${index})">Update</button></p>`;
    });
}

function updateProgress(index) {
    const newProgress = prompt("Enter new progress percentage:", goals[index].progress);
    if (newProgress !== null && !isNaN(newProgress)) {
        goals[index].progress = newProgress;
        displayGoals();
    }
}
