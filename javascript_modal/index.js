// 버튼0 (products)을 누르면...AbortController
// 0. 버튼0 버튼1 버튼2에 붙은 주황색 제거
// 0. 내용0 내용1 내용2를 안보이게
// 1. 버튼0이 주황색으로 하이라이트 되어야함
// 2. 내용0이 보여야함
$('.tab-button').eq(0).click(function(){
  $('.tab-button').removeClass('active');
  $('.tab-content').removeClass('show');
  
  $('.tab-button').eq(0).addClass('active');
  $('.tab-content').eq(0).addClass('show');
});