$(function(){

    //체육복 tab 
    $('.tab .tab_btn li').click(function(){
        var onTab = $(this).attr('data-tab');

        $('.tab_btn li, .item_wrap ul li').removeClass('on');

        $(this).addClass('on');
        $('#' + onTab).addClass('on');

        $('#s_item .item-box .item_desc').removeClass('active');
        $('#s_item .item-box .item_desc').eq(0).addClass('active');
    })

    //동복 item_thumbnail 썸네일용 슬라이더 생성 
    var item_thumbnail = new Swiper(".item_thumbnail", {
        slidesPerView: 4,
        freeMode: true,                                   
    })  
    //동복 item-main-Swiper 실행 
    var mainSwiper = new Swiper('.item-main-swiper', {
        effect: 'fade',
        loop:true,                  
        navigation: {
            nextEl: '.swiper-gallery-next',
            prevEl: '.swiper-gallery-prev'
        },
        thumbs: {
            swiper: item_thumbnail //메인 슬라이더와 썸네일 연동
          },
        on: {
            activeIndexChange: function () {
            
            var wactiveTab = this.realIndex;
        
            $('#w_item .item-box .item_desc').removeClass('active');
            $('#w_item .item-box .item_desc:eq('+ wactiveTab +')').addClass('active');

        }} 
    })

    //하복 item_thumbnail-2 썸네일용 슬라이더 생성 
    var item_thumbnail = new Swiper(".item_thumbnail-2", {
        slidesPerView: 4,
        freeMode: true,                                      
    })  
    //하복 item-main-Swiper-2 실행 
    var mainSwiper = new Swiper('.item-main-swiper-2', {
        effect: 'fade',     
        loop:true,  
        initialSlide: 0,     
        navigation: {
            nextEl: '.swiper-gallery-next',
            prevEl: '.swiper-gallery-prev'
        },
        thumbs: {
            swiper: item_thumbnail //메인 슬라이더와 썸네일 연동
          },
        on: {
            activeIndexChange: function () {
            
            var sactiveTab = this.realIndex;

            console.log(sactiveTab);
        
            $('#s_item .item-box .item_desc').removeClass('active');
            $('#s_item .item-box .item_desc:eq('+ sactiveTab +')').addClass('active');

        }} 
    })

    //썸네일 클릭 시 해당 data-tab을 가진 .item_decs 가 보임.
    $('.swiper-wrapper .swiper-slide').click(function(){
        var thumbTab = $(this).attr('data-tab');
        
        $('.item_desc').removeClass('active');

        $(this).addClass('active');
        $("#" + thumbTab).addClass('active');
    });

    
})