// Proverka na podderjky webp
function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});
// Proverka na podderjky webp

$(window).on("load", function () {

    "use strict";

    /* ===================================
            Loading Timeout
     ====================================== */

    setTimeout(function(){
        $('.preloader').fadeOut();

        $('.cd-transition-layer').addClass('closing').delay(1000).queue(function(){
            $(this).removeClass("visible closing opening").dequeue();
        });

    }, 1000);

});

jQuery(function ($) {


    "use strict";


    /* ===================================
         Scroll
    ====================================== */


    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 220) { // Set position from top to add class
            $('header').addClass('header-appear');
        }
        else {
            $('header').removeClass('header-appear');
        }
    });

    //scroll to appear
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 500)
            $('.scroll-top-arrow').fadeIn('slow');
        else
            $('.scroll-top-arrow').fadeOut('slow');
    });

    //Click event to scroll to top
    $(document).on('click', '.scroll-top-arrow', function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    $(".scroll").on("click", function (event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top - 60}, 1200);
    });


    $('.count').each(function () {
        $(this).appear(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 3000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });

    /* ===================================
      Rotating Text
      ====================================== */

    if ($(".js-rotating").length) {
        $(".js-rotating").Morphext({
            // The [in] animation type. Refer to Animate.css for a list of available animations.
            animation: "flipInX",
            // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
            separator: ",",
            // The delay between the changing of each phrase in milliseconds.
            speed: 3000,
            complete: function () {
                // Called after the entrance animation is executed.
            }
        });
    }


    /* ===================================
      Side Menu
     ====================================== */

    $("#full-menu-1").on("click", function () {
        $(this).toggleClass("active");
        $(".nav-holder").toggleClass("active");
        $("body").toggleClass("overflow-hidden");
    }), $(".nav-holder.main,.fullnav-close").on("click", function () {
        $("#full-menu-1.active").removeClass("active");
        $(".nav-holder").removeClass("active");
        $("body").removeClass("overflow-hidden");
    }),$(".nav-holder.alt").on("click", function (e) {
        if(!$(e.target).hasClass('link')){
            $("#full-menu-1.active").removeClass("active");
            $(".nav-holder").removeClass("active");
            $("body").removeClass("overflow-hidden");
        }});

    /* ===================================
      Animated Cursor
   ====================================== */

    function animatedCursor() {

        if ($("#aimated-cursor").length) {

            var e = {x: 0, y: 0}, t = {x: 0, y: 0}, n = .25, o = !1, a =    document.getElementById("cursor"),
                i = document.getElementById("cursor-loader");
            TweenLite.set(a, {xPercent: -50, yPercent: -50}), document.addEventListener("mousemove", function (t) {
                var n = window.pageYOffset || document.documentElement.scrollTop;
                e.x = t.pageX, e.y = t.pageY - n
            }), TweenLite.ticker.addEventListener("tick", function () {
                o || (t.x += (e.x - t.x) * n, t.y += (e.y - t.y) * n, TweenLite.set(a, {x: t.x, y: t.y}))
            }),
                $(".animated-wrap").mouseenter(function (e) {
                    TweenMax.to(this, .3, {scale: 2}), TweenMax.to(a, .3, {
                        scale: 2,
                        borderWidth: "1px",
                        opacity: .2
                    }), TweenMax.to(i, .3, {
                        scale: 2,
                        borderWidth: "1px",
                        top: 1,
                        left: 1
                    }), TweenMax.to($(this).children(), .3, {scale: .5}), o = !0
                }),
                $(".animated-wrap").mouseleave(function (e) {
                    TweenMax.to(this, .3, {scale: 1}), TweenMax.to(a, .3, {
                        scale: 1,
                        borderWidth: "2px",
                        opacity: 1
                    }), TweenMax.to(i, .3, {
                        scale: 1,
                        borderWidth: "2px",
                        top: 0,
                        left: 0
                    }), TweenMax.to($(this).children(), .3, {scale: 1, x: 0, y: 0}), o = !1
                }),
                $(".animated-wrap").mousemove(function (e) {
                    var n, o, i, l, r, d, c, s, p, h, x, u, w, f, m;
                    n = e, o = 2, i = this.getBoundingClientRect(), l = n.pageX - i.left, r = n.pageY - i.top, d = window.pageYOffset || document.documentElement.scrollTop, t.x = i.left + i.width / 2 + (l - i.width / 2) / o, t.y = i.top + i.height / 2 + (r - i.height / 2 - d) / o, TweenMax.to(a, .3, {
                        x: t.x,
                        y: t.y
                    }), s = e, p = c = this, h = c.querySelector(".animated-element"), x = 20, u = p.getBoundingClientRect(), w = s.pageX - u.left, f = s.pageY - u.top, m = window.pageYOffset || document.documentElement.scrollTop, TweenMax.to(h, .3, {
                        x: (w - u.width / 2) / u.width * x,
                        y: (f - u.height / 2 - m) / u.height * x,
                        ease: Power2.easeOut
                    })
                }),
                $(".hide-cursor,.btn,.tp-bullets").mouseenter(function (e) {
                    TweenMax.to("#cursor", .2, {borderWidth: "1px", scale: 2, opacity: 0})
                }), $(".hide-cursor,.btn,.tp-bullets").mouseleave(function (e) {
                TweenMax.to("#cursor", .3, {borderWidth: "2px", scale: 1, opacity: 1})
            }),$(".link").mouseenter(function (e) {
                TweenMax.to("#cursor", .2, {
                    borderWidth: "0px",
                    scale: 3,
                    backgroundColor: "rgba(255, 255, 255, 0.27)",
                    opacity: .15
                })
            }), $(".link").mouseleave(function (e) {
                TweenMax.to("#cursor", .3, {
                    borderWidth: "2px",
                    scale: 1,
                    backgroundColor: "rgba(255, 255, 255, 0)",
                    opacity: 1
                })
            })

        }

    }
    if ($(window).width() > 991) {
        setTimeout(function () {
            animatedCursor();
        }, 1000);
    }


    /* ===================================
        WOW Animation
     ====================================== */

    if ($(window).width() > 991) {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        new WOW().init();
    }

    /* ===================================
       Owl Carousel
      ====================================== */

    //Testimonial Slider

    $("#testimonial-slider").owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        autoplay: true,
        dots: true,
        dotsContainer: "#testimonials-avatar",
        autoplayTimeout: 6000,
        responsive: {
            1280: {
                items: 1,
            },
            600: {
                items: 1,
            },
            320: {
                items: 1,
            },
        }
    });


    $('[data-position]').each(function () {
       var position = $(this).data('position').split(',')
      $(this).css({top: position[0], right: position[1], bottom: position[2], left: position[3]})
    });


    $('.partners-slider').owlCarousel({
        items: 5,
        autoplay: 1500,
        smartSpeed: 1500,
        autoplayHoverPause: true,
        slideBy: 1,
        loop: true,
        margin: 30,
        dots: false,
        nav: false,
        responsive: {
            1200: {
                items: 4,
            },
            768: {
                items: 3,
            },
            480: {
                items: 2,
            },
            320: {
                items: 1,
            },
        }
    });


