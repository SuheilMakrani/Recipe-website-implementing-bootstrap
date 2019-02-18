var i = 0;

function mask(a) {
    "use strict";
    i++;
    if (i < a) {
        $("#logo").attr("style", "-webkit-mask:-webkit-gradient(radial, 17 17, " + i + ", 17 17, " + (i + 15) + ", from(rgb(0, 0, 0)), color-stop(0.5, rgba(0, 0, 0, 0.2)), to(rgb(0, 0, 0)));");
        setTimeout(function() {
            mask(a);
        }, 20 - i);
    } else {
        i = 0;
    }
}

$("#logo").on("mouseenter", function() {
    "use strict";
    mask(200);
});