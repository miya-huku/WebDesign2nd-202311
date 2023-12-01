const container = document.querySelector('.box-02');
const slides = document.querySelectorAll('.slide');
const containerWidth = container.offsetWidth;
gsap.to( slides, {
   xPercent: -110 * (slides.length - 1),
   ease: "none",
   scrollTrigger: {
      trigger: container,
      pin: true,
      scrub: 1,
      end: () => "+=" + containerWidth,
      anticipatePin: 1,
      invalidateOnRefresh: true,
  }
})


const body = document.body;
const modal = document.getElementById("modal");
const modalTriggers = document.querySelectorAll(".modal-trigger");
const modalBody = document.getElementById("modal-body");
const closeButton = document.querySelector(".close-button");
const closeButton2 = document.querySelector(".close-button2");

function resetScrollPosition() {
  modalBody.scrollTop = 0;
}

function toggleModal() {
  if (modal.style.display === "none") {
    gsap.to(modal, { display: "block", opacity: 1, duration: 0.5 });
    body.style.overflow = 'hidden'; // モーダルが開いている間はスクロールを無効にする
  } else {
    gsap.to(modal, {
      display: "none",
      opacity: 0,
      duration: 0.5,
      scrollTop:0,
      onComplete: () => {
        body.style.overflow = '', // モーダルが閉じたらスクロールを再び有効にする
        resetScrollPosition; // アニメーション完了時にスクロール位置をリセット
      }
    })
    resetScrollPosition();;
  }
}

function updateModalImage(imagePath) {
  modalBody.innerHTML = `<img src="${imagePath}" style="width: 100%;">`;
}

modalTriggers.forEach(trigger => {
  trigger.addEventListener("click", function() {
    const imagePath = this.getAttribute("data-modal-content");
    updateModalImage(imagePath);
    toggleModal();
  });
});

closeButton.addEventListener("click", toggleModal);
closeButton2.addEventListener("click", toggleModal);

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    toggleModal();
  }
});
