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

// Section 02 Pin Phone
new ScrollMagic.Scene({
    triggerElement: "#section02",
    triggerHook: "onCenter",
    offset: 400,
    duration: 2600
})
.setPin("#tut-phone")
.addIndicators()
.addTo(controller);

// Section 02 1st Step - Note
var step01_info_box_height = getInfoBoxHeight(E("#step01_info_box"));
var tween_step01note = new TimelineMax()
.add(TweenMax.to(E("#step01_highlight"), 0.2, {strokeDashoffset: 0, ease:Linear.easeNone}))
.add(TweenMax.to(E("#step01_line"), 0.2, {strokeDashoffset: 0, ease:Linear.easeNone}))
.add(TweenMax.to(E("#step01_info_box"), 0.2, {height: step01_info_box_height, display: "block", paddingTop: 10, paddingBottom: 10, ease:Linear.easeNone}))
.pause();

new ScrollMagic.Scene({
    triggerElement: "#section02",
    triggerHook: "onCenter",
    offset: 400,
    duration: 300
})
.on("enter leave", function(e) {
    if (e.type == "enter") {
        tween_step01note.play();
    } else if(e.type == "leave") {
        tween_step01note.reverse(0);
    }
})
.addIndicators()
.addTo(controller);

// Section 02 Phone 2nd Step
var step02_info_box_height = getInfoBoxHeight(E("#step02_info_box"));
var tween_step02note = new TimelineMax()
.add(TweenMax.to(E("#step02_highlight"), 0.2, {strokeDashoffset: 0, ease:Linear.easeNone}))
.add(TweenMax.to(E("#step02_line"), 0.2, {strokeDashoffset: 0, ease:Linear.easeNone}))
.add(TweenMax.to(E("#step02_info_box"), 0.2, {height: step02_info_box_height, display: "block", padding: 10, ease:Linear.easeNone}))
.pause();

new ScrollMagic.Scene({
    triggerElement: "#section02",
    triggerHook: "onCenter",
    offset: 1000,
    duration: 300
})
.on("enter leave", function(e) {
    if (e.type == "enter") {
        TweenMax.to(E("#tut-step"), 0.2, {backgroundPosition: "-323px 0px", ease:Linear.easeNone});
        tween_step02note.play();
    } else if(e.type == "leave") {
        tween_step02note.reverse(0);
        if (e.scrollDirection == "REVERSE") {
            TweenMax.to(E("#tut-step"), 0.2, {backgroundPosition: "0px 0px", ease:Linear.easeNone});
        }
    }
})
.addIndicators()
.addTo(controller);

// Section 02 Phone 3rd Step
var step03_info_box_height = getInfoBoxHeight(E("#step03_info_box"));
var tween_step03note = new TimelineMax()
.add(TweenMax.to(E("#step03_highlight"), 0.2, {strokeDashoffset: 0, ease:Linear.easeNone}))
.add(TweenMax.to(E("#step03_line"), 0.2, {strokeDashoffset: 0, ease:Linear.easeNone}))
.add(TweenMax.to(E("#step03_info_box"), 0.2, {height: step03_info_box_height, display: "block", padding: 10, ease:Linear.easeNone}))
.pause();

new ScrollMagic.Scene({
    triggerElement: "#section02",
    triggerHook: "onCenter",
    offset: 1600,
    duration: 300
})
.on("enter leave", function(e) {
    if (e.type == "enter") {
        tween_step03note.play();
    } else if(e.type == "leave") {
        tween_step03note.reverse(0);
    }
})
.addIndicators()
.addTo(controller);

// Section 02 Phone 4th Step
var step04_info_box_height = getInfoBoxHeight(E("#step04_info_box"));
var tween_step04note = new TimelineMax()
.add(TweenMax.to(E("#step04_highlight"), 0.2, {strokeDashoffset: 0, ease:Linear.easeNone}))
.add(TweenMax.to(E("#step04_line"), 0.2, {strokeDashoffset: 0, ease:Linear.easeNone}))
.add(TweenMax.to(E("#step04_info_box"), 0.2, {height: step04_info_box_height, display: "block", padding: 10, ease:Linear.easeNone}))
.pause();

new ScrollMagic.Scene({
    triggerElement: "#section02",
    triggerHook: "onCenter",
    offset: 2200,
    duration: 300
})
.on("enter leave", function(e) {
    if (e.type == "enter") {
        TweenMax.to(E("#tut-step"), 0.2, {backgroundPosition: "-646px 0px", ease:Linear.easeNone});
        tween_step04note.play();
    } else if(e.type == "leave") {
        tween_step04note.reverse(0);
        if (e.scrollDirection == "REVERSE") {
            TweenMax.to(E("#tut-step"), 0.2, {backgroundPosition: "-323px 0px", ease:Linear.easeNone});
        }
    }
})
.addIndicators()
.addTo(controller);

// Section 02 Phone 5th Step
var step05_info_box_height = getInfoBoxHeight(E("#step05_info_box"));
var tween_step05note = new TimelineMax()
.add(TweenMax.fromTo(E("#tut-step"), 0.2, {backgroundPosition: "-646px 0px"}, {backgroundPosition: "-969px 0px", ease:Linear.easeNone}))
.add(TweenMax.to(E("#step05_info_box"), 0.2, {height: step05_info_box_height, display: "block", padding: 10, ease:Linear.easeNone}));

new ScrollMagic.Scene({
    triggerElement: "#section02",
    triggerHook: "onCenter",
    offset: 2500,
})
.on("enter leave", function(e) {
    if (e.type == "enter") {
        TweenMax.to(E("#tut-step"), 0.2, {backgroundPosition: "-969px 0px", ease:Linear.easeNone});
        TweenMax.to(E("#step05_info_box"), 0.2, {height: step05_info_box_height, display: "block", padding: 10, ease:Linear.easeNone});
    } else if(e.type == "leave") {
        TweenMax.to(E("#step05_info_box"), 0.2, {height: 0, display: "none", paddingTop: 0, paddingBottom: 0, ease:Linear.easeNone});
        if (e.scrollDirection == "REVERSE") {
            TweenMax.to(E("#tut-step"), 0.2, {backgroundPosition: "-646px 0px", ease:Linear.easeNone});
        }
    }
})
.setTween(tween_step05note)
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
