// array of study tips
var tips = [
  "Study for 25 minutes, then take a short break.",
  "Get enough sleep before your exam.",
  "Review your notes every day.",
  "Write notes by hand to remember better.",
  "Ask for help when you don't understand."
];

// counter for progress
var count = 0;

// when user clicks a task card
function selectTask(taskName) {
  var msg = document.getElementById("outputMessage");
  msg.style.color = "blue";
  msg.innerHTML = "Selected task: " + taskName;
}

// when user submits the form
function submitTask() {
  var taskName = document.getElementById("taskName").value;
  var subject = document.getElementById("subject").value;
  var priority = document.getElementById("priority").value;
  var msg = document.getElementById("outputMessage");

  // check if fields are empty
  if (taskName == "" || subject == "") {
    msg.style.color = "red";
    msg.innerHTML = "Please fill in all required fields.";
  } else {
    msg.style.color = "green";
    msg.innerHTML = "Task added successfully: " + taskName;

    // add task to the list
    var taskList = document.getElementById("taskList");
    var newItem = document.createElement("div");
    newItem.className = "task-item";
    newItem.innerHTML = "&#9989; " + taskName + " - " + subject;
    taskList.appendChild(newItem);

    // update progress
    count = count + 1;
    document.getElementById("progressText").innerHTML = count + " / 10";

    var percent = (count / 10) * 100;
    document.getElementById("progressBar").style.width = percent + "%";

    // clear the form
    document.getElementById("taskName").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("priority").value = "";
  }
}

// show a random tip
function showTip() {
  var randomNumber = Math.floor(Math.random() * tips.length);
  document.getElementById("tipText").innerHTML = "Tip: " + tips[randomNumber];
}

// scroll to the form
function scrollToForm() {
  document.getElementById("addtask").scrollIntoView({ behavior: "smooth" });
}
