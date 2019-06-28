

'use strict';{


const top = document.getElementById('top')    
const jsHero = document.getElementById('jsHero');    
const hero1 = document.getElementById('hero1');    
const hero2 = document.getElementById('hero2');    
const hero3 = document.getElementById('hero3');    
const hero4 = document.getElementById('hero4');    




// let listArray = document.querySelectorAll('.js-hero');
// for (i=0; i < listArray.length; i++){
//     listArray[i].mouseover = function () {
//         jsHero.write(this.innerHTML);
//     }
// }

// if (hero1.onclick){
//     $(top).css({
//         backgroundImage: url("../img/947615aaaedb4e68c60f90ed61c88508.jpg")
//     });
// }else if (hero2.onclick){
//     $(top).css({
//         backgroundImage: url("../img/8631adc8f3759e93e770a48711f17fad.jpg")
//     });
// }else if (hero3.onclick){
//     $(top).css({
//         backgroundImage: url("../img/78e874cf67b0700b9c4b4ffae2762611.jpg")
//     });
// }else if (hero4.onclick){
//     $(top).css({
//         backgroundImage: url("../img/68625764c886af7e0c5dc7f0d559ae9f.jpg")
//     });
// }


// var target = $this.attr('data-target');
// $(function mouseover(){

    
    
//     if(target === 'type1'){$(hero1).show(); $(hero2,hero3,hero4).hide();}
//     else if(target === 'type2'){$(hero2).show(); $(hero1,hero3,hero4).hide();} 
//     else if(target === 'type3'){$(hero3).show(); $(hero1,hero2,hero4).hide();}
//     else if(target === 'type4'){$(hero4).show(); $(hero1,hero2,hero3).hide();}
//     else {
//         return false;
//     }
// })();



var getNewImage1 = function(){
//    if ($(jsHero).hasClass('active2'||'active3'||'active4')){
//        $(jsHero).removeClass('active2'&&'active3'&&'active4').addClass('active1');
//    } else {

    $(jsHero).removeClass('active2　active3　active4').addClass('active1').hide().fadeIn({
        duration: 3000,
        queue: false
    }); 
    
//    }
   
}

var getNewImage2 = function(){
    // if ($(jsHero).hasClass('active1'||'active3'||'active4')){
    //     $(jsHero).removeClass('active1'&&'active3'&&'active4').addClass('active2');
    // } else {
     $(jsHero).removeClass('active1　active3　active4').addClass('active2').hide().stop().fadeIn(300);        
    // }
 }

var getNewImage3 = function(){
    // if ($(jsHero).hasClass('active1'||'active2'||'active4')){
    //     $(jsHero).removeClass('active1'&&'active2'&&'active4').addClass('active3');
    // } else {
     $(jsHero).removeClass('active1　active2　active4').addClass('active3').hide().stop().fadeIn(300);        
    // }
 }

var getNewImage4 = function(){
    // if ($(jsHero).hasClass('active1'||'active2'||'active3')){
    //     $(jsHero).removeClass('active1'&&'active2'&&'active3').addClass('active4');
    // } else {
     $(jsHero).removeClass('active1　active2　active3').addClass('active4').hide().stop().fadeIn(300);        
    // }
 }





var getOldImage1 = function(){
    if ($(jsHero).hasClass('active2'|| 'active3'|| 'active4')){
        $(jsHero).removeClass('active1').fadeOut(500);
    } else {
        $(jsHero).hasClass('active1');
    }
}
var getOldImage2 = function(){
    if ($(jsHero).hasClass('active1'||'active3'|| 'active4')){
        $(jsHero).removeClass('active2').stop().fadeOut(500);
    } else {
        $(jsHero).hasClass('active2');
    }
}
var getOldImage3 = function(){
    if ($(jsHero).hasClass('active1'||'active2'|| 'active4')){
        $(jsHero).removeClass('active3').stop().fadeOut(500);
    } else {
        $(jsHero).hasClass('active3');
    }
}
var getOldImage4 = function(){
    if ($(jsHero).hasClass('active1'||'active2'|| 'active3')){
        $(jsHero).removeClass('active4').stop().fadeOut(500);
    } else {
        $(jsHero).hasClass('active4');
    }
}



//  SWIPER　失敗コード


// var swiper = new Swiper('.swiper-container', {
//     navigation: {
//         prevEl: '.swiper-button-prev',
//         nextEl: '.swiper-button-next',
//     },
//     loop: true,
//     centeredSlides : true,
//     slidesPerView: 3,
//     loopedSlides: 3,
//     slidesePerGroup: 3,
//     autoplay: {
//         delay: 3000,
//         disableOnInteraction: true
//       },
      
//     });   
    
const goTop = document.getElementById('goTop');

$(function(){
    $(goTop).click(function(){
        $('html, body').animate({scrollTop:0}, 1000, 'swing').css({'transition-delay':'3s'});
         
        return false;
    });
});

$(function(){
    $('.portfolio__slides').slick({
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    });
    
    // $('.slick-prev').html('<a href="#" class="blog-chevron"><i class="fas fa-chevron-left"></i></a>');
    // $('.slick-next').html('<a href="#" class="blog-chevron"><i class="fas fa-chevron-right"></i></a>');
});

    

}
