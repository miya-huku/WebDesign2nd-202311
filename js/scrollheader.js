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

const works = document.getElementById('works');
window.addEventListener('scroll', function() {
  const body = document.body;
  const scrollTop = window.scrollY;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;
  const atBottom = scrollTop + clientHeight >= scrollHeight;
  const backToTopButton = document.getElementById('back-to-top');
  const worksrect = works.getBoundingClientRect();

  if (atBottom) {
    // ここで、一番下に達した際のスクロールを制御する処理を記述
    window.scrollTo(0, scrollHeight - clientHeight);
  }
  if (scrollTop === 0) {
    // ここで、一番上に達した際のスクロールを制御する処理を記述
    body.scrollTop = 0;
  }
  if (window.scrollY > window.innerHeight) {
    // ビューポートの高さを超えたらボタンを表示
    gsap.to(backToTopButton, { duration: 0.5, opacity: 1, display: 'block' });
    backToTopButton.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

  } else {
    // それ以外の場合は非表示に
    gsap.to(backToTopButton, { duration: 0.5, opacity: 0, display: 'none' });
  }
});

// GSAPを使用して要素をふわふわと上下に動かす
gsap.to("#floating-element", {
  y: 20, // 20px上下に動かす
  duration: 2, // 2秒かけて動かす
  ease: "power1.inOut",
  yoyo: true,
  repeat: -1 // 繰り返し無限
});

// 要素をクリックしたときにスクロールを200px下に動かす
document.getElementById("floating-element").addEventListener("click", function() {
  // 現在のスクロール位置を取得
  const currentScroll = window.scrollY;
  // 現在のビューポートの高さを取得
  var viewportHeight = window.innerHeight;
  // viewportHeight分下にスクロール
  window.scrollTo({
    top: currentScroll + viewportHeight,
    behavior: "smooth" // スムーススクロール
  });
});



function changeStyles(color) {
  const floatingElement = document.getElementById("floating-element");
  const backToTop = document.getElementById("back-to-top");

  // 文字色の変更
  floatingElement.style.color = color;
  backToTop.style.color = color;

  // ボーダー色の変更
  floatingElement.style.borderColor = color;
  backToTop.style.borderColor = color;
  
}

function changeStyles(isEntering) {
  const floatingElement = document.getElementById("floating-element");
  const backToTop = document.getElementById("back-to-top");

  // 文字色、ボーダー色、背景グラデーションの変更
  const color = isEntering ? "white" : ""; // エリアに入ったかに基づく色
  const gradient1 = isEntering ? "linear-gradient(302deg, transparent 0%, transparent 27%, #ffffff 1%, #ffffff 28%, transparent 0, transparent 100%)" : ""; // エリアに入ったかに基づくグラデーション
  const gradient2 = isEntering ? "linear-gradient(120deg, transparent 0%, transparent 24%, #ffffff 1%, #ffffff 27%, transparent 0, transparent 100%)" : ""; // エリアに入ったかに基づくグラデーション

  floatingElement.style.color = color;
  backToTop.style.color = color;
  floatingElement.style.borderColor = color;
  backToTop.style.borderColor = color;
  floatingElement.style.background = gradient1;
  backToTop.style.background = gradient2;
}

ScrollTrigger.create({
  trigger: "#works",
  start: "top center",
  end: "bottom center",
  onEnter: () => changeStyles(true),
  onLeave: () => changeStyles(false),
  onEnterBack: () =>　changeStyles(false),
  onLeaveBack: () => changeStyles(false),
});

ScrollTrigger.create({
  trigger: "#footer",
  start: "top center",
  end: "bottom center",
  onEnter: () => changeStyles(true),
  onLeave: () => changeStyles(false),
  onEnterBack: () => changeStyles(false),
  onLeaveBack: () => changeStyles(false),
});



const floatingTween = gsap.to("#floating-element", {
  y: 20,
  duration: 2,
  ease: "power1.inOut",
  yoyo: true,
  repeat: -1
});

// #content 領域の下部に到達した際の処理
ScrollTrigger.create({
  trigger: "#contact",
  start: "top center", // #content の下部がビューポートの下部に来た時
  end: "bottom center",
  onEnter: () => floatingTween.pause(), // 動きを停止
  onLeaveBack: () => floatingTween.resume() // 逆スクロールで動きを再開
});

ScrollTrigger.create({
  trigger: "#footer",
  start: "top center", // #content の下部がビューポートの下部に来た時
  end: "bottom center",
  onEnter: () => floatingTween.pause(), // 動きを停止
  onLeaveBack: () => floatingTween.resume() // 逆スクロールで動きを再開
});

