document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const openBtn = document.getElementById("openModal");
  const openBtn2 = document.getElementById("openModal2");
  const closeBtn = document.getElementById("closeModal");
  const sendBtn = document.getElementById("sendBtn");
  const msg = document.getElementById("msg");

  if (openBtn) openBtn.onclick = () => modal.style.display = "flex";
  if (openBtn2) openBtn2.onclick = () => modal.style.display = "flex";

  if (closeBtn) closeBtn.onclick = () => {
    modal.style.display = "none";
    msg.textContent = "";
  };

  if (sendBtn) sendBtn.onclick = () => {
    msg.textContent = "✅ Заявка отправлена!";
  };

  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    reveals.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});
