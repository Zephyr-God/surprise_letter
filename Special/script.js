const readBtn = document.getElementById("readBtn");
const envelopeWrapper = document.querySelector(".envelope-wrapper");
const letterInside = document.getElementById("letterInside");
const letterSection = document.getElementById("letter");
const surpriseSection = document.getElementById("surprises");
const introMsg = document.getElementById("introMsg");
const realMsg = document.getElementById("realMsg");
const closeBtn = document.getElementById("closeOverlay");

readBtn.addEventListener("click", () => {
  // Animate envelope open (CSS-drawn flap on wrapper)
  envelopeWrapper.classList.add("open");

  // Wait a bit, then slide the letter out
  setTimeout(() => {
    letterInside.classList.add("slide-letter");
  }, 800);

  // Show "A letter for you" first
  setTimeout(() => {
    introMsg.classList.add("fade-in");
  }, 1500);

  // Fade out the intro (do not show placeholder real message)
  setTimeout(() => {
    introMsg.classList.remove("fade-in");
    introMsg.classList.add("fade-out");
    // realMsg.classList.remove("hidden");
    // realMsg.classList.add("fade-in");
  }, 3000);

  // Reveal the full letter overlay and dim the background
  setTimeout(() => {
    letterSection.classList.remove("hidden");
    letterSection.classList.add("visible");
    document.body.classList.add("overlay-active");
  }, 3500);

  // Optional: Add 3D lift effect to the small letter inside the envelope
  setTimeout(() => {
    letterInside.classList.add("lifted");
  }, 3800);
});

// Keep the old scroll-based reveal of surprises commented
// window.addEventListener("scroll", () => {
//   const letterBottom = letterSection.getBoundingClientRect().bottom;
//   if (letterBottom < window.innerHeight) {
//     surpriseSection.classList.remove("hidden");
//   }
// });

// Navigate to Huiiii page when close button is clicked
if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    window.location.href = "huiiii.html";
  });

  // Keyboard support: Enter or Space triggers same action
  closeBtn.addEventListener("keydown", (e) => {
    const isEnter = e.key === "Enter";
    const isSpace = e.key === " " || e.key === "Spacebar"; // older browsers
    if (isEnter || isSpace) {
      e.preventDefault();
      window.location.href = "huiiii.html";
    }
  });
}
