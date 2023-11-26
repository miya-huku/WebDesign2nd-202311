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
