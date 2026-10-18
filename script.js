
const TOTAL_QUESTIONS = 50;

let quiz = [];
let currentIndex = 0;
let answers = [];
let activeFilter = "all";

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const backBtn = document.getElementById("back-btn");
const nextBtn = document.getElementById("next-btn");

const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");

// Randomly shuffle an array
function shuffle(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

// Start a new quiz
function startQuiz() {
  quiz = shuffle(KANJI_DATA)
    .slice(0, TOTAL_QUESTIONS)
    .map(item => {
      const distractors = shuffle(
        KANJI_DATA.filter(
          x => x.reading !== item.reading
        )
      )
        .map(x => x.reading)
        .filter(
          (reading, index, array) =>
            reading !== item.reading &&
            array.indexOf(reading) === index
        )
        .slice(0, 3);

      const choices = shuffle([
        ...new Set([item.reading, ...distractors])
      ]).slice(0, 4);

      return {
        ...item,
        choices
      };
    });

  currentIndex = 0;
  answers = Array(TOTAL_QUESTIONS).fill(null);
  activeFilter = "all";

  startScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  renderQuestion();
}

// Calculate the number of correct answers
function getCorrectCount() {
  return answers.filter(
    answer => answer && answer.isCorrect
  ).length;
}

// Display the current question
function renderQuestion() {
  const item = quiz[currentIndex];
  const savedAnswer = answers[currentIndex];

  document.getElementById("progress").textContent =
    `Question ${currentIndex + 1} of ${TOTAL_QUESTIONS}`;

  document.getElementById("score-live").textContent =
    `Correct: ${getCorrectCount()}`;

  document.getElementById("progress-bar").style.width =
    `${((currentIndex + 1) / TOTAL_QUESTIONS) * 100}%`;

  document.getElementById("question-kanji").textContent =
    item.kanji;

  optionsEl.innerHTML = "";

  feedbackEl.classList.add("hidden");
  feedbackEl.textContent = "";

  // Disable Back on the first question
  backBtn.disabled = currentIndex === 0;

  // Require an answer before moving forward
  nextBtn.disabled = !savedAnswer;

  nextBtn.textContent =
    currentIndex === TOTAL_QUESTIONS - 1
      ? "View Results"
      : "Next Question";

  // Display the answer choices
  item.choices.forEach(choice => {
    const button = document.createElement("button");

    button.className = "option";
    button.textContent = choice;

    if (savedAnswer) {
      button.disabled = true;

      if (choice === item.reading) {
        button.classList.add("correct");
      }

      if (
        choice === savedAnswer.userAnswer &&
        !savedAnswer.isCorrect
      ) {
        button.classList.add("wrong");
      }
    } else {
      button.addEventListener("click", () => {
        chooseAnswer(choice, button);
      });
    }

    optionsEl.appendChild(button);
  });

  // Restore feedback when returning to a previous question
  if (savedAnswer) {
    feedbackEl.textContent = savedAnswer.isCorrect
      ? `Correct! The reading is 「${item.reading}」.`
      : `Incorrect. The correct reading is 「${item.reading}」.`;

    feedbackEl.classList.remove("hidden");
  }
}

// Check the selected answer
function chooseAnswer(choice, selectedButton) {
  if (answers[currentIndex]) {
    return;
  }

  const item = quiz[currentIndex];
  const correct = choice === item.reading;

  answers[currentIndex] = {
    kanji: item.kanji,
    correctAnswer: item.reading,
    userAnswer: choice,
    isCorrect: correct
  };

  // Disable all choices after answering
  [...optionsEl.querySelectorAll("button")].forEach(button => {
    button.disabled = true;

    if (button.textContent === item.reading) {
      button.classList.add("correct");
    }
  });

  // Highlight an incorrect selection
  if (!correct) {
    selectedButton.classList.add("wrong");
  }

  // Display feedback
  feedbackEl.textContent = correct
    ? `Correct! The reading is 「${item.reading}」.`
    : `Incorrect. The correct reading is 「${item.reading}」.`;

  feedbackEl.classList.remove("hidden");

  document.getElementById("score-live").textContent =
    `Correct: ${getCorrectCount()}`;

  nextBtn.disabled = false;
}

// Move to the next question
function nextQuestion() {
  if (!answers[currentIndex]) {
    return;
  }

  if (currentIndex < TOTAL_QUESTIONS - 1) {
    currentIndex++;
    renderQuestion();
  } else {
    showResults();
  }
}

// Back button: return to the previous question
function previousQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
  }
}

// Display final results
function showResults() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  const correctCount = getCorrectCount();
  const wrongCount = TOTAL_QUESTIONS - correctCount;

  document.getElementById("final-score").textContent =
    correctCount;

  document.getElementById("correct-count").textContent =
    correctCount;

  document.getElementById("wrong-count").textContent =
    wrongCount;

  document.getElementById("result-message").textContent =
    correctCount >= 45
      ? "Excellent work!"
      : correctCount >= 35
      ? "Great job! Keep practicing."
      : correctCount >= 25
      ? "Good effort. Review the kanji you missed."
      : "Review your answers and try again.";

  document.querySelectorAll(".filter").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.filter === "all"
    );
  });

  activeFilter = "all";

  renderReview();
}

// Display the answer review
function renderReview() {
  const list = document.getElementById("review-list");

  list.innerHTML = "";

  const filtered = answers.filter(answer => {
    if (!answer) {
      return false;
    }

    if (activeFilter === "wrong") {
      return !answer.isCorrect;
    }

    if (activeFilter === "correct") {
      return answer.isCorrect;
    }

    return true;
  });

  if (filtered.length === 0) {
    list.textContent = "No matching questions.";
    return;
  }

  filtered.forEach(answer => {
    const card = document.createElement("article");
    card.className = "review-item";

    const kanji = document.createElement("div");
    kanji.className = "review-kanji";
    kanji.textContent = answer.kanji;

    const details = document.createElement("div");
    details.className = "review-details";

    const status = document.createElement("div");

    status.className =
      `review-status ${answer.isCorrect ? "good" : "bad"}`;

    status.textContent =
      answer.isCorrect ? "Correct" : "Incorrect";

    const yourAnswer = document.createElement("p");

    yourAnswer.textContent =
      `Your answer: ${answer.userAnswer}`;

    const correctAnswer = document.createElement("p");

    correctAnswer.textContent =
      `Correct answer: ${answer.correctAnswer}`;

    details.append(status, yourAnswer, correctAnswer);

    card.append(kanji, details);

    list.appendChild(card);
  });
}

// Button event listeners
startBtn.addEventListener("click", startQuiz);

restartBtn.addEventListener("click", startQuiz);

backBtn.addEventListener("click", previousQuestion);

nextBtn.addEventListener("click", nextQuestion);

// Result filters
document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;

    document.querySelectorAll(".filter").forEach(btn => {
      btn.classList.toggle("active", btn === button);
    });

    renderReview();
  });
});
