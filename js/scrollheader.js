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

document.addEventListener("DOMContentLoaded", function() {
    gsap.utils.toArray(".fadeup").forEach(section => {
      gsap.from(section, {
        y: 50, // Y軸方向に50ピクセル下から開始
        autoAlpha: 0, // 透明度を0から開始
        duration: 1, // アニメーションの継続時間は1秒
        ease: "power2.out", // イージング関数
        scrollTrigger: {
          trigger: section, // トリガーとなるsection要素
          start: "top 80%", // ビューポートの上端から80%の位置で開始
          end: "bottom top", // ビューポートの下端で終了
          toggleActions: "play none none none" // スクロール時のアクション
        }
      });
    });
  });



  document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector(".hamburger-menu");
    const globalMenu = document.querySelector(".global-menu");
  
    // メニューの開閉状態を切り替える関数
    const toggleMenu = () => {
      if (globalMenu.style.opacity === "0" || globalMenu.style.opacity === "") {
        gsap.to(globalMenu, { autoAlpha: 1, x: '0%', duration: 0.5 });
      } else {
        gsap.to(globalMenu, { autoAlpha: 0, x: '-100%', duration: 0.5 });
      }
    };
  
    if (menuButton && globalMenu) {
      menuButton.addEventListener("click", toggleMenu);
  
      // メニュー内のリンクにイベントリスナーを設定
      const menuLinks = globalMenu.querySelectorAll("a");
      menuLinks.forEach(link => {
        link.addEventListener("click", toggleMenu);
      });
    } else {
      console.error("要素が見つかりません: .hamburger-menu または .global-menu");
    }
  });
  

const menu = document.querySelector('.mobile-menu.hamburger-menu');
const bars = document.querySelectorAll('.mobile-menu.hamburger-menu .mobile-menu__border');
const links = document.querySelectorAll('.mobile-menu-ul .navigation__list a');
let isOpen = false;

function toggleMenu() {
  if (isOpen) {
    // メニューをハンバーガー状態に戻す
    gsap.to(bars[0], { rotation: 0, y: 0, duration: 0.5 });
    gsap.to(bars[1], { opacity: 1, duration: 0.5 });
    gsap.to(bars[2], { rotation: 0, y: 0, duration: 0.5 });
    isOpen = false;
  } else {
    // メニューをバツ印にする
    gsap.to(bars[0], { rotation: 45, y: 11, duration: 0.5 });
    gsap.to(bars[1], { opacity: 0, duration: 0.5 });
    gsap.to(bars[2], { rotation: -45, y: -11, duration: 0.5 });
    isOpen = true;
  }
}

menu.addEventListener('click', toggleMenu);

// リンクがクリックされたときにメニューをリセットする
links.forEach(link => {
  link.addEventListener('click', () => {
    if (isOpen) {
      toggleMenu();
    }
  });
});


window.addEventListener('scroll', function() {
  const scrollTop = window.scrollY;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;

  const atBottom = scrollTop + clientHeight >= scrollHeight;

  if (atBottom) {
    // ここで、一番下に達した際のスクロールを制御する処理を記述
    // 例えば、一番下に達したらスクロールを少し上に戻す
    window.scrollTo(0, scrollHeight - clientHeight);
  }
});

