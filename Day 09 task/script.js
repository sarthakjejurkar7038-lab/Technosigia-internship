const students = [
  { name: "Aarav", marks: 88 },
  { name: "Diya", marks: 93 },
  { name: "Kabir", marks: 55 },
  { name: "Meera", marks: 70 },
];
let filterMode = "all";

const $ = (id) => document.getElementById(id);

// Escape text so typed names cannot break the page
const safe = (text) => String(text).replace(/[&<>"']/g, (ch) =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));

function gradeClass(marks) {
  if (marks >= 90) return "great";
  if (marks >= 75) return "good";
  if (marks >= 50) return "ok";
  return "low";
}

function showMessage(text, type) {
  const box = $("message");
  box.textContent = text;
  box.className = type;
  setTimeout(() => { box.textContent = ""; }, 3000);
}

// Display dynamic data (DOM manipulation)
function render() {
  const text = $("search").value.toLowerCase();
  let data = students.filter((s) => s.name.toLowerCase().includes(text));
  if (filterMode === "toppers") {
    data = data.filter((s) => s.marks >= 75);
  }

  const list = $("list");
  list.innerHTML = "";
  if (data.length === 0) {
    list.innerHTML = '<li class="empty">No students found.</li>';
  }
  data.forEach((student) => {
    const { name, marks } = student;               // destructuring
    const li = document.createElement("li");
    li.className = "student";
    li.innerHTML = `
      <div class="avatar">${safe(name[0].toUpperCase())}</div>
      <div class="info">
        <strong>${safe(name)}</strong>
        <div class="bar"><div class="fill ${gradeClass(marks)}" style="width:${marks}%"></div></div>
      </div>
      <span class="badge ${gradeClass(marks)}">${marks}</span>
      <button class="del" data-index="${students.indexOf(student)}">&times;</button>`;
    list.appendChild(li);
  });

  // Stat cards (reduce and Math.max)
  const total = students.reduce((sum, s) => sum + s.marks, 0);
  $("totalCount").textContent = students.length;
  $("avgMarks").textContent = students.length ? (total / students.length).toFixed(1) : 0;
  $("topMarks").textContent = students.length ? Math.max(...students.map((s) => s.marks)) : 0;
}

// Form submission event
$("studentForm").addEventListener("submit", (event) => {
  event.preventDefault();                          // stop page reload
  const name = $("name").value.trim();
  const marks = Number($("marks").value);
  if (!name || $("marks").value === "" || marks < 0 || marks > 100) {
    showMessage("Enter a valid name and marks (0-100).", "error");
    return;
  }
  students.push({ name, marks });
  showMessage("Student added!", "success");
  event.target.reset();
  render();
});

// Search while typing
$("search").addEventListener("input", render);

// Filter button click events
function setFilter(mode) {
  filterMode = mode;
  $("showAll").classList.toggle("active", mode === "all");
  $("showToppers").classList.toggle("active", mode === "toppers");
  render();
}
$("showAll").addEventListener("click", () => setFilter("all"));
$("showToppers").addEventListener("click", () => setFilter("toppers"));

// Delete a student (one listener for all delete buttons)
$("list").addEventListener("click", (event) => {
  if (event.target.classList.contains("del")) {
    students.splice(Number(event.target.dataset.index), 1);
    render();
  }
});

// Fetch API with async / await
$("loadApi").addEventListener("click", async () => {
  const box = $("apiList");
  box.innerHTML = '<p class="note">Loading...</p>';
  try {
    const response = await fetch("data.json");
    if (!response.ok) throw new Error("Bad response");
    const users = await response.json();
    box.innerHTML = users.map(({ name, email }) => `
      <div class="user">
        <div class="avatar">${safe(name[0])}</div>
        <div><strong>${safe(name)}</strong><small>${safe(email)}</small></div>
      </div>`).join("");
  } catch (error) {
    box.innerHTML = '<p class="note">Could not load data. Check your internet.</p>';
  }
});

render();