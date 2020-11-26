// 参照：https://www.webopixel.net/javascript/421.html
$(function () {
  if (navigator.userAgent.indexOf('Win') != -1) {
    // スクロールスピード
    var speed = 50;

    // マウスホイールで横移動
    $('html').mousewheel(function (event, mov) {
      // IE FireFox用
      $(this).scrollLeft($(this).scrollLeft() - mov * speed);
      // WebKit用
      $('body').scrollLeft($('body').scrollLeft() - mov * speed);
      return false;   // 縦スクロール不可
    });
  }
});

jQuery(function($){
  
  var winH = $(window).height();
  $('.box').outerHeight($(window).height());    
  $(window).on('resize',function(){
    winH = $(window).height();
    $('.box').outerHeight(winH);
  });
  
}); 