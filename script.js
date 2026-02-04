let score = 0;
let current = 0;

const quiz = [
  {
    q: "When did I first fall for you? 💕",
    options: ["Jan 29", "Feb 12", "Jan 28", "I don’t remember 😛"],
    answer: 0
  },
  {
    q: "What gift did I buy on our first meet?",
    options: ["Teddy 🧸", "Chocolates 🍫", "Flowers 🌸", "Never gifted 😅"],
    answer: 0
  },
  {
    q: "Where did we click this photo?",
    image: "images/memory.jpg",
    options: ["Manali", "Ooty", "Wayanad", "Coorg"],
    answer: 2
  },
  {
    final: true
  }
];

const content = document.getElementById("content");
const scoreDiv = document.getElementById("score");

function render() {
  scoreDiv.innerText = `Score: ${score}/4`;
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
  if (q.image) html += `<img src="${q.image}">`;

  q.options.forEach((opt, i) => {
    html += `<button onclick="check(${i})">${opt}</button>`;
  });

  content.innerHTML = html;
}

function check(i) {
  if (i === quiz[current].answer) {
    score++;
  }
  current++;
  render();
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
