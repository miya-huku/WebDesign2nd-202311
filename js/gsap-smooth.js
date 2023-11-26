/* --------------------
smooth scroll
固定ヘッダーのとき
-------------------- */
// ヘッダーの要素を取得（例えば.headerだった場合）
const h = document.getElementsByClassName('header-scroll')[0];
if(h >= 0){
  gsap.utils.toArray('a[href^="#"]').forEach(function(a) {
    a.addEventListener("click", function(e) {
      e.preventDefault();
      gsap.to( window, {
        duration: 1,
        ease: 'power4.out',
        scrollTo: {
          y: e.target.getAttribute("href"),
          autoKill: false,
          offsetY: h.offsetHeight, //ヘッダーの高さをセット
        }
      });
    });
  });
}