function dotCanvas(){
    var $blocks = $('[data-dots]');
    $blocks.each(function() {
        var $block = $(this);
        var block = $block[0];
        var $canvas = $("<canvas/>").appendTo($block);
        var canvas = $canvas[0];
        var width = $block.width();
        var height = $block.height();
        var ctx = canvas.getContext('2d');
        ctx.width = width;
        ctx.height = height;
        var devicePixelRatio = window.devicePixelRatio || 1,
            backingStoreRatio = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
        var ratio = devicePixelRatio / backingStoreRatio;
        canvas.width = width * ratio;
        canvas.height = height * ratio;
        ctx.scale(ratio, ratio);
        var mouseX = undefined;
        var mouseY = undefined;

        function Circle(x, y) {
            this.x = x;
            this.y = y;
            this.distance = 7;
            this.radians = 0;
            this.draw = function() {
                ctx.beginPath();
                ctx.strokeStyle = 'rgba(151, 151, 151, .28)';
                ctx.moveTo(this.x + 3, this.y);
                ctx.lineTo(this.x + 3, this.y + 6);
                ctx.moveTo(this.x, this.y + 3);
                ctx.lineTo(this.x + 6, this.y + 3);
                ctx.stroke();
            };
            this.update = function() {
                if (mouseX > -1) {
                    var k1 = mouseY - y;
                    var k2 = mouseX - x;
                    var tan = k1 / k2;
                    var yrad = Math.atan(tan);
                    if (mouseX < x) {
                        yrad = Math.PI - Math.atan(-tan);
                    }
                    this.x = x + Math.cos(yrad) * this.distance;
                    this.y = y + Math.sin(yrad) * this.distance;
                }
                this.draw();
            };
        };
        var circlesArray = [];
        var gutter = 35;
        var countW = Math.floor(width / gutter);
        var countH = Math.floor(height / gutter);
        var len = countW * countH;
        for (var i = 0; i < countH; i++) {
            for (var t = 0; t < countW; t++) {
                var x = gutter * t;
                var y = gutter * i;
                circlesArray.push(new Circle(x, y));
            }
        }
        var loop = function() {
            ctx.clearRect(0, 0, ctx.width, ctx.height);
            for (var i = 0; i < circlesArray.length; i++) {
                circlesArray[i].update();
            }
        };
        document.addEventListener('mousemove', function(e) {
            var parentOffset = $(canvas).parent().offset();
            var relX = e.pageX - parentOffset.left;
            var relY = e.pageY - parentOffset.top;
            mouseX = relX;
            mouseY = relY;
            ctx.clearRect(0, 0, ctx.width, ctx.height);
            for (var i = 0; i < circlesArray.length; i++) {
                circlesArray[i].update();
            }
            loop();
        });
        loop();
    });
}

    if ($(window).width() > 991) {

        dotCanvas();
    }



    /*--------------------------------------------------
        Smoke Effect
    ---------------------------------------------------*/

    function smokeeffect () {

        var frameProportion = 1.78, //png frame aspect ratio
            frames = 25, //number of png frames
            resize = false;

        //set transitionBackground dimentions
        var transitionBackground = $('.cd-transition-layer .bg-layer');
        setLayerDimensions();
        $(window).on('resize', function(){
            if( !resize ) {
                resize = true;
                (!window.requestAnimationFrame) ? setTimeout(setLayerDimensions, 300) : window.requestAnimationFrame(setLayerDimensions);
            }
        });

        function setLayerDimensions() {
            var windowWidth = $(window).width(),
                windowHeight = $(window).height(),
                layerHeight, layerWidth;

            if( windowWidth/windowHeight > frameProportion ) {
                layerWidth = windowWidth;
                layerHeight = layerWidth/frameProportion;
            } else {
                layerHeight = windowHeight*1.2;
                layerWidth = layerHeight*frameProportion;
            }

            transitionBackground.css({
                'width': layerWidth*frames+'px',
                'height': layerHeight+'px',
            });

            resize = false;
        }

    }
    smokeeffect();



    /*============================================*
            Cube Portfolio
  * ============================================*/


    $('#js-grid-mosaic-flat').cubeportfolio({
        filters: '#js-filters-mosaic-flat',
        layoutMode: 'mosaic',
        sortByDimension: true,
        mediaQueries: [{
            width: 1500,
            cols: 6,
        }, {
            width: 1100,
            cols: 4,
        }, {
            width: 800,
            cols: 3,
        }, {
            width: 480,
            cols: 1,
            options: {
                gapHorizontal: 15,
                gapVertical: 15,
            }
        }],
        defaultFilter: '*',
        animationType: 'fadeOutTop',
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        caption: 'zoom',

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',

        plugins: {
            loadMore: {
                element: '#js-loadMore-mosaic-flat',
                action: 'click',
                loadItems: 3,
            }
        },
    });


    /* ===================================
          Revolution Slider
   ====================================== */

    $("#rev_slider_17_1").show().revolution({
                    sliderType:"standard",
                    jsFileLocation:"../vendor/js/",
                    sliderLayout:"fullscreen",
                    dottedOverlay:"none",
                    delay:9000,
                    responsiveLevels:[1240,1024,778,480],
                    visibilityLevels:[1240,1024,778,480],
                    gridwidth:[1110,990,750,570],
                    gridheight:[1000,768,960,720],
                    lazyType:"none",
                    parallax: {
                        type:"mouse",
                        origo:"enterpoint",
                        speed:400,
                        speedbg:0,
                        speedls:0,
                        levels:[1,2,3,4,5,6,7,8,9,10],
                        disable_onmobile:"on"
                    },
                    shadow:0,
                    spinner:"off",
                    stopLoop:"off",
                    stopAfterLoops:-1,
                    stopAtSlide:-1,
                    shuffle:"off",
                    autoHeight:"off",
                    fullScreenAutoWidth:"off",
                    fullScreenAlignForce:"off",
                    fullScreenOffsetContainer: "",
                    fullScreenOffset: "",
                    disableProgressBar:"on",
                    hideThumbsOnMobile:"off",
                    hideSliderAtLimit:0,
                    hideCaptionAtLimit:0,
                    hideAllCaptionAtLilmit:0,
                    debugMode:false,
                    fallbacks: {
                        simplifyAll:"off",
                        nextSlideOnWindowFocus:"off",
                        disableFocusListener:false,
                    }
                });

});




// // Fixed navbar
// // window.addEventListener("scroll", function(){
// //   var header = document.querySelector("header");
// //   header.classList.toggle("sticky-navbar", window.scrollY > 0);
// // });
// // Fixed navbar


// // Pralax
// // var logo = document.querySelector('.logo-header'),
// //     blurredBird = document.querySelector('.back-bird'),
// //     foreBird = document.querySelector('.fore-bird');
    

// // window.addEventListener('scroll', function() {
  
// //     var scrolled = window.scrollY;
  
// //     logo.style.transform = "translate(0px," + scrolled/2 +"%)";
// //     blurredBird.style.transform = "translate(0px," + scrolled/5 +"%)";
// //     foreBird.style.transform = "translate(0px,-" + scrolled/40 +"%)";
 
// // });


// // var forEach = function (array, callback) {
// //   for (var i = 0; i < array.length; i++) {
// //     callback.call(null, i, array[i]);
// //   }
// // };
// // Pralax


// // canvas
// var canvas = document.getElementById('nokey'),
//    can_w = parseInt(canvas.getAttribute('width')),
//    can_h = parseInt(canvas.getAttribute('height')),
//    ctx = canvas.getContext('2d');

// // console.log(typeof can_w);

// var ball = {
//       x: 0,
//       y: 0,
//       vx: 0,
//       vy: 0,
//       r: 0,
//       alpha: 1,
//       phase: 0
//    },
//    ball_color = {
//        r: 52,
//        g: 152,
//        b: 219
//    },
//    R = 2,
//    balls = [],
//    alpha_f = 0.03,
//    alpha_phase = 0,
    
// // Line
//    link_line_width = 0.8,
//    dis_limit = 300,
//    add_mouse_point = true,
//    mouse_in = false,
//    mouse_ball = {
//       x: 0,
//       y: 0,
//       vx: 0,
//       vy: 0,
//       r: 0,
//       type: 'mouse'
//    };

// // Random speed
// function getRandomSpeed(pos){
//     var  min = -1,
//        max = 1;
//     switch(pos){
//         case 'top':
//             return [randomNumFrom(min, max), randomNumFrom(0.1, max)];
//             break;
//         case 'right':
//             return [randomNumFrom(min, -0.1), randomNumFrom(min, max)];
//             break;
//         case 'bottom':
//             return [randomNumFrom(min, max), randomNumFrom(min, -0.1)];
//             break;
//         case 'left':
//             return [randomNumFrom(0.1, max), randomNumFrom(min, max)];
//             break;
//         default:
//             return;
//             break;
//     }
// }
// function randomArrayItem(arr){
//     return arr[Math.floor(Math.random() * arr.length)];
// }
// function randomNumFrom(min, max){
//     return Math.random()*(max - min) + min;
// }
// // console.log(randomNumFrom(0, 10));
// // Random Ball
// function getRandomBall(){
//     var pos = randomArrayItem(['top', 'right', 'bottom', 'left']);
//     switch(pos){
//         case 'top':
//             return {
//                 x: randomSidePos(can_w),
//                 y: -R,
//                 vx: getRandomSpeed('top')[0],
//                 vy: getRandomSpeed('top')[1],
//                 r: R,
//                 alpha: 1,
//                 phase: randomNumFrom(0, 10)
//             }
//             break;
//         case 'right':
//             return {
//                 x: can_w + R,
//                 y: randomSidePos(can_h),
//                 vx: getRandomSpeed('right')[0],
//                 vy: getRandomSpeed('right')[1],
//                 r: R,
//                 alpha: 1,
//                 phase: randomNumFrom(0, 10)
//             }
//             break;
//         case 'bottom':
//             return {
//                 x: randomSidePos(can_w),
//                 y: can_h + R,
//                 vx: getRandomSpeed('bottom')[0],
//                 vy: getRandomSpeed('bottom')[1],
//                 r: R,
//                 alpha: 1,
//                 phase: randomNumFrom(0, 10)
//             }
//             break;
//         case 'left':
//             return {
//                 x: -R,
//                 y: randomSidePos(can_h),
//                 vx: getRandomSpeed('left')[0],
//                 vy: getRandomSpeed('left')[1],
//                 r: R,
//                 alpha: 1,
//                 phase: randomNumFrom(0, 10)
//             }
//             break;
//     }
// }
// function randomSidePos(length){
//     return Math.ceil(Math.random() * length);
// }

