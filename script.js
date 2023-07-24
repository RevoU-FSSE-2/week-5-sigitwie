// Hamburger Menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

const toggleMenu = () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
};

hamburger.addEventListener("click", toggleMenu);

document
  .querySelectorAll(".nav-item")
  .forEach((n) => n.addEventListener("click", toggleMenu));


// hide nav
let previousScrollPosition = window.pageYOffset;

window.addEventListener("scroll", function () {
  const currentScrollPosition = window.pageYOffset;

  if (currentScrollPosition > previousScrollPosition) {
    // Scrolling down
    document.getElementById("main-nav").classList.add("nav-hide");
  } else {
    // Scrolling up
    document.getElementById("main-nav").classList.remove("nav-hide");
  }

  previousScrollPosition = currentScrollPosition;
});



// Get the height of the entire document
const documentHeight = Math.max(
  document.body.scrollHeight,
  document.body.offsetHeight,
  document.documentElement.clientHeight,
  document.documentElement.scrollHeight,
  document.documentElement.offsetHeight
);

// Calculate the height of the viewport
const viewportHeight = window.innerHeight;

// Calculate the maximum scrollable distance
const maxScroll = documentHeight - viewportHeight;

// Update the progress bar as the user scrolls
window.addEventListener("scroll", function () {
  // Get the current scroll position
  const scrollTop =
    window.pageYOffset ||
    (document.documentElement || document.body.parentNode || document.body)
      .scrollTop;

  // Calculate the progress percentage
  const progress = (scrollTop / maxScroll) * 100;

  // Update the width of the progress bar fill
  document.getElementById("progress-bar-fill").style.width =
    progress + "%";
});

word
window.onload = function () {
  const words = ['Marketing', 'Branding', 'Web-App Developing'];
  let currentWordIndex = 0;
  const wordElement = document.getElementById('word');

  setInterval(function () {
    currentWordIndex = (currentWordIndex + 1) % words.length;
    const word = words[currentWordIndex];
    typeWord(word);
  }, 3000);

  function typeWord(word) {
    let currentLength = 0;
    const typingInterval = setInterval(function () {
      const currentText = word.substring(0, currentLength);
      wordElement.textContent = currentText;
      currentLength++;

      if (currentLength > word.length) {
        clearInterval(typingInterval);
      }
    }, 100);
  }


  // dot animation

  window.addEventListener("scroll", function () {
    var dotAnimation = document.querySelector(".dot-animation");
    if (window.scrollY > 0) {
      dotAnimation.classList.add("hidden");
    } else {
      dotAnimation.classList.remove("hidden");
    }
  });

  

};