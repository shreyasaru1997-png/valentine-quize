let score = 0;
let current = 0;

// Image-based quiz using images/1.png, images/2.png, images/3.png
// Update the `options` and `answer` fields to match your image contents.
const quiz = [
  {
    q: "Which memory is this?",
    image: "images/1.PNG",
    options: ["Memory 1", "Memory 2", "Memory 3", "Memory 4"],
    answer: 0
  },
  {
    q: "Which memory is this?",
    image: "images/2.PNG",
    options: ["Memory 5", "Memory 6", "Memory 7", "Memory 8"],
    answer: 1
  },
  {
    q: "Which memory is this?",
    image: "images/3.PNG",
    options: ["Memory 9", "Memory 10", "Memory 11", "Memory 12"],
    answer: 2
  },
  {
    final: true
  }
];

const content = document.getElementById("content");
const scoreDiv = document.getElementById("score");
const totalQuestions = quiz.filter(q => !q.final).length;

function render() {
  scoreDiv.innerText = `Score: ${score}/${totalQuestions}`;
  const q = quiz[current];

  if (q.final) {
    content.innerHTML = `
      <h2>Will you be my Valentine? 💖</h2>
      <button class="final-yes" onclick="yes()">Yes ❤️</button>
      <button class="final-no" onclick="no()">No 😏</button>
    `;
    return;
  }

  let html = `<h3>${q.q}</h3>`;
  if (q.image) html += `<img src="${q.image}" alt="quiz image">`;

  html += `<div class="options">`;
  q.options.forEach((opt, i) => {
    html += `<button class="opt-btn" onclick="check(${i}, this)">${opt}</button>`;
  });
  html += `</div>`;

  content.innerHTML = html;
}

function check(i, btn) {
  // Disable all option buttons
  const buttons = document.querySelectorAll('.opt-btn');
  buttons.forEach(b => b.disabled = true);

  if (i === quiz[current].answer) {
    score++;
    btn.classList.add('correct');
  } else {
    btn.classList.add('wrong');
    // highlight correct answer
    const buttonsArr = Array.from(buttons);
    const correctBtn = buttonsArr[quiz[current].answer];
    if (correctBtn) correctBtn.classList.add('correct');
  }

  // Move to next question after a short delay so user sees feedback
  setTimeout(() => {
    current++;
    render();
  }, 800);
}

function no() {
  alert("❌ Invalid choice.\nSystem detected you are already my Valentine 😘");
}

function yes() {
  content.innerHTML = `
    <h2>🎉 Yay! You're My Valentine! 🎉</h2>
    <p>Thank you for making my life beautiful ❤️</p>
  `;
}

render();
