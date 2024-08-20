const tl = new TimelineMax();

if (window.scrollY === 0) {
    tl.from('.page-main main', .7, {
        delay: 0.5,
        x: '-100%',
    });

    tl.from('header', 1.5, {
        delay: 0.5,
        top: -100,
        opacity: 0,
    });

    const title = document.querySelectorAll('.section-top__title--anim');
    const titleText = document.querySelectorAll('.section-top__title--span-anim');

    title.forEach(function(i) {
        i.style.backgroundColor = 'transparent';
        i.style.overflow = 'hidden';
    })
    titleText.forEach(function(e) {
        e.style.display = 'inline-block';
        e.style.transform = 'translateY(100%)';
    })

    
    tl.to('.section-top__title--span-anim', {
        y: '0%',
        duration: 0.7,
        stagger: 0.2,
    }, '<');
    
    tl.from('.js-anim-bt-opacity', 1.5, {
        y: 50,
        opacity: '0',
    }, '<');

    const tlItems = new TimelineMax();

    tlItems.fromTo('.js-anim-header-item-1', 1.54, {
        y: -150,
        opacity: 0,
    }, {
        delay: 3,
        y: 0,
        ease: 'back',
        opacity: 1,
    })
        .fromTo('.js-anim-header-item-2', 1.54, {
            y: -150,
            opacity: 0,
        }, {
            delay: .2,
            y: 0,
            ease: 'back',
            opacity: 1,
        }, '<')

        .fromTo('.js-anim-header-item-3', 1.54, {
            y: -150,
            opacity: 0,
        }, {
            y: 0,
            ease: 'back',
            opacity: 1,
        }, '<')

        .fromTo('.js-anim-header-item-4', 1.54, {
            y: -150,
            opacity: 0,
        }, {
            y: 0,
            ease: 'back',
            opacity: 1,
        }, '<')

        .fromTo('.js-anim-header-item-5', 1.54, {
            y: -150,
            opacity: 0,
        }, {
            y: 0,
            ease: 'back',
            opacity: 1,
        }, '<')

        .fromTo('.js-anim-header-item-6', 1.54, {
            y: -150,
            opacity: 0,
        }, {
            y: 0,
            ease: 'back',
            opacity: 1,
        }, '<')

        .fromTo('.js-anim-header-item-7', 1.54, {
            y: -150,
            opacity: 0,
        }, {
            y: 0,
            ease: 'back',
            opacity: 1,
        }, '<')

        .fromTo('.js-anim-header-item-8', 1.54, {
            y: -150,
            opacity: 0,
        }, {
            delay: .1,
            y: 0,
            ease: 'back',
            opacity: 1,
        }, '<')

        .fromTo('.js-anim-header-item-9', 1.54, {
            y: -150,
            opacity: 0,
        }, {
            y: 0,
            ease: 'back',
            opacity: 1,
        }, '<')

        .fromTo('.js-anim-header-item-10', 1.54, {
            y: -150,
            opacity: 0,
        }, {
            delay: .1,
            y: 0,
            ease: 'back',
            opacity: 1,
        }, '<')

        .fromTo('.js-anim-header-item-11', 1.54, {
            y: -150,
            opacity: 0,
        }, {
            y: 0,
            ease: 'back',
            opacity: 1,
        }, '<')

        .fromTo('.js-anim-header-item-12', 1.54, {
            y: -150,
            opacity: 0,
        }, {
            delay: .1,
            y: 0,
            ease: 'back',
            opacity: 1,
        }, '<')

        .fromTo('.js-anim-header-item-13', 1.54, {
            y: -150,
            opacity: 0,
        }, {
            y: 0,
            ease: 'back',
            opacity: 1,
        }, '<')

        .fromTo('.js-anim-header-item-14', 1.54, {
            y: -150,
            opacity: 0,
        }, {
            delay: .1,
            y: 0,
            ease: 'back',
            opacity: 1,
        }, '<')

        .fromTo('.js-anim-header-item-15', 1.54, {
            y: -150,
            opacity: 0,
        }, {
            delay: .1,
            y: 0,
            ease: 'back',
            opacity: 1,
        }, '<')
}

function animateUp(elem) {
    gsap.fromTo(elem, 1, {
        opacity: 0,
        y: 50,
    }, {
        y: 0,
        ease: 'circ.out',
        opacity: 1,
    });
}

function animateOpacity(elem) {
    gsap.fromTo(elem, .75, {
        y: 20,
        opacity: 0,
    }, {
        opacity: 1,
        y: 0,
        ease: 'circ.out',
    });
}

function animateList(elem) {
    gsap.fromTo(elem, .75, {
        y: 20,
        opacity: 0,
    }, {
        delay: 1,
        opacity: 1,
        y: 0,
        ease: 'circ.out',
    }, '<');
}

