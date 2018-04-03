/*global $, console, jQuery, alert, console*/
// check video slide
var right = $('.my-arrow .right_1'),
    left  = $('.my-arrow .left_1'),
    right_2  = $('.my-arrow_2 .right_2'),
    left_2  = $('.my-arrow_2 .left_2'),
    right_3  = $('.my-arrow_3 .fa-angle-right'),
    left_3  = $('.my-arrow_3 .fa-angle-left');


function checkVideo(){

if ($('.slide:first').hasClass('active')){
    left.fadeOut(500);
}
else {
    left.fadeIn(500);
}

if ($('.slide:last').hasClass('active')){
    right.fadeOut(500);
}
else {
    right.fadeIn(500);
}
}

checkVideo();

function checkVideo_2(){

  if ($('.slide_2:first').hasClass('active')){
      left_2.fadeOut(500);
  }
  else {
      left_2.fadeIn(500);
  }
  
  if ($('.slide_2:last').hasClass('active')){
      right_2.fadeOut(500);
  }
  else {
      right_2.fadeIn(500);
  }
  }
  
  checkVideo_2();


  function checkVideo_3(){

    if ($('.slide_3:first').hasClass('active')){
        left_3.fadeOut(500);
    }
    else {
        left_3.fadeIn(500);
    }
    
    if ($('.slide_3:last').hasClass('active')){
        right_3.fadeOut(500);
    }
    else {
        right_3.fadeIn(500);
    }
    }
    
    checkVideo_3();


var arrow = $(".my-arrow i"),
    arrow_2 = $(".my-arrow_2 i"),
    arrow_3 = $(".my-arrow_3 i");
$(document).ready(function(){
  "use strict"; // For Js Line Errors

  // Change Icon Accordion On Click
  $('.collapse').on('shown.bs.collapse', function(){
    $(this).parent().find(".fa-plus").removeClass("fa-plus").addClass("fa-minus");
  }).on('hidden.bs.collapse', function(){
    $(this).parent().find(".fa-minus").removeClass("fa-minus").addClass("fa-plus");
  });

//Accordion
// Show Info On Click
$('.all-content .right-content .info-data h6').click(function(){

      $(this).next().slideToggle(500);
      if ($('.all-content .right-content .info-data h6 span').hasClass('fa-plus'))
      {

          $('.all-content .right-content .info-data h6 span').removeClass("fa-plus").addClass("fa-minus");
      }
      else
      {
          $('.all-content .right-content .info-data h6 span').removeClass("fa-minus").addClass("fa-plus");
      }
});

// سلايد داون للأقسام

$('.section-content:first').css('display','block');
$('.section-box').click(function(){

    $(this).next().slideToggle(500);
   $('.section-content').not($(this).next()).slideUp(500);
});

  $(".js-modal-btn").modalVideo();

  //tebs here
  $('.nav-tabs li').click(function () {
    var myID = $(this).attr('id');
    if (myID == 'tab5'){
    $(this).addClass('active');
    }
    else{
     $(this).addClass('active').siblings().removeClass('active');
     $('.tabs > div').hide();
     
     $('#' +myID +'-content').fadeIn(500);

    }
  });


$('.modal .modal-content .modal-body .mytabs li').click(function () {

    $('.modal .modal-content .modal-body .mytabs-content  > p').hide(500);
    $('.' + $(this).data('class')).show(500);

     $(this).addClass('active').siblings().removeClass('active');
});

  $('.material-content .tabs .nav-tabs>li>a').click(function(e){
    e.preventDefault();

  });

  // this code for display post quetion part

  $('.ask').click(function (){

    $('.part1').fadeOut(500,function(){
      
      $('.all-questions .post-question').fadeIn(500);

   });
  });
  $('.cancel , .back').click(function(e){

     e.preventDefault();
      
    $('.all-questions .post-question , .part3').fadeOut(500,function(){  
    $('.part1').fadeIn(500);
  });
    
  });

    $('.post').click(function(e){

        e.preventDefault();

    $('.part2').fadeOut(500,function(){  
    $('.part3').fadeIn(500);    
    });  
});
  

// rating 
$(".rateYo").rateYo({
  rating: 5,
  starWidth: "30px",
  halfStar: true,
  rtl: true,
  readOnly:true

});

  $(".rateYo_putRate").rateYo({
  rating: 0,
  starWidth: "30px",
  halfStar: true,
  normalFill: "#A0A0A0",
  rtl: true

});

  $("#rateYo_header").rateYo({
  rating: 4.5,
  starWidth: "15px",
  halfStar: true,
  rtl: true,
  ratedFill: "#f5f51a",
  normalFill: "#ddd",
  readOnly: true
});



$('.tabs-icon').click(function () {

      $('.tabs .nav-tabs').slideToggle(500);

});


/* _____________ page 3 __________________*/ 

$('.mwady .tab-content .tab1 .all-media').niceScroll();
    
$('.it-mine .tabs .nav-tabs li').click(function (e) {
      e.preventDefault();

    $('.mwady .tab-content > div').hide();
    $('.' + $(this).data('class')).show();

    $(this).addClass('active').siblings().removeClass('active');


});


  $(".rateYo_putuYourRate").rateYo({
  rating: 0,
  starWidth: "20px",
  halfStar: true,
  normalFill: "#A0A0A0",
  rtl: true

});

/* fixed menu*/

 var mymenu = $('.over');

 $('header .navbar-toggle').on('click' , function(){
        mymenu.toggleClass('isVisible');
        if (mymenu.hasClass('isVisible')){
          
          mymenu.animate({       
              right: 0      
          }, 500);
  
        }else {    
          mymenu.animate({
            right: '-767px'
        }, 500);
  }
});

 $('.over').on('click' , function(){
        if (mymenu.hasClass('isVisible')){
          mymenu.animate({       
              right: '-767px'      
          }, 500);
          mymenu.toggleClass('isVisible');

        }   
});

$('.over .fixed-menu').on('click' , function(e){
  e.stopPropagation();
 
});






arrow.on('click' , function(){

  if ($(this).hasClass('fa-angle-right')){

    $('.tab2 .active').fadeOut(500,function () {
        $(this).removeClass('active').next('.slide').addClass('active').removeClass('hidden-xs').fadeIn();
          checkVideo();
        }); 

  }else{

    $('.tab2 .active').fadeOut(500,function () {

        $(this).removeClass('active').prev('.slide').addClass('active').removeClass('hidden-xs').fadeIn();
        checkVideo();    
      });
  
  }

  
});

arrow_2.on('click' , function(){

  if ($(this).hasClass('fa-angle-right')){

    $('.tab3 .active').fadeOut(500,function () {
        $(this).removeClass('active').next('.slide_2').addClass('active').removeClass('hidden-xs').fadeIn();
          checkVideo_2();
        }); 

  }else{

    $('.tab3 .active').fadeOut(500,function () {

        $(this).removeClass('active').prev('.slide_2').addClass('active').removeClass('hidden-xs').fadeIn();
        checkVideo_2();    
      });
  
  }

  
});
arrow_3.on('click' , function(){

  if ($(this).hasClass('fa-angle-right')){

    $('.tab4 .active').fadeOut(500,function () {
        $(this).removeClass('active').next('.slide_3').addClass('active').removeClass('hidden-xs').fadeIn();
          checkVideo_3();
        }); 

  }else{

    $('.tab4 .active').fadeOut(500,function () {

        $(this).removeClass('active').prev('.slide_3').addClass('active').removeClass('hidden-xs').fadeIn();
        checkVideo_3();    
      });
  
  }

  
});


});



