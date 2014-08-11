$(document.ready(function(){
    function moveScroller() {
        var move = function() {
            var st = $(window).scrollTop();
            var ot = $("#sidebar-anchor").offset().top;
            var s = $("#sidebar");
            if(st > ot) {
                s.css({
                    position: "fixed",
                    top: "0px"
                });
            } else {
                if(st <= ot) {
                    s.css({
                        position: "relative",
                        top: ""
                    });
                }
            }
        };
        $(window).scroll(move);
        move();
    }
});