function animateList(elem) {
    gsap.fromTo(elem, .75, {
        y: -50,
        opacity: 0,
    }, {
        delay: 1,
        opacity: 1,
        y: 0,
        ease: 'circ.out',
    }, '<');
}
  
function hide(elem) {
    gsap.set(elem, {opacity: 0});
}
  
document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.utils.toArray(".trigger-up").forEach(function(elem) {
        hide(elem);
      
        ScrollTrigger.create({
            trigger: elem,
            onEnter: function() { animateUp(elem) }, 
            onEnterBack: function() { animateUp(elem, -1) },
            onLeave: function() { hide(elem) } 
        });
    });

    gsap.utils.toArray(".trigger-opacity").forEach(function(elem) {
        hide(elem);
      
        ScrollTrigger.create({
            trigger: elem,
            onEnter: function() { animateOpacity(elem) }, 
            onEnterBack: function() { animateOpacity(elem, -1) },
            onLeave: function() { hide(elem) } 
        });
    });

    const triggerListAll = document.querySelectorAll('.trigger-list');
    const triggerListUpAll = document.querySelectorAll('.trigger-list-up');

    triggerListAll.forEach((elem) => {
        elem.style.transform = 'translate(0px, 50px)';
        elem.style.opacity = '0';
        elem.style.visibility = 'hidden';
    });

    triggerListUpAll.forEach((elem) => {
        elem.style.transform = 'translate(0px, -100px)';
        elem.style.opacity = '0';
        elem.style.visibility = 'hidden';
    });

    const animList = () => {
        batch(".trigger-list", {
            interval: 0.1,
            batchMax: 99,
            onEnter: batch => gsap.to(batch, {autoAlpha: 1, stagger: 0.15, overwrite: true, y: 0,}),
            onLeave: batch => gsap.set(batch, {autoAlpha: 0, overwrite: true, y: 50,}),
            onEnterBack: batch => gsap.to(batch, {autoAlpha: 1, stagger: 0.15, overwrite: true, y: 0,}),
            onLeaveBack: batch => gsap.set(batch, {autoAlpha: 0, overwrite: true, y: 50,})
        });

        function batch(targets, vars) {
            let varsCopy = {},
                interval = vars.interval || 0.1,
                proxyCallback = (type, callback) => {
                    let batch = [],
                        delay = gsap.delayedCall(interval, () => {callback(batch); batch.length = 0;}).pause();
                    return self => {
                        batch.length || delay.restart(true);
                        batch.push(self.trigger);
                        vars.batchMax && vars.batchMax <= batch.length && delay.progress(1);
                    };
                },
                p;
            for (p in vars) {
                varsCopy[p] = (~p.indexOf("Enter") || ~p.indexOf("Leave")) ? proxyCallback(p, vars[p]) : vars[p];
            }
            gsap.utils.toArray(targets).forEach(target => {
                let config = {};
                for (p in varsCopy) {
                    config[p] = varsCopy[p];
                }
                config.trigger = target;
                ScrollTrigger.create(config);
            });
        }
    };
    const animListUp = () => {
        batch(".trigger-list-up", {
            interval: 0.1,
            batchMax: 99,
            onEnter: batch => gsap.to(batch, {autoAlpha: 1, stagger: 0.15, overwrite: true, y: 0,}),
            onLeave: batch => gsap.set(batch, {autoAlpha: 0, overwrite: true, y: -100,}),
            onEnterBack: batch => gsap.to(batch, {autoAlpha: 1, stagger: 0.15, overwrite: true, y: 0,}),
            onLeaveBack: batch => gsap.set(batch, {autoAlpha: 0, overwrite: true, y: -100,})
        });

        function batch(targets, vars) {
            let varsCopy = {},
                interval = vars.interval || 0.1,
                proxyCallback = (type, callback) => {
                    let batch = [],
                        delay = gsap.delayedCall(interval, () => {callback(batch); batch.length = 0;}).pause();
                    return self => {
                        batch.length || delay.restart(true);
                        batch.push(self.trigger);
                        vars.batchMax && vars.batchMax <= batch.length && delay.progress(1);
                    };
                },
                p;
            for (p in vars) {
                varsCopy[p] = (~p.indexOf("Enter") || ~p.indexOf("Leave")) ? proxyCallback(p, vars[p]) : vars[p];
            }
            gsap.utils.toArray(targets).forEach(target => {
                let config = {};
                for (p in varsCopy) {
                    config[p] = varsCopy[p];
                }
                config.trigger = target;
                ScrollTrigger.create(config);
            });
        }
    };

    animList();
    animListUp();
});
