$(document).ready(function(){
    var ot = $("#sidebar-anchor").offset().top;
    var ol = $("#sidebar").offset().left;
    var s = $("#sidebar");
    var otn = $("#nav-anchor").offset().top;
    var n = $("nav");
    var b = $("#buffer");
    var h = $("#name");
    var hn = $("#hidden_title");
    var diff = ot - otn;

    var mq = window.matchMedia( "(min-width: 640px)" );

    var move = function() {
        var st = $(window).scrollTop();
        // Header scrolls down with page
        if(st <= otn) {
            hn.hide();
            var dist = (st/otn) * 100;
            var ht = (30 + dist/2).toString() + "%";
            h.css({
                top: ht
            });
        }

        // Once header is scrolled off page, show the home link
        if(st > otn) {
            hn.show();
        }

        // Once window scrolls past anchor, nav and sidebars become fixed
        if(st > otn) {
            s.css('position', 'fixed');
            s.css('top', diff);
            s.css('left', ol);
            b.show();
        } else {
            if(st <= otn) {
                s.css({
                    position: "relative",
                    top: "",
                    left: ""
                });
                b.hide();
            }
        }
        if(st > otn) {
            n.css({
                position: "fixed",
                top: "0px"
            });
        } else {
            if(st <= otn) {
                n.css({
                    position: "relative",
                    top: "",
                });
            }
        }
        if($("#sidebar-left").length) {
            var oll = $("#sidebar-left").offset().left; 
            var sl = $("#sidebar-left");
            if(st > otn) {
                sl.css('position', 'fixed');
                sl.css('top', diff);
                sl.css('left', oll);
            } else {
                if(st <= otn) {
                    sl.css({
                        position: "relative",
                        top: "",
                        left: ""
                    });
                }
            }
        }
    };

    var move_mobile = function() {
        var st = $(window).scrollTop();

        // Once header is scrolled off page, show the home link
        if(st > otn) {
            hn.show();
        }

        // Once window scrolls past anchor, nav and sidebars become fixed
        if(st > otn) {
            s.show();
            b.show();
        } else {
            if(st <= otn) {
                s.hide();
                b.hide();
            }
        }
        if(st > otn) {
            n.css({
                position: "fixed",
                top: "0px"
            });
        } else {
            if(st <= otn) {
                n.css({
                    position: "relative",
                    top: "",
                });
            }
        }
        if($("#sidebar-left").length) {
            var sl = $("#sidebar-left");
            if(st > otn) {
                sl.show();
            } else {
                if(st <= otn) {
                    sl.hide();
                }
            }
        }
    };

    if (mq.matches) {
        $(window).scroll(move);
        move();
    } else {
        $(window).scroll(move_mobile);
        move_mobile();
    }
});
