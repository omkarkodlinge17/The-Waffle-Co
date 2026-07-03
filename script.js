function orderNow() {
  alert("Redirecting to online order page...");
  window.open("https://www.swiggy.com", "_blank");
}

function reserveTable() {
  alert("Table reservation feature coming soon!");
}

function toggleFAQ(item) {
  item.classList.toggle("active");
}

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 120;

    if (sectionTop < triggerPoint) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.transform = `
      perspective(900px)
      rotateX(${-(y - rect.height / 2) / 18}deg)
      rotateY(${(x - rect.width / 2) / 18}deg)
      translateY(-12px)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});