$(document).on("pagecreate",".pageone",function(){

  $('.over').on("swiperight",function(){


      $('.over').animate({       
          right: '-767px'      
      }, 500);
      $('.over').toggleClass('isVisible');

  });   

  $('.tab2').on("swipeleft",function(e){

    if ($('.slide:last')){

      e.stopPropagation();

    }else{

    $('.tab2 .active').fadeOut(500,function () {
      $(this).removeClass('active').next('.slide').addClass('active').removeClass('hidden-xs').fadeIn();
      checkVideo();

  }); 
}

}); 

$('.tab2').on("swiperight",function(e){

  if ($('.slide').is(':first')){

    e.stopPropagation();

    }else{

      $('.tab2 .active').fadeOut(500,function () {

        $(this).removeClass('active').prev('.slide').addClass('active').removeClass('hidden-xs').fadeIn();
        checkVideo();
      
      });

    }

});

$('.tab3').on("swipeleft",function(){

  $('.tab3 .active').fadeOut(500,function () {
    $(this).removeClass('active').next('.slide_2').addClass('active').removeClass('hidden-xs').fadeIn();
    checkVideo_2();

    }); 

}); 

$('.tab3').on("swiperight",function(){

$('.tab3 .active').fadeOut(500,function () {

$(this).removeClass('active').prev('.slide_2').addClass('active').removeClass('hidden-xs').fadeIn();
checkVideo_2();

});
});

$('.tab4').on("swipeleft",function(){

  $('.tab4 .active').fadeOut(500,function () {
    $(this).removeClass('active').next('.slide_3').addClass('active').removeClass('hidden-xs').fadeIn();
    checkVideo_3();

    }); 

}); 

$('.tab4').on("swiperight",function(){

$('.tab4 .active').fadeOut(500,function () {

$(this).removeClass('active').prev('.slide_3').addClass('active').removeClass('hidden-xs').fadeIn();
checkVideo_3();

});
});

             
});