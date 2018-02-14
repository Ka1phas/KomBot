var controller = new ScrollMagic.Controller();

var typed = new Typed('#questions-cycle', {
    strings: [
        "<span style=\"color:#f05500\">Wo ist der Raum LE105?</span>",
        "<span style=\"color:#5500f0\">Wie kann ich mich zu Prüfungen anmelden?</span>",
        "<span style=\"color:#ab00ab\">Was sind Versuchspersonstunden?</span>",
        "<span style=\"color:#0000e0\">Wie teuer ist das nächste Semester?</span>",
        "<span style=\"color:#335555\">Wo ist die Vorlesung InfoN?</span>",
        "<span style=\"color:#9921ab\">Was gibt's zu essen?</span>"
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
.addTo(controller);

// Section 01 More Info Hide
new ScrollMagic.Scene({
    triggerElement: "#section01",
    triggerHook: "onLeave",
    duration: 100
})
.setTween("#start-more-info", {opacity: 0, ease: Linear.easeNone})
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
.addTo(controller);

// === Section Features ===
// Section Features Parallax
new ScrollMagic.Scene({
    triggerElement: "#section-features",
    triggerHook: "onEnter",
    duration: 5200
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
.fromTo(E("#feature-location-marker02"), 1, {left:"35%", top:0, opacity:0}, {left:"35%", top:"78%", opacity: 1})
.to(E("#feature-lecture"), 1, {left: 0, delay: 1})
.fromTo(E("#feature-lecture-title01"), 1, {autoAlpha:0, left:"200%"}, {autoAlpha:1,left:0})
.fromTo(E("#feature-lecture-search01"), 1, {paddingLeft:0, paddingRight:0, width:0}, {paddingLeft:5, paddingRight:5, width: "100%"})
//.to(E("#feature-lecture-overlay01"), 1.5, {right:0, ease:Expo.easeIn})
//.to(E("#feature-lecture-overlay01"), 1.5, {right:"100%", ease:Expo.easeOut})
.fromTo(E("#feature-lecture-infon .feature-lecture-title"), 1, {opacity: 0.5}, {opacity: 1}, "-=1")
.fromTo(E("#feature-lecture-infon .feature-lecture-info-content"), 1, {opacity: 0.5}, {opacity: 1}, "-=1")
.fromTo(E("#feature-lecture-response01"), 1, {left: "200%"}, {left: 0}, "-=2")
.fromTo(E("#feature-lecture-title02"), 1, {autoAlpha:0, left:"200%"}, {autoAlpha:1,left:0})
.fromTo(E("#feature-lecture-search02"), 1, {paddingLeft:0, paddingRight:0, width:0}, {paddingLeft:5, paddingRight:5, width: "100%"})
//.to(E("#feature-lecture-overlay02"), 1.5, {right:0, ease:Expo.easeIn})
//.to(E("#feature-lecture-overlay02"), 1.5, {right:"100%", ease:Expo.easeOut})
.fromTo(E("#feature-lecture-psycho .feature-lecture-title"), 1, {opacity: 0.5}, {opacity: 1}, "-=1")
.fromTo(E("#feature-lecture-psycho .feature-lecture-info-content"), 1, {opacity: 0.5}, {opacity: 1}, "-=1")
.fromTo(E("#feature-lecture-response02"), 1, {left: "200%"}, {left: 0}, "-=2")
.to(E("#feature-faq"), 1, {right: 0, delay :1})
.fromTo(E("#feature-faq .feature-faq-left-title"), 1, {autoAlpha:0,right:"200%"}, {autoAlpha:1,right:0})
.fromTo(E("#feature-faq .feature-faq-left01"), 1, {paddingLeft:0, paddingRight:0, width:0}, {paddingLeft:5, paddingRight:5, width:"100%"}, "-=0.5")
.fromTo(E("#feature-faq .feature-faq-left-response01"), 1, {autoAlpha:0,right:"200%"}, {autoAlpha:1,right:0}, "-=0.5")
.fromTo(E("#feature-faq .feature-faq-left02"), 1, {paddingLeft:0, paddingRight:0, width:0}, {paddingLeft:5, paddingRight:5, width:"100%"}, "-=0.5")
.fromTo(E("#feature-faq .feature-faq-left-response02"), 1, {autoAlpha:0,right:"200%"}, {autoAlpha:1,right:0}, "-=0.5")
.fromTo(E("#feature-faq .feature-faq-right-title"), 1, {autoAlpha:0,left:"200%"}, {autoAlpha:1,left:0}, "-=3")
.fromTo(E("#feature-faq .feature-faq-right01"), 1, {paddingLeft:0, paddingRight:0, width:0}, {paddingLeft:5, paddingRight:5, width:"100%"}, "-=2.5")
.fromTo(E("#feature-faq .feature-faq-right-response01"), 1, {autoAlpha:0,left:"200%"}, {autoAlpha:1,left:0}, "-=2")
.fromTo(E("#feature-faq .feature-faq-right02"), 1, {paddingLeft:0, paddingRight:0, width:0}, {paddingLeft:5, paddingRight:5, width:"100%"}, "-=1.5")
.fromTo(E("#feature-faq .feature-faq-right-response02"), 1, {autoAlpha:0,left:"200%"}, {autoAlpha:1,left:0}, "-=1")
.to(E("#feature-food"), 1, {top:0, delay:1})
.fromTo(E("#feature-food-title"), 1, {autoAlpha:0,left:"200%"},{autoAlpha:1,left:0})
.fromTo(E("#feature-food-search"), 1, {paddingLeft:0,paddingRight:0,width:0}, {paddingLeft:5,paddingRight:5,width:"100%"})
.fromTo(E("#feature-food-response"), 1, {autoAlpha:0,left:"200%"},{autoAlpha:1,left:0})
.fromTo(E("#feature-food img"), 1, {opacity:0.2}, {opacity: 1}, "-=3");

// Section Features Pin Info Box
new ScrollMagic.Scene({
    triggerElement: "#section-features",
    triggerHook: "onCenter",
    offset: 400,
    duration: 5200
})
.setPin("#feature-content-wrap")
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#section-features",
    triggerHook: "onCenter",
    offset: 400,
    duration: 4800
})
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
.addTo(controller);

// Section Tutorial Pin Phone
new ScrollMagic.Scene({
    triggerElement: "#section-tutorial",
    triggerHook: "onCenter",
    offset: 400,
    duration: 2600
})
.setPin("#tut-phone")
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
        TweenMax.fromTo(E("#tut-step"), 0.2, {backgroundPosition: "0px 0px"}, {backgroundPosition: "-323px 0px", ease:Linear.easeNone});
        tween_step02note.play();
    } else if(e.type == "leave") {
        tween_step02note.reverse(0);
        if (e.scrollDirection == "REVERSE") {
            TweenMax.to(E("#tut-step"), 0.2, {backgroundPosition: "0px 0px", ease:Linear.easeNone});
        }
    }
})
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
.addTo(controller);

