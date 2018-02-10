var controller = new ScrollMagic.Controller();

// Section 01 Parallax
new ScrollMagic.Scene({
    triggerElement: "#section01",
    triggerHook: "onEnter",
    duration: "200%"
})
.setTween("#section01 > div.parallax-box", {y: "80%", ease: Linear.easeNone})
.addIndicators()
.addTo(controller);

// Section 02 Parallax
new ScrollMagic.Scene({
    triggerElement: "#section02",
    triggerHook: "onEnter",
    duration: "300%"
})
.setTween("#section02 > div.parallax-box", {y: "20%", ease: Linear.easeNone})
.addIndicators()
.addTo(controller);

// Section 03 Pin Phone
new ScrollMagic.Scene({
    triggerElement: "#section02",
    triggerHook: "onCenter",
    offset: 400,
    duration: "100%"
})
.setPin("#tut-phone")
.addIndicators()
.addTo(controller);

// Section 03 Phone 2nd Step
new ScrollMagic.Scene({
    triggerElement: "#section02",
    triggerHook: "onCenter",
    offset: 600
})
.setTween("#tut-step", 0.2, {backgroundPosition: "-323px 0px", ease: Linear.easeNone})
.addIndicators()
.addTo(controller);

// Section 03 Phone 3rd Step
new ScrollMagic.Scene({
    triggerElement: "#section02",
    triggerHook: "onCenter",
    offset: 800
})
.setTween("#tut-step", 0.2, {backgroundPosition: "-646px 0px", ease: Linear.easeNone})
.addIndicators()
.addTo(controller);

// Section 03 Phone 4th Step
new ScrollMagic.Scene({
    triggerElement: "#section02",
    triggerHook: "onCenter",
    offset: 1000
})
.setTween("#tut-step", 0.2, {backgroundPosition: "-969px 0px", ease: Linear.easeNone})
.addIndicators()
.addTo(controller);

// Section 03 Phone 5th Step
new ScrollMagic.Scene({
    triggerElement: "#section02",
    triggerHook: "onCenter",
    offset: 1200
})
.setTween("#tut-step", 0.2, {backgroundPosition: "-1292px 0px", ease: Linear.easeNone})
.addIndicators()
.addTo(controller);




// Section 03 Parallax
new ScrollMagic.Scene({
    triggerElement: "#section03",
    triggerHook: "onEnter",
    duration: "200%"
})
.setTween("#section03 > div.parallax-box", {y: "80%", ease: Linear.easeNone})
.addIndicators()
.addTo(controller);

// Section 04 Parallax
new ScrollMagic.Scene({
    triggerElement: "#section04",
    triggerHook: "onEnter",
    duration: "200%"
})
.setTween("#section04 > div.parallax-box", {y: "80%", ease: Linear.easeNone})
.addIndicators()
.addTo(controller);
