$(document).ready(function(){
    var ot = $("#sidebar-anchor").offset().top;
    var ol = $("#sidebar").offset().left;
    var s = $("#sidebar");
    var otn = $("#nav-anchor").offset().top;
    var n = $("nav");
    var b = $("#buffer");
    var diff = ot - otn;

    var move = function() {
        var st = $(window).scrollTop();
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
    $(window).scroll(move);
    move();
});
