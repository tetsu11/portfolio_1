'use strict'; 
{
  // ハンバーガーメニューの処理
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const tabmenu = document.querySelector('.tab-menu');
  const topmenu = document.querySelector('.top-menu');
  const topmenu_logo = document.querySelector('.top-menu__spimg');


  open.addEventListener('click', () => {
    tabmenu.classList.add('show');
    open.classList.add('hide');
    topmenu.classList.add('top-menu--open');
    topmenu_logo.classList.add('hide');

    if(tabmenu.classList.contains('exit')){
        tabmenu.classList.remove('exit');
    };
  })
  

  close.addEventListener('click', () => {
    tabmenu.classList.remove('show');
    open.classList.remove('hide');
    topmenu.classList.remove('top-menu--open');
    topmenu_logo.classList.remove('hide');
    tabmenu.classList.add('exit');
  });

  // PC用のスライダーの処理

  const myImage = [
    'image/top_img_1.png',
    'image/top_img_2.png',
    'image/top_img_3.png',
    'image/top_img_4.png',
    'image/top_img_5.png',
    'image/top_img_6.png',
  ];
  const firstShow =document.getElementById('first-show');
  const secondShow =document.getElementById('second-show');
  

  let myNowCnt = 0;
  let myflg = 0;

  function myChange(){
    if(myNowCnt >= myImage.length-1) {
      myNowCnt = 0;
    } else {
      myNowCnt +=1;
    }

    if(myflg === 1) {
      myflg = 0;
    }else {
      myflg += 1;
    }

    if(myflg == 0){
      firstShow.src = myImage[myNowCnt];
      secondShow.classList.toggle('fadeout');
      secondShow.classList.toggle('fadein');
      firstShow.classList.toggle('fadein');
      firstShow.classList.toggle('fadeout');

    }else {
      secondShow.src = myImage[myNowCnt];
      firstShow.classList.toggle('fadeout');
      firstShow.classList.toggle('fadein');
      secondShow.classList.toggle('fadein');
      secondShow.classList.toggle('fadeout');
    }

  setTimeout(myChange, 5000);
  
  }

  myChange();

// SP用スライドショー

const myImageSp = [
  'image/top_img_1-sp.png',
  'image/top_img_2-sp.png',
  'image/top_img_3-sp.png',
  'image/top_img_4-sp.png',
];

const firstShowSp =document.getElementById('first-show-sp');
const secondShowSp =document.getElementById('second-show-sp');

let myNowCntSp = 0;
let myflgSp = 0;

  function myChangeSp(){
    if(myNowCntSp >= myImageSp.length-1) {
      myNowCntSp = 0;
    } else {
      myNowCntSp +=1;
    }

    if(myflgSp === 1) {
      myflgSp = 0;
    }else {
      myflgSp += 1;
    }

    if(myflgSp == 0){
      firstShowSp.src = myImageSp[myNowCntSp];
      secondShowSp.classList.toggle('fadeout');
      secondShowSp.classList.toggle('fadein');
      firstShowSp.classList.toggle('fadein');
      firstShowSp.classList.toggle('fadeout');
    }else {
      secondShowSp.src = myImageSp[myNowCntSp];
      firstShowSp.classList.toggle('fadeout');
      firstShowSp.classList.toggle('fadein');
      secondShowSp.classList.toggle('fadein');
      secondShowSp.classList.toggle('fadeout');
    }
  setTimeout(myChangeSp, 5000);
  }
  myChangeSp();

}