// Section Tutorial Phone 5th Step
var step05_info_box_height = getInfoBoxHeight(E("#step05_info_box"));
var tween_step05note = new TimelineMax()
//.add(TweenMax.fromTo(E("#tut-step"), 0.2, {backgroundPosition: "-646px 0px"}, {backgroundPosition: "-969px 0px", ease:Linear.easeNone}))
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
.addTo(controller);

// Section Design Parallax
new ScrollMagic.Scene({
    triggerElement: "#section-design",
    triggerHook: "onEnter",
    duration: E("#section-design .parallax-box").offsetHeight
})
.setTween("#section-design > div.parallax-box", {y: "20%", ease: Linear.easeNone})
.addTo(controller);

// Section Design Workshop Pictures
var tween_workshop_pictures = new TimelineMax()
.fromTo(E("#workshop-picture01"), 3, {opacity:0,left:"-50%",rotation:-90}, {opacity:1,left:"-5%",rotation:-15,ease:Back.easeOut})
.fromTo(E("#workshop-picture02"), 3, {opacity:0,right:"-50%",rotation:90}, {opacity:1,right:"-5%",rotation:15,ease:Back.easeOut}, "-=2")
.fromTo(E("#workshop-picture03"), 3, {opacity:0,left:"-50%",rotation:-80}, {opacity:1,left:"-5%",rotation:5,ease:Back.easeOut})
.fromTo(E("#workshop-picture04"), 3, {opacity:0,right:"-50%",rotation:90}, {opacity:1,right:"-5%",rotation:3,ease:Back.easeOut}, "-=2")
.fromTo(E("#workshop-picture05"), 3, {opacity:0,left:"-50%",rotation:-60}, {opacity:1,left:"-5%",rotation:-3,ease:Back.easeOut})
.fromTo(E("#workshop-picture06"), 3, {opacity:0,right:"-50%",rotation:90}, {opacity:1,right:"-5%",rotation:-15,ease:Back.easeOut}, "-=2");

