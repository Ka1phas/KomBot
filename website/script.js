var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: "#problemfinding",
    triggerHook: "onEnter",
    duration: "200%"
})
.setTween("#problemfinding > div.parallax-box", {y: "80%", ease: Linear.easeNone})
.addIndicators()
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#start",
    triggerHook: "onLeave",
    offset: document.getElementById("start").offsetHeight - document.documentElement.clientHeight * 0.5,
    duration: document.documentElement.clientHeight * 0.5
})
.setTween("#start > div > div", {opacity: 0, ease: Linear.easeNone})
.addIndicators()
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#start",
    triggerHook: "onEnter",
    duration: "200%"
})
.setTween("#start > div.parallax-box", {y: "80%", ease: Linear.easeNone})
.addIndicators()
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#workshop",
    triggerHook: "onEnter",
    duration: "200%"
})
.setTween("#workshop > div.parallax-box", {y: "80%", ease: Linear.easeNone})
.addIndicators()
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#prototype",
    triggerHook: "onEnter",
    duration: "200%"
})
.setTween("#prototype > div.parallax-box", {y: "80%", ease: Linear.easeNone})
.addIndicators()
.addTo(controller);
