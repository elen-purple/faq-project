const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  item.querySelector(".question").addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("open");
    if (e.currentTarget.classList.contains("open")) {
      item.querySelector(".icon").textContent = "-";
    } else {
      item.querySelector(".icon").textContent = "+";
    }
  });
});
