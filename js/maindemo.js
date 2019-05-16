$(document).ready(function(){
    $(".autoplay").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: !1,
        autoplaySpeed: 2e3,
        nextArrow: '<button class="btn-next"><img src="images/right_arrow_test.png"></button>',
        prevArrow: '<button class="btn-previous"><img src="images/left_arrow_test.png"></button>',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]
    })
  // second slider
    $(".your-class").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: !1,
      autoplaySpeed: 2e3,
     
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 1
          }
      }]
  })
  });
  
  
  
  $( document ).ready(function() {
    $('.navbar_open').on('click', function () {
      $(this).hide();
      
      $('.navbar_close').show();
    });
  
    $('.navbar_close').on('click', function () {
      $(this).hide();
      $('.navbar_open').show();
    });
  });
  
  
  //accordian 1
    $(document).ready(function(){
      // Add minus icon for collapse element which is open by default
      $(".collapse.in").each(function(){
        $(this).siblings(".panel-heading").find(".fa").addClass("rotated");
      });
      
      // Toggle plus minus icon on show hide of collapse element
      $(".collapse").on('show.bs.collapse', function(){
        $(this).parent().find(".fa").addClass("rotated");
      }).on('hide.bs.collapse', function(){
        $(this).parent().find(".fa").removeClass("rotated");
      });
  });
  
  //accordian 2
  $(document).ready(function(){
    // Add minus icon for collapse element which is open by default
    $(".collapse").each(function(){
      $(this).siblings(".panel-heading").find(".fa").addClass("rotate");
    });
    
    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function(){
      $(this).parent().find(".fa").addClass("rotate");
    }).on('hide.bs.collapse', function(){
      $(this).parent().find(".fa").removeClass("rotate");
    });
  });
  
  
  
  
  // $(document).ready(function(){
    $('.step_box1').on('click', function(){
       $('.step_box1').removeClass('active');
       $(this).addClass('active');
    })
  
  
  
    
   
  
  
  
  
    $(function () {
      // Smooth Scroll
      // $('a[href*=#]').bind('click', function(e){
      //   var anchor = $(this);
      //   $('html, body').stop().animate({
      //     scrollTop: $(anchor.attr('href')).offset().top
      //   }, 1000);
      //   e.preventDefault();
      // });
    });
    
    $('.i-accordion').on('show.bs.collapse', function(n){
      $(n.target).siblings('.panel-heading').find('.panel-title i').toggleClass('fa-chevron-down ');
    });
    $('.i-accordion').on('hide.bs.collapse', function(n){
      $(n.target).siblings('.panel-heading').find('.panel-title i').toggleClass('fa-chevron-up fa-chevron-down');
      
    });
  
   
  
    jQuery(document).ready(function() {
      jQuery(".discover_wrap__item").mouseenter(function() {
        jQuery(this).children(".discover_more").stop(true, true).fadeIn()
      }).mouseleave(function() {
        jQuery(this).children(".discover_more").stop(true, true).fadeOut()
      })
      
    });
  
   
  //    jQuery(document).ready(function() {
  //     var children = $('.discover_wrap__item').children('.discover_more');
  //     children.hide();
  
  //     $(".discover_wrap__item  .discover_more").hover(function() {
  //         children.stop().show("slide", {}, 'slow');
  //     }, function() {
  //         children.stop().hide("slide", {}, 'slow');
  //     });
  // });
  