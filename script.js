function setInitialValue() {
  document.getElementById("marks-inp").value = 0;
}

function calculateGrade() {
  const marks = parseInt(document.getElementById("marks-inp").value);
  
  if (marks >= 80 && marks <= 100) {
    document.getElementById("grade").innerText = "A+";
  }
  else if (marks >= 70 && marks <80) {
    document.getElementById("grade").innerText = "A";
  }
  else if (marks >= 60 && marks <70) {
    document.getElementById("grade").innerText = "A-";
  }
  else if (marks >= 50 && marks <60) {
    document.getElementById("grade").innerText = "B";
  }
  else if (marks >= 40 && marks <50) {
    document.getElementById("grade").innerText = "C";
  }
  else if (marks >= 33 && marks <40) {
    document.getElementById("grade").innerText = "D";
  }
  else if (marks >= 0 && marks <33) {
    document.getElementById("grade").innerText = "F";
  }
  else if (marks <0 || marks >100) {
    alert("Please check the mark again!!!")
  }
}

setInitialValue();