var tween_workshop_pictures_merge = new TimelineMax()
.to(E("#workshop-picture01"), 3, {left:200,rotation:0,top:650})
.to(E("#workshop-picture02"), 3, {left:200,rotation:0,top:650})
.to(E("#workshop-picture03"), 3, {left:200,rotation:0,top:650})
.to(E("#workshop-picture04"), 3, {left:200,rotation:0,top:650})
.to(E("#workshop-picture05"), 3, {left:200,rotation:0,top:650})
.to(E("#workshop-picture06"), 3, {left:200,rotation:0,top:650})
.to(E("#workshop-logo-overlay"), 2, {opacity:1,ease:Expo.easeOut})
.to(E("#workshop-picture01"), 0, {opacity:0})
.to(E("#workshop-picture02"), 0, {opacity:0})
.to(E("#workshop-picture03"), 0, {opacity:0})
.to(E("#workshop-picture04"), 0, {opacity:0})
.to(E("#workshop-picture05"), 0, {opacity:0})
.to(E("#workshop-picture06"), 0, {opacity:0})
.to(E("#workshop-logo"), 3, {opacity:1}, "-=2")
.to(E("#workshop-logo-overlay"), 2, {opacity:0,ease:Expo.easeIn})

new ScrollMagic.Scene({
    triggerElement: "#section-design",
    triggerHook: "onCenter",
    offset: 100,
    duration: 500
})
.setTween(tween_workshop_pictures)
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#section-design",
    triggerHook: "onCenter",
    offset: 800,
    duration: 600
})
.setTween(tween_workshop_pictures_merge)
.addTo(controller);

/*new ScrollMagic.Scene({
    triggerElement: "#section-design",
    triggerHook: "onCenter",
    offset: 1500,
    duration: 100
})
.setPin("#workshop-picture-wrapper")
.addTo(controller);*/

new ScrollMagic.Scene({
    triggerElement: "#section-design",
    triggerHook: "onCenter",
    duration: 100
})
.setTween(TweenMax.fromTo(E("#gdt-empathize"), 1, {top:00,opacity:0}, {top:80,opacity:1}))
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#section-design",
    triggerHook: "onCenter",
    offset: 200,
    duration: 100
})
.setTween(TweenMax.fromTo(E("#gdt-define"), 1, {top:20,opacity:0}, {top:100,opacity:1}))
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#section-design",
    triggerHook: "onCenter",
    offset: 400,
    duration: 100
})
.setTween(TweenMax.fromTo(E("#gdt-ideate"), 1, {top:80,opacity:0}, {top:160,opacity:1}))
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#section-design",
    triggerHook: "onCenter",
    offset: 1200,
    duration: 100
})
.setTween(TweenMax.fromTo(E("#gdt-prototype"), 1, {bottom:205,opacity:0}, {bottom:125,opacity:1}))
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#section-design",
    triggerHook: "onCenter",
    offset: 1300,
    duration: 100
})
.setTween(TweenMax.fromTo(E("#gdt-test"), 1, {bottom:120,opacity:0}, {bottom:40,opacity:1}))
.addTo(controller);


// Section Team Parallax
new ScrollMagic.Scene({
    triggerElement: "#section-team",
    triggerHook: "onEnter",
    duration: E("#section-team .parallax-box").offsetHeight
})
.setTween("#section-team > div.parallax-box", {y: "20%", ease: Linear.easeNone})
.addTo(controller);

var tween_team = new TimelineMax()
.fromTo(E("#member01"), 1, {padding:0,opacity:0,width:0,height:0}, {padding:15,opacity:1,width:250,height:270})
.fromTo(E("#member02"), 1, {padding:0,opacity:0,width:0,height:0}, {padding:15,opacity:1,width:250,height:270})
.fromTo(E("#member03"), 1, {padding:0,opacity:0,width:0,height:0}, {padding:15,opacity:1,width:250,height:270})
.fromTo(E("#member04"), 1, {padding:0,opacity:0,width:0,height:0}, {padding:15,opacity:1,width:250,height:270})
.fromTo(E("#member05"), 1, {padding:0,opacity:0,width:0,height:0}, {padding:15,opacity:1,width:250,height:270})

new ScrollMagic.Scene({
    triggerElement: "#section-team",
    triggerHook: "onCenter",
    offset: -100,
    duration: 500
})
.setTween(tween_team)
.addTo(controller);
