// GSAPとScrollTriggerプラグインを登録
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function() {
  const header = document.querySelector(".header");

  // ScrollTriggerを使用して特定のスクロール位置でアニメーションを制御
  ScrollTrigger.create({
    start: 100, // スクロール開始位置
    end: "bottom bottom", // スクロール終了位置
    onToggle: self => {
      if (self.isActive) {
        header.classList.add("header-scroll");
      } else {
        header.classList.remove("header-scroll");
      }
    }
  });
});
