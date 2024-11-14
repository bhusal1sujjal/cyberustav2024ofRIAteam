
function showScore() {
  document.getElementById('question-container').style.display = 'none';
  document.getElementById('score-container').style.display = 'block';
  document.getElementById('score-container').innerHTML = `<h2>Your Score: ${score} out of ${maxQuestions}</h2>`;
}

let currentIndex = 0;

function moveSlide(step) {
  const slides = document.querySelectorAll(".slide");
  currentIndex += step;

  if (currentIndex >= slides.length) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }

  const sliderWrapper = document.querySelector(".slider-wrapper");
  sliderWrapper.style.transform = `translateX(${-currentIndex * 100}%)`;
}
