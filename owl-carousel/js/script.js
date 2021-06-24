$(document).ready(($)=>{
    $('.element-1').owlCarousel({
        nav: true,
        items: 3,
        loop: true,
        margin: 23,
        lazyLoad: true,
        responsiveClass: true,
        responsive: {
            0:{
              items: 1
            },
            710:{
              items: 2
            },
            840:{
              items: 3
            }
        }
    });

    $('.element-2').owlCarousel({
        nav: true,
        items: 2,
        loop: true,
        margin: 40,
        // lazyLoad: true,
        // responsiveClass: true,
        // responsive: {
        //     0:{
        //       items: 1
        //     },
        //     710:{
        //       items: 2
        //     },
        //     840:{
        //       items: 3
        //     }
        // }
    });
});
