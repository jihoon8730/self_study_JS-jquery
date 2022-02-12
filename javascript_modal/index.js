
// 반복문 for문
let lala = $('.tab-button');
for (let i = 0; i < lala.length; i++) {
  $('.tab-button').eq(i).click(function(){
    $('.tab-button').removeClass('active');
    $('.tab-content').removeClass('show');
    
    $('.tab-button').eq(i).addClass('active');
    $('.tab-content').eq(i).addClass('show');
  });
};


// 버튼0 (products)을 누르면...AbortController
// 0. 버튼0 버튼1 버튼2에 붙은 주황색 제거
// 0. 내용0 내용1 내용2를 안보이게
// 1. 버튼0이 주황색으로 하이라이트 되어야함
// 2. 내용0이 보여야함

// $('.tab-button').eq(0).click(function(){
//   $('.tab-button').removeClass('active');
//   $('.tab-content').removeClass('show');
  
//   $('.tab-button').eq(0).addClass('active');
//   $('.tab-content').eq(0).addClass('show');
// });

// 버튼1 (products)을 누르면...
// 0. 버튼0 버튼1 버튼2에 붙은 주황색 제거
// 0. 내용0 내용1 내용2를 안보이게
// 1. 버튼1이 주황색으로 하이라이트 되어야함
// 2. 내용1이 보여야함

// $('.tab-button').eq(1).click(function(){
//   $('.tab-button').removeClass('active');
//   $('.tab-content').removeClass('show');
//   $('.tab-button').eq(1).addClass('active');
//   $('.tab-content').eq(1).addClass('show');
// });

// 버튼2 (products)을 누르면...
// 0. 버튼0 버튼1 버튼2에 붙은 주황색 제거
// 0. 내용0 내용1 내용2를 안보이게
// 1. 버튼2이 주황색으로 하이라이트 되어야함
// 2. 내용2이 보여야함

// $('.tab-button').eq(2).click(function(){
//   $('.tab-button').removeClass('active');
//   $('.tab-content').removeClass('show');
//   $('.tab-button').eq(2).addClass('active');
//   $('.tab-content').eq(2).addClass('show');
// });

// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }