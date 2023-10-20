//index header logo detect
$(window).scroll(function() {
    var resolutionTop = $('.resolution').offset().top + 100;
    var top = resolutionTop + $('.resolution').outerHeight();
    var bottom = $('.ncs').offset().top - 100;

    if ($(window).scrollTop() >= top && $(window).scrollTop() <= bottom) {
        $('.whiteLogo').css('opacity', '0');
        $('.blackLogo').css('opacity', '1');
        $('.menuOpen').addClass('blackColor');
    } else {
        $('.whiteLogo').css('opacity', '1');
        $('.blackLogo').css('opacity', '0');
        $('.menuOpen').removeClass('blackColor');
    }
});

//loading
$(function() {
    let tl = gsap.timeline();

    $('body').css('overflow', 'hidden');
    
    gsap.fromTo('.loading .loadBox span', {
        'background-size' : '0% 100%'
    }, {
        'background-size' : '100% 100%',
        duration: 3,
        delay: 0.5,
        ease: 'power4'
    });
    
    tl.fromTo('.loading', {
        xPercent: 0,
    }, {
        xPercent: -100,
        delay: 3.5,
        duration: 1.5,
        ease: 'power4',
        onComplete: function() {
            $('body').css('overflow', 'auto');
        }
    })

    tl.fromTo("header", {
        xPercent: 100
    }, {
        xPercent: 0,
        duration: 1.5,
        delay: -1.5,
        ease: 'power4'
    })
    
    tl.fromTo('.title .inner p span', {
        yPercent: 100
    }, {
        yPercent: 0,
        duration: 1,
        delay: -0.5
    })

    tl.fromTo('.about', {
        opacity: '0' 
    }, {
        opacity: '1',
        duration: 1,
        delay: -0.5
    })

    tl.play();
});

//about
$(function() {
    gsap.registerPlugin(ScrollTrigger);
    
    const lenis = new Lenis({
        wheelEventsTarget: document.querySelector('.wrap'),
    });

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 600)
    })

    gsap.ticker.lagSmoothing(0)
    
    gsap.fromTo('.about', {
    }, {
        scrollTrigger: {
            trigger: '.about',
            start: '0% 0%',
            end: '100% 0%',
            pin: true,
            scrub: 1
        }
    })

    ScrollTrigger.matchMedia({
        '(min-width: 1601px)': function () {
            gsap.fromTo('.about .inner .imgBox', {
                'clip-path' : 'inset(10% 35%)',
                'transform' : 'scale(0.9)',
                'filter' : 'grayscale(0)'
            }, {
                'clip-path' : 'inset(0% 0%)',
                'filter' : 'grayscale(0.8)',
                'transform' : 'scale(1)',
                scrollTrigger: {
                    trigger: '.about',
                    start: '0% 0%',
                    end: '100% 0%',
                    scrub: 1
                }
            })
        },
        '(max-width: 1600px)': function () {
            gsap.fromTo('.about .inner .imgBox', {
                'clip-path' : 'inset(10% 25%)',
                'transform' : 'scale(0.9)',
                'filter' : 'grayscale(0)'
            }, {
                'clip-path' : 'inset(0% 0%)',
                'filter' : 'grayscale(0.8)',
                'transform' : 'scale(1)',
                scrollTrigger: {
                    trigger: '.about',
                    start: '0% 0%',
                    end: '100% 0%',
                    scrub: 1
                }
            })
        },
        '(max-width: 768px)': function () {
            gsap.fromTo('.about .inner .imgBox', {
                'clip-path' : 'inset(20% 25%)',
                'transform' : 'scale(0.9)',
                'filter' : 'grayscale(0)'
            }, {
                'clip-path' : 'inset(0% 0%)',
                'filter' : 'grayscale(0.8)',
                'transform' : 'scale(1)',
                scrollTrigger: {
                    trigger: '.about',
                    start: '0% 0%',
                    end: '100% 0%',
                    scrub: 1
                }
            })
        },
    })
    gsap.fromTo('.about .inner .textBox', {
        'transform' : 'translateY(150%)'
    }, {
        'transform' : 'translateY(0%)',
        scrollTrigger: {
            trigger: '.about .inner',
            start: '40% 0%',
            end: '70% 0%',
            scrub: 1
        }
    })
    gsap.fromTo('.about .inner .textBox .mask .text', {
        'background-size' : '0% 100%'
    }, {
        'background-size' : '100% 100%',
        scrollTrigger: {
            trigger: '.about .inner',
            start: '60% 0%',
            end: '100% 0%',
            scrub: 1
        }
    })
});

//about02
$(function() {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
        wheelEventsTarget: document.querySelector('.wrap'),
    });

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 600)
    })

    gsap.ticker.lagSmoothing(0)
    
    gsap.fromTo('.about02 .inner ul li .mask span', {
        'background-size' : '0% 100%'
    }, {
        'background-size' : '100% 100%',
        scrollTrigger: {
            trigger: '.about',
            start: '20% 0%',
            end: '70% 0%',
            scrub: 1
        }
    })
});

//gallery
$(function() {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
        wheelEventsTarget: document.querySelector('.wrap'),
    });

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 600)
    })

    gsap.ticker.lagSmoothing(0)
    
    gsap.fromTo('.gallery', {
    }, {
        scrollTrigger: {
            trigger: '.gallery',
            start: '0% 0%',
            end: '+=280%',
            pin: true,
            scrub: 1
        }
    })

    gsap.fromTo('.gallery .progressbar .mask span', {
        'background-size' : '0% 100%'
    }, {
        'background-size' : '100% 100%',
        scrollTrigger: {
            trigger: '.gallery .inner',
            start: '20% 0%',
            end: '280% 0%',
            scrub: 1
        }
    })
    gsap.fromTo('.box:nth-child(odd)', {
        'transform' : 'translateY(-150%)',
    }, {
        'transform' : 'translateY(0%)',
        scrollTrigger: {
            trigger: '.gallery .inner',
            start: '-50% 0%',
            end: '10% 0%',
            scrub: 1
        }
    })
    gsap.fromTo('.box:nth-child(even)', {
        'transform' : 'translateY(150%)',
    }, {
        'transform' : 'translateY(0%)',
        scrollTrigger: {
            trigger: '.gallery .inner',
            start: '-50% 0%',
            end: '10% 0%',
            scrub: 1
        }
    })

    ScrollTrigger.matchMedia({
        '(min-width: 1601px)': function () {
            let boxes = gsap.utils.toArray('.box-wrapper .box');
            let scrollSlide = gsap.to(boxes, {
                xPercent: -1128,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.gallery .inner',
                    scrub: 1,
                    start: '25% 0%',
                    end: '250% 0%'
                }
            })
            let maskBox = gsap.utils.toArray('.box-wrapper .box .maskBox .innerBox');
            let maskSlide = gsap.to(maskBox, {
                'transform': 'translateX(-430px)',
                ease: 'none',
                scrollTrigger: {
                    trigger: '.gallery .inner',
                    scrub: 1,
                    start: '25% 0%',
                    end: '250% 0%'
                }
            })
        },
        '(max-width: 1600px)': function () {
            let boxes = gsap.utils.toArray('.box-wrapper .box');
            let scrollSlide = gsap.to(boxes, {
                xPercent: -1244,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.gallery .inner',
                    scrub: 1,
                    start: '25% 0%',
                    end: '250% 0%'
                }
            })
            let maskBox = gsap.utils.toArray('.box-wrapper .box .maskBox .innerBox');
            let maskSlide = gsap.to(maskBox, {
                'transform': 'translateX(-350px)',
                ease: 'none',
                scrollTrigger: {
                    trigger: '.gallery .inner',
                    scrub: 1,
                    start: '25% 0%',
                    end: '250% 0%'
                }
            })
        },
        '(max-width: 1280px)': function () {
            let boxes = gsap.utils.toArray('.box-wrapper .box');
            let scrollSlide = gsap.to(boxes, {
                xPercent: -1387,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.gallery .inner',
                    scrub: 1,
                    start: '25% 0%',
                    end: '250% 0%'
                }
            })
            let maskBox = gsap.utils.toArray('.box-wrapper .box .maskBox .innerBox');
            let maskSlide = gsap.to(maskBox, {
                'transform': 'translateX(-350px)',
                ease: 'none',
                scrollTrigger: {
                    trigger: '.gallery .inner',
                    scrub: 1,
                    start: '25% 0%',
                    end: '250% 0%'
                }
            })
        },
        '(max-width: 768px)': function () {
            let boxes = gsap.utils.toArray('.box-wrapper .box');
            let scrollSlide = gsap.to(boxes, {
                xPercent: -1548,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.gallery .inner',
                    scrub: 1,
                    start: '25% 0%',
                    end: '250% 0%'
                }
            })
            let maskBox = gsap.utils.toArray('.box-wrapper .box .maskBox .innerBox');
            let maskSlide = gsap.to(maskBox, {
                'transform': 'translateX(-350px)',
                ease: 'none',
                scrollTrigger: {
                    trigger: '.gallery .inner',
                    scrub: 1,
                    start: '25% 0%',
                    end: '250% 0%'
                }
            })
        },
    })
});

