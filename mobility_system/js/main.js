//ハンバーガーメニューの処理
function toggleNav(){
  const body = document.body;
  const hamberger = document.getElementById('js-hamberger');
  const blackBg = document.getElementById('js-black-bg');

  hamberger.addEventListener('click', function(){
    body.classList.toggle('nav-open');
  });
}

toggleNav();




//スライドショーの処理
$('.slider').slick({
  dots: false,
  autoplay: true,
  arrows: true,
  slidesToShow: 2,
  autoplaySpeed: 3000,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 680,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '25px',
        slidesToShow: 1
      }
    }
  ]
});