// ARRAY (5+ items)
let skills = ["HTML", "CSS", "JavaScript", ];

// LOOP (display skills)
let list = document.getElementById("skillList");

skills.forEach(function(skill) {
    let li = document.createElement("li");
    li.textContent = skill;
    list.appendChild(li);
});

// BUTTON FUNCTION
function changeText() {
    document.getElementById("demo").innerHTML = "You clicked the button!";
}

// EVENT LISTENER
document.getElementById("colorBtn").addEventListener("click", function() {
    document.body.style.background = "#b3ecff";
});

// CONDITIONAL FUNCTION
function greet(name) {
    if (name === "") {
        console.log("No name entered");
    } else {
        console.log("Hello " + name);
    }
}

// CALL FUNCTION
greet("Student");