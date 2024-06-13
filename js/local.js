$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});

$("#toTop").click(function () {
   //1 second of animation time
   //html works for FFX but not Chrome
   //body works for Chrome but not FFX
   //This strange selector seems to work universally
   $("html, body").animate({scrollTop: 0}, 1000);
});

$(document).ready(function(){
    /**owl-slider-settings**/
      $('.slider').owlCarousel({
          loop:true,
          margin:0,
          nav:true,
          center: false,
          autoplay:true,
              autoplayTimeout:5000,
              navText : ["<img src='images/arrow-left.png' />","<img src='images/arrow-right.png' />"],
              dots:false,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              1000:{
                  items:1
              }
          }
      });
      $('.latestSlider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        center: false,
        autoplay:true,
            autoplayTimeout:5000,
            navText : ["<img src='images/arrow-left.png' />","<img src='images/arrow-right.png' />"],
            dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('.testimonialSlider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        center: false,
        autoplay:true,
            autoplayTimeout:5000,
            navText : ["<img src='images/arrow-left.png' />","<img src='images/arrow-right.png' />"],
            dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
      $('.fiveSlider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        center: true,
        autoplay:true,
            autoplayTimeout:5000,
            navText : ["<img src='images/arrow-left.png' />","<img src='images/arrow-right.png' />"],
            dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    $('.brandSlider').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        center: false,
        autoplay:true,
            autoplayTimeout:5000,
            navText : ["<img src='images/arrow-left.png' />","<img src='images/arrow-right.png' />"],
            dots:false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
      $('.threeSlider').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        center: false,
        autoplay:true,
            autoplayTimeout:5000,
            navText : ["<img src='images/arrow-left.png' />","<img src='images/arrow-right.png' />"],
            dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    /**Announcement-slider-settings**/
      $('.announcementSlider').owlCarousel({
          loop:true,
          margin:10,
          nav:true,
          autoplay:true,
              autoplayTimeout:5000,
              navText : ["<img src='images/arrow-left.png' />","<img src='images/arrow-right.png' />"],
              dots:false,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              1000:{
                  items:2
              }
          }
      });
      
    });

//dropmenu-toggle for mobile
// if(window.innerWidth < 991){
//   $( ".menuToggleIco" ).click(function() {
//     $( this ).siblings('.dropMenu').toggleClass("active");
//   });
// }


// $(".mainNavList li .menuToggleIco").on('click', '.menuToggleIco', function () {
//     $(".mainNavList li ul.active").removeClass("active");
//     // adding classname 'active' to current click li 
//     $('.mainNavList li ul').addClass("active");
// });
$( ".navbar-toggler, .cross-toggler" ).click(function() {
    $("#navbarSupportedContent").toggleClass("active");
    $(".overLay").toggleClass("active");
  });
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $(".mainHeader").addClass("fixedHeader");
    }else{
    	$(".mainHeader").removeClass("fixedHeader");
    }
});

const facultySwiper = new Swiper(".facultySwiper", {
    grabCursor:true,centeredSlides:true,loop:true,slidesPerView:1.5,speed:1000,autoplay: {delay:3000,disableOnInteraction:false},
    effect:"coverflow",coverflowEffect:{rotate:4,stretch:0,depth:50,modifier:5,slideShadows:true},
    navigation: {nextEl:".facultynaviNext",prevEl:".facultynaviPrev"},
    keyboard: {enabled:true},
    breakpoints: {
        640: {slidesPerView:2.5},
        768: {slidesPerView:2.515},
        1024: {slidesPerView:3.54},
        1280: {slidesPerView:3.59},
        1536: {slidesPerView:3.635}
    },
});

/*  Counters  */
$(window).scroll(function() {
    $('.countNo').each(function() {
        oTop = $(this).offset().top - window.innerHeight;
        if ($(window).scrollTop() > oTop) {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({countNum: $this.text()}).animate({countNum: countTo},
                {duration:2000,easing:'swing',
                step: function() {$this.text(Math.floor(this.countNum));},
                complete: function() {$this.text(this.countNum);}
            });
        }
    });
});

const colgSwiper_1 = new Swiper('.colgSwiper_1', {
    speed:1500,loop:true,slidesPerView:1,autoplay:{delay:3000,disableOnInteraction:false},
});
const colgSwiper_2 = new Swiper('.colgSwiper_2', {
    speed:1500,loop:true,slidesPerView:1,autoplay:{delay:4000,disableOnInteraction:false},direction: "vertical",
});
const colgSwiper_3 = new Swiper('.colgSwiper_3', {
    speed:1500,loop:true,slidesPerView:1,autoplay:{delay:5000,disableOnInteraction:false},
});
const colgSwiper_4 = new Swiper('.colgSwiper_4', {
    speed:1500,loop:true,slidesPerView:1,autoplay:{delay:6000,disableOnInteraction:false,reverseDirection:true},direction: "vertical",
});

//dropmenu-toggle for mobile
if(window.innerWidth < 991){
    $( ".menuToggleIco" ).click(function() {
      $( this ).siblings('.dropMenu').toggleClass("active");
      $( this ).toggleClass("active");
    });
  }