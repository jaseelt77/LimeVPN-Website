$(document).ready(function() {
  $(".discover_wrap__item").mouseenter(function() {
      $(this).children(".discover_more").stop().fadeIn()
  }).mouseleave(function() {
      $(this).children(".discover_more").stop().fadeOut()
  })
});

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

  $('.navbar_open').on('click', function () {
    $(this).hide();
    
    $('.navbar_close').show();
  });

  $('.navbar_close').on('click', function () {
    $(this).hide();
    $('.navbar_open').show();
  });

//accordian 1


  $(".collapse").each(function(){
    $(this).siblings(".panel-heading").find(".fa").addClass("rotate");
  });
  $(".collapse").on('show.bs.collapse', function(){
    $(this).parent().find(".fa").addClass("rotate");
  }).on('hide.bs.collapse', function(){
    $(this).parent().find(".fa").removeClass("rotate");
  });
  $(".collapse.in").each(function(){
    $(this).siblings(".panel-heading").find(".fa").addClass("rotated");
  });
  
  $(".collapse").on('show.bs.collapse', function(){
    $(this).parent().find(".fa").addClass("rotated");
  }).on('hide.bs.collapse', function(){
    $(this).parent().find(".fa").removeClass("rotated");
  });

  //accordian 3
   
  $('.i-accordion').on('show.bs.collapse', function(n){
    $(n.target).siblings('.panel-heading').find('.panel-title i').toggleClass('fa-chevron-down ');
  });
  $('.i-accordion').on('hide.bs.collapse', function(n){
    $(n.target).siblings('.panel-heading').find('.panel-title i').toggleClass('fa-chevron-up fa-chevron-down');
    
  });
  
 // border active
  $('.step_box1').on('click', function(){
    $('.step_box1').removeClass('active');
    $('.plans').find('.alerts').hide();
    $(this).addClass('active');
    $(this).parent('.plans').find('.alerts').show();
 })



 $('.step_box1').click(function(event) {
  event.preventDefault();
  var clicks = $(this).data('clicks');
  if (clicks) {
     $('#create__account').scrollView();
  } 
  else {}
  $(this).data("clicks", !clicks);
    });
$.fn.scrollView = function () {
  return this.each(function () {
      $('html, body').animate({
        scrollTop: $(this).offset().top
      }, 500);
    });
  }
   








  



  
 






 
