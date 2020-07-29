// $(document).ready(function () {
//     $('.carusel__inner').slick({
//         dots: false,
//         infinite: true,
//         speed: 1500,
//         slidesToShow: 1,
//         adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="../icons/arrows/chevron-left.svg"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="../icons/arrows/chevron-right.svg"></button>',
//         // responsive: [
//         //     {
//         //         breakpoint: 992,
//         //         settings: {
//         //             dots: true,
//         //             arrows: false
//         //         }
//         //     },
//         // ],
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     infinite: true,
//                     arrows: false,
//                     // dots: true
//                 }
//             },
//         ]

//     });
// });


const slider = tns({
    container: '.carusel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    responsive: {
        640: {
            edgePadding: 20,
            gutter: 20,
            items: 1
        },
        700: {
            gutter: 30
        },
        900: {
            items: 1
        }
    }
});


document.querySelector('.prev').addEventListener('click', () => {
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', () => {
    slider.goTo('next');
});



