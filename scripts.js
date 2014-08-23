$(document).ready(function(){
        var move = function() {
            var st = $(window).scrollTop();
            var ot = $("#sidebar-anchor").offset().top;
            var ol = $("#sidebar").offset().left;
            var s = $("#sidebar");
            if(st > ot) {
                s.css({
                    position: "fixed",
                        top: "0px"
                });
                s.css('left', ol);
            } else {
                if(st <= ot) {
                    s.css({
                        position: "relative",
                            top: "",
                            left: ""
                    });
                }
            }
            if($("#sidebar-left").length) {
            var otl = $("#sidebar-anchor-left").offset().top;
            var oll = $("#sidebar-left").offset().left; 
            var sl = $("#sidebar-left");
            if(st > otl) {
                sl.css({
                     position: "fixed",
                     top: "0px"
                });
                sl.css('left', oll);
            } else {
                if(st <= otl) {
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
