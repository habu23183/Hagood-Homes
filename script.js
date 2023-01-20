 new Swiper("#swiper-2", {
     slidesPerView: 2,
     spaceBetween: 40,
     loop: true,
     centeredSlides: true,
     lazyLoading: true,
     navigation: {
         nextEl: "#right-nav",
         prevEl: "#left-nav"
     },
     breakpoints: {
         0: {
             slidesPerView: 1,
         },
         768: {
             slidesPerView: 2,
         },
         1024: {
             slidesPerView: 2,
         },
     },
 });
 new Swiper("#swiper-3", {
     slidesPerView: 1,

     loop: true,
     centeredSlides: true,

     pagination: {
         el: "#swiper-3 .swiper-pagination",
     }

 });