// // Draw Ball
// function renderBalls(){
//     Array.prototype.forEach.call(balls, function(b){
//        if(!b.hasOwnProperty('type')){
//            ctx.fillStyle = 'rgba('+ball_color.r+','+ball_color.g+','+ball_color.b+','+b.alpha+')';
//            ctx.beginPath();
//            ctx.arc(b.x, b.y, R, 0, Math.PI*2, true);
//            ctx.closePath();
//            ctx.fill();
//        }
//     });
// }

// // Update balls
// function updateBalls(){
//     var new_balls = [];
//     Array.prototype.forEach.call(balls, function(b){
//         b.x += b.vx;
//         b.y += b.vy;
        
//         if(b.x > -(50) && b.x < (can_w+50) && b.y > -(50) && b.y < (can_h+50)){
//            new_balls.push(b);
//         }
        
//         // alpha change
//         b.phase += alpha_f;
//         b.alpha = Math.abs(Math.cos(b.phase));
//         // console.log(b.alpha);
//     });
    
//     balls = new_balls.slice(0);
// }

// // loop alpha
// function loopAlphaInf(){
    
// }

// // Draw lines
// function renderLines(){
//     var fraction, alpha;
//     for (var i = 0; i < balls.length; i++) {
//         for (var j = i + 1; j < balls.length; j++) {
           
//            fraction = getDisOf(balls[i], balls[j]) / dis_limit;
            
//            if(fraction < 1){
//                alpha = (1 - fraction).toString();

//                ctx.strokeStyle = 'rgba(108, 172, 214,'+alpha+')';
//                ctx.lineWidth = link_line_width;
               
//                ctx.beginPath();
//                ctx.moveTo(balls[i].x, balls[i].y);
//                ctx.lineTo(balls[j].x, balls[j].y);
//                ctx.stroke();
//                ctx.closePath();
//            }
//         }
//     }
// }

// // calculate distance between two points
// function getDisOf(b1, b2){
//     var  delta_x = Math.abs(b1.x - b2.x),
//        delta_y = Math.abs(b1.y - b2.y);
    
//     return Math.sqrt(delta_x*delta_x + delta_y*delta_y);
// }

// // add balls if there a little balls
// function addBallIfy(){
//     if(balls.length < 20){
//         balls.push(getRandomBall());
//     }
// }

// // Render
// function render(){
//     ctx.clearRect(0, 0, can_w, can_h);
    
//     renderBalls();
    
//     renderLines();
    
//     updateBalls();
    
//     addBallIfy();
    
//     window.requestAnimationFrame(render);
// }

// // Init Balls
// function initBalls(num){
//     for(var i = 1; i <= num; i++){
//         balls.push({
//             x: randomSidePos(can_w),
//             y: randomSidePos(can_h),
//             vx: getRandomSpeed('top')[0],
//             vy: getRandomSpeed('top')[1],
//             r: R,
//             alpha: 1,
//             phase: randomNumFrom(0, 10)
//         });
//     }
// }
// // Init Canvas
// function initCanvas(){
//     canvas.setAttribute('width', window.innerWidth);
//     canvas.setAttribute('height', window.innerHeight);
    
//     can_w = parseInt(canvas.getAttribute('width'));
//     can_h = parseInt(canvas.getAttribute('height'));
// }
// window.addEventListener('resize', function(e){
//     console.log('Window Resize...');
//     initCanvas();
// });

// function goMovie(){
//     initCanvas();
//     initBalls(30);
//     window.requestAnimationFrame(render);
// }
// goMovie();

// // Mouse effect
// canvas.addEventListener('mouseenter', function(){
//     // console.log('mouseenter');
//     mouse_in = true;
//     balls.push(mouse_ball);
// });
// canvas.addEventListener('mouseleave', function(){
//     // console.log('mouseleave');
//     mouse_in = false;
//     var new_balls = [];
//     Array.prototype.forEach.call(balls, function(b){
//         if(!b.hasOwnProperty('type')){
//             new_balls.push(b);
//         }
//     });
//     balls = new_balls.slice(0);
// });
// canvas.addEventListener('mousemove', function(e){
//     var e = e || window.event;
//     mouse_ball.x = e.pageX;
//     mouse_ball.y = e.pageY;
//     // console.log(mouse_ball);
// });






// //canvas