jQuery(function(){

  //header
  
  $('.gnb>li').on({
		mouseenter:	function(){
			$('.navsub_bg').show();
      $('.sub').show();

      $('.gnb>li').removeClass('addGnb'); //마우스 오버
			$(this).addClass('addGnb'); //마우스 오버
		}
	});

  $('.nav').on({
		mouseleave:	function(){
      $('.navsub_bg').hide();
      $('.sub').hide();

			$('.gnb>li').removeClass('addGnb'); //마우스 오버
		}
	});
 
  $('.tabBtn').on('click',function(){
    $('.tabBtn').removeClass('on');
    $(this).addClass('on');

    var myNum = $(this).parent().index();
    $('.detailVew>ul>li').eq(myNum).css('display','block');
    $('.detailVew>ul>li').eq(myNum).siblings().css('display','none');
  });

	



});