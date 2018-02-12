var controller = new ScrollMagic.Controller();

var typed = new Typed('#questions-cycle', {
    strings: [
        "<span style=\"color:#f05500\">Wo ist der Raum LE105?</span>",
        "<span style=\"color:#5500f0\">Wie kann ich mich zu Prüfungen anmelden?</span>",
        "<span style=\"color:#ab00ab\">Was sind Versuchspersonstunden?</span>",
        "<span style=\"color:#0000e0\">Wie teuer ist das nächste Semester?</span>",
        "<span style=\"color:#335555\">Wo ist die Vorlesung InfoN?</span>",
        "<span style=\"color:#9921ab\">Wo und wann ist die Prüfung von Psychologie?</span>"
    ],
    loop: true,
    backDelay: 2000,
    showCursor: false,
    typeSpeed: 30,
});

// Section 01 Parallax
new ScrollMagic.Scene({
    triggerElement: "#section01",
    triggerHook: "onEnter",
    duration: "200%"
})
.setTween("#section01 > div.parallax-box", {y: "80%", ease: Linear.easeNone})
.addIndicators()
.addTo(controller);

// Section 01 More Info Hide
new ScrollMagic.Scene({
    triggerElement: "#section01",
    triggerHook: "onLeave",
    duration: 100
})
.setTween("#start-more-info", {opacity: 0, ease: Linear.easeNone})
.addIndicators()
.addTo(controller);

var tween_section01_overlay = new TimelineMax()
.add(TweenMax.to("#section01-overlay", 1, {display: "block", opacity: 1}));

// Section 01 Overlay
var scrolloffset = E("#section01").offsetHeight * 0.75;
new ScrollMagic.Scene({
    triggerElement: "#section01",
    triggerHook: "onCenter",
    offset: scrolloffset,
    duration: E("#section01").offsetHeight
})
.setTween(tween_section01_overlay)
.addIndicators({name:"Start Overlay"})
.addTo(controller);

// === Section Features ===
// Section Features Parallax
new ScrollMagic.Scene({
    triggerElement: "#section-features",
    triggerHook: "onEnter",
    duration: "200%"
})
.setTween("#section-features > div.parallax-box", {y: "20%", ease: Linear.easeNone})
.addTo(controller);

// Section Features Timeline
var tween_features = new TimelineMax()
.fromTo(E("#feature-room-search-title01"), 1, {autoAlpha:0, left:"200%"}, {autoAlpha:1,left: 0})
.fromTo(E("#feature-location-search01"), 1,{paddingLeft:0, paddingRight:0, width:0}, {paddingLeft:5, paddingRight:5, width: "100%"})
.fromTo(E("#feature-location-marker01"), 1, {left:"72%", top:0, opacity:0}, {left:"72%", top: "36%", opacity:1})
.fromTo(E("#feature-room-search-title02"), 1, {autoAlpha:0, left:"200%"}, {autoAlpha:1,left: 0})
.fromTo(E("#feature-location-search02"), 1,{paddingLeft:0, paddingRight:0, width:0}, {paddingLeft:5, paddingRight:5, width: "100%"})
.fromTo(E("#feature-location-marker02"), 1, {left:"35%", top:0, opacity:0}, {left:"35%", top:"78%", opacity: 1});

// Section Features Pin Info Box
new ScrollMagic.Scene({
    triggerElement: "#section-features",
    triggerHook: "onCenter",
    offset: 400,
    duration: 2000
})
.setPin("#feature-content-wrap")
.setTween(tween_features)
.addTo(controller);

// === Section Tutorial ===
// Section Tutorial Parallax
new ScrollMagic.Scene({
    triggerElement: "#section-tutorial",
    triggerHook: "onEnter",
    duration: "300%"
})
.setTween("#section-tutorial > div.parallax-box", {y: "20%", ease: Linear.easeNone})
.addIndicators()
.addTo(controller);

// Section Tutorial Pin Phone
new ScrollMagic.Scene({
    triggerElement: "#section-tutorial",
    triggerHook: "onCenter",
    offset: 400,
    duration: 300
})
.setPin("#tut-phone")
.addIndicators()
.addTo(controller);

// Section Tutorial 1st Step - Note
var step01_info_box_height = getInfoBoxHeight(E("#step01_info_box"));
var tween_step01note = new TimelineMax()
.add(TweenMax.to(E("#step01_highlight"), 0.2, {strokeDashoffset: 0, ease:Linear.easeNone}))
.add(TweenMax.to(E("#step01_line"), 0.2, {strokeDashoffset: 0, ease:Linear.easeNone}))
.add(TweenMax.to(E("#step01_info_box"), 0.2, {height: step01_info_box_height, display: "block", paddingTop: 10, paddingBottom: 10, ease:Linear.easeNone}))
.pause();

new ScrollMagic.Scene({
    triggerElement: "#section-tutorial",
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

// Section Tutorial Phone 2nd Step
var step02_info_box_height = getInfoBoxHeight(E("#step02_info_box"));
var tween_step02note = new TimelineMax()
.add(TweenMax.to(E("#step02_highlight"), 0.2, {strokeDashoffset: 0, ease:Linear.easeNone}))
.add(TweenMax.to(E("#step02_line"), 0.2, {strokeDashoffset: 0, ease:Linear.easeNone}))
.add(TweenMax.to(E("#step02_info_box"), 0.2, {height: step02_info_box_height, display: "block", padding: 10, ease:Linear.easeNone}))
.pause();

new ScrollMagic.Scene({
    triggerElement: "#section-tutorial",
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

// Section Tutorial Phone 3rd Step
var step03_info_box_height = getInfoBoxHeight(E("#step03_info_box"));
var tween_step03note = new TimelineMax()
.add(TweenMax.to(E("#step03_highlight"), 0.2, {strokeDashoffset: 0, ease:Linear.easeNone}))
.add(TweenMax.to(E("#step03_line"), 0.2, {strokeDashoffset: 0, ease:Linear.easeNone}))
.add(TweenMax.to(E("#step03_info_box"), 0.2, {height: step03_info_box_height, display: "block", padding: 10, ease:Linear.easeNone}))
.pause();

new ScrollMagic.Scene({
    triggerElement: "#section-tutorial",
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

// Section Tutorial Phone 4th Step
var step04_info_box_height = getInfoBoxHeight(E("#step04_info_box"));
var tween_step04note = new TimelineMax()
.add(TweenMax.to(E("#step04_highlight"), 0.2, {strokeDashoffset: 0, ease:Linear.easeNone}))
.add(TweenMax.to(E("#step04_line"), 0.2, {strokeDashoffset: 0, ease:Linear.easeNone}))
.add(TweenMax.to(E("#step04_info_box"), 0.2, {height: step04_info_box_height, display: "block", padding: 10, ease:Linear.easeNone}))
.pause();

new ScrollMagic.Scene({
    triggerElement: "#section-tutorial",
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

// Section Tutorial Phone 5th Step
var step05_info_box_height = getInfoBoxHeight(E("#step05_info_box"));
var tween_step05note = new TimelineMax()
.add(TweenMax.fromTo(E("#tut-step"), 0.2, {backgroundPosition: "-646px 0px"}, {backgroundPosition: "-969px 0px", ease:Linear.easeNone}))
.add(TweenMax.to(E("#step05_info_box"), 0.2, {height: step05_info_box_height, display: "block", padding: 10, ease:Linear.easeNone}));

new ScrollMagic.Scene({
    triggerElement: "#section-tutorial",
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