//resolution
$(function() {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
        wheelEventsTarget: document.querySelector('.wrap'),
    });

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 600)
    })

    gsap.ticker.lagSmoothing(0)
    
    gsap.fromTo('.resolution .mask span', {
        'background-size' : '0% 100%'
    }, {
        'background-size' : '100% 100%',
        scrollTrigger: {
            trigger: '.resolution',
            start: '-100% 0%',
            end: '-50% 0%',
            scrub: 1
        }
    })
});

//work
$(function() {
    gsap.registerPlugin(ScrollTrigger);
    
    const lenis = new Lenis({
        wheelEventsTarget: document.querySelector('.wrap'),
    });

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 600)
    })

    gsap.ticker.lagSmoothing(0)
    
    gsap.fromTo('.work', {
    }, {
        scrollTrigger: {
            trigger: '.work',
            start: '0% 0%',
            end: '100% 0%',
            pin: true,
            scrub: 1
        }
    })
    gsap.fromTo('.work .inner', {
        'clip-path' : 'inset(0% 25%)',
        'transform' : 'translateY(30%)'
    }, {
        'clip-path' : 'inset(0% 0%)',
        'transform' : 'translateY(0%)',
        scrollTrigger: {
            trigger: '.work',
            start: '-100% 0%',
            end: '-10% 0%',
            scrub: 1
        }
    })
    gsap.fromTo('.work .inner .sectionName .mask span', {
        'background-size' : '0% 100%'
    }, {
        'background-size' : '100% 100%',
        scrollTrigger: {
            trigger: '.work',
            start: '-70% 0%',
            end: '-10% 0%',
            scrub: 1
        }
    })
    gsap.fromTo('.work .inner .cylinder .container .container-box', {
        'rotationX' : '-45'
    }, {
        'rotationX' : '292.5',
        scrollTrigger: {
            trigger: '.work',
            start: '0% 0%',
            end: '90% 0%',
            scrub: 1
        }
    })
    gsap.fromTo('.work .inner .textBox', {
        'transform' : 'translateY(100%)'
    }, {
        'transform' : 'translateY(65%)',
        scrollTrigger: {
            trigger: '.work .inner',
            start: '0% 0%',
            end: '50% 0%',
            scrub: 1
        }
    })
    gsap.fromTo('.work .inner .textBox li .mask span', {
        'background-size' : '0% 100%'
    }, {
        'background-size' : '100% 100%',
        scrollTrigger: {
            trigger: '.work .inner',
            start: '20% 0%',
            end: '40% 0%',
            scrub: 1
        }
    })
});

//ncs
$(function() {
    gsap.registerPlugin(ScrollTrigger);
    
    const lenis = new Lenis({
        wheelEventsTarget: document.querySelector('.wrap'),
    });

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 600)
    })

    gsap.ticker.lagSmoothing(0)
    
    let ncsList = document.querySelectorAll('.ncsList');

    ncsList.forEach((ncsList) => {
        gsap.to(ncsList, {
            scrollTrigger: {
                trigger: ncsList,
                start: '-100% 0%',
                end: '0% 0%',
                toggleClass: 'active'
            }
        })
    })
});

//contact
$(function() {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
        wheelEventsTarget: document.querySelector('.wrap'),
    });

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 600)
    })

    gsap.ticker.lagSmoothing(0)
    
    gsap.fromTo('.contact', {
        'opacity' : '0'
    }, {
        'opacity' : '0.7',
        scrollTrigger: {
            trigger: '.contact',
            start: '-50% 0%',
            end: '0% 0%',
            scrub: 1
        }
    })
});

