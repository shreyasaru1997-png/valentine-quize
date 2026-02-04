let score = 0;
let current = 0;

// Image-based quiz using images/1.png, images/2.png, images/3.png
// Update the `options` and `answer` fields to match your image contents.
const quiz = [

    {
        q: "When did I first fall for you? 💕",
        options: ["Feb 27", "March 4", "March 8", "I don’t remember 😛"],
        answer: 2
    },

  {
    q: "What do I love most about you?",
    image: "images/3.PNG",
    options: ["Your smile", "Your care", "Your anger 😛", "Everything 💖 ✅"],
    answer: 3
  },
  {
    q: "What made this moment special for us?",
    image: "images/4.jpeg",
    options: [
      "Our first date after we moved into our new house",
      "We had met after a long time",
      "First date night with Kempesh",
      "It was an unplanned but perfect day ❤️"
    ],
    answer: 2
  },
  {
    q: "What was I thinking at this moment?",
    image: "images/5.jpeg",
    options: [
      "She looks beautiful ❤️",
      "Let's take more photos",
      "I'm hungry 😋",
      "I don't want this moment to end 💕"
    ],
    answer: 0
  },
  {
    q: "What is my biggest weakness?",
    options: ["Overthinking", "You ❤️", "Sleep", "Food 😋"],
    answer: 1
  },

  {
    q: "Which memory is this?",
    image: "images/2.PNG",
    options: ["Sringeri", "Hornadu", "Anegudda", "Kollur"],
    answer: 1
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
  const buttons = document.querySelectorAll('.opt-btn');

  if (i === quiz[current].answer) {
    // Correct answer: mark, increment score, disable all options and advance
    score++;
    btn.classList.add('correct');
    buttons.forEach(b => b.disabled = true);

    setTimeout(() => {
      current++;
      render();
    }, 800);
  } else {
    // Wrong answer: mark the clicked button and disable it so user can try again
    btn.classList.add('wrong');
    btn.disabled = true;
    // Do NOT reveal the correct answer or advance; user must pick the right one
  }
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
