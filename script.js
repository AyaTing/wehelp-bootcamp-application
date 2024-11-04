const triggers = document.querySelectorAll(".accordion-header");

const accordionToggle = function () {
  const content = this.nextElementSibling;
  const icon = this.querySelector(".accordion-icon");
  content.classList.toggle("active");
  icon.textContent = content.classList.contains("active") ? "-" : "+";
};
triggers.forEach((trigger) =>
  trigger.addEventListener("click", accordionToggle)
);

const isSafari = function () {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
};

document.addEventListener("DOMContentLoaded", function () {
  if (isSafari()) {
    triggers.forEach((trigger) => {
      trigger.classList.add("no-clip-animation");
    });
  }
});
