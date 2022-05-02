//navbaeの色が変わる処理
window.addEventListener('scroll', function(){
  const headerNav = document.querySelector('.header__inner');
  headerNav.classList.toggle('bgGray', window.scrollY > 20)
});


//hambergermenuの処理
function toggleNav(){
  const body = document.body;
  const hamberger = document.getElementById('js-hamberger');
  
  hamberger.addEventListener('click', function(){
    body.classList.toggle('nav-open');
  });
}

toggleNav();

//ふわっと
let fadeInTarget = document.querySelectorAll('.jsAnimation');
window.addEventListener('scroll', () => {
  for (let i = 0; i < fadeInTarget.length; i++){
    const rect = fadeInTarget[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight; // 現在のブラウザの高さ
    if (scroll > offset - windowHeight + 150) {
      fadeInTarget[i].classList.add('scroll-in');
    }
  }
});





//スライダー
$('.slider').slick({
  centerMode: true,
  centerPadding: '300px',
  dots: true,
  autoplay: true,
  arrows: false,
  slideToShow: 1,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        centerPadding: '270px',
      }
    },
    {
      breakpoint: 1024,
      settings: {
        centerPadding: '140px',
      }
    },
    {
      breakpoint: 796,
      settings: {
        centerPadding: '130px',
      }
    },
    {
      breakpoint: 680,
      settings: {
        centerPadding: '60px',
      }
    },
    {
      breakpoint: 500,
      settings: {
        centerPadding: '10px',
      }
    }
  ]
});

