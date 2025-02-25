jQuery(document).ready(function( $ ){
    var swiper = new Swiper('.product-carousel', {
        spaceBetween: 30,
        slidesPerView: 2,
        autoplay:true,
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 50,
            },
        },


        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.webmediavietnam-thumbail-ctegory-product-carousel-next',
            prevEl: '.webmediavietnam-thumbail-ctegory-product-carousel-prev',
        },

    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs
        }
    });
    var swiper = new Swiper('.slide-post-thumbail', {
        slidesPerView: 4,
        spaceBetween: 20,
        autoplay:true,
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    var swiper = new Swiper(".danhsachgiaovien", {
        slidesPerView: 4,
        spaceBetween: 30,
        // autoplay:true,
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
        // },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return `<span class="dot swiper-pagination-bullet">${index}</span>`;
            },
        },
    });

    var swiper = new Swiper(".danhsachtintuc", {
        slidesPerView: 4,
        spaceBetween: 30,
        autoplay:true,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var swiper = new Swiper(".chuyennganhdaotao", {
        slidesPerView: 5,
        spaceBetween: 30,
        autoplay:true,
        breakpoints: {
            320: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            480: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

});

jQuery(document).ready(function( $ ){
    $('.dmsp1').click(function(){
        $(this).next().slideToggle('slow');
        $(this).toggleClass('active');
    });
    $(".more_des").click(function(){
        $(".category_description .current").removeClass('current');
        $(this).addClass('more_intro');
        $(".category_description .more_des").removeClass('more_des');
        $(this).addClass('hide_more');
        $(".category_description .hidden_des").addClass('showButoon_intro');
        // $(".category_description .hidden_des").removeClass('hidden_des');
    });

    $(".hidden_des").click(function(){
        $(".category_description .hidden_des").removeClass('showButoon_intro');
        $(".category_description .more_intro").removeClass('hide_more');
        $(".category_description .description").addClass('current');
    });
    $(".elementor-top-column").addClass( "animated fadeIn" );
});


(function($) {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        //>=, not <=
        if (scroll >= 200) {
            $(".sticky-header").addClass("custom_headers");
            $(".all").removeClass("custom_logo");
            $(".all").addClass("logo_scroll");
            $(".main .elementor-widget-container").addClass("menu_scroll");
            $("section").addClass("fadeIn");
        }
        else {
            $(".sticky-header").removeClass("custom_headers");
            $(".all").addClass("custom_logo");
            $(".all").removeClass("logo_scroll");
            $(".main .elementor-widget-container").removeClass("menu_scroll");
            $("section").addClass("fadeIn");
        }
    });
})(jQuery);

jQuery(document).ready(function($){
    $('.xthb input[type=text]:first').addClass('xthb12');
});