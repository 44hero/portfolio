// GitBook でもそうですが、全部のタブをチクチク開いて探していかないといけないのは
// けっこうな苦行なので
// デフォルトで全部オープンしておくようにしました。
document.addEventListener("DOMContentLoaded", function() {
    load_navpane();
});

function load_navpane() {
    var width = window.innerWidth;
    if (width <= 1220) {
        return;
    }

    var nav = document.getElementsByClassName("md-nav");
    for(var i = 0; i < nav.length; i++) {
        if (typeof nav.item(i).style === "undefined") {
            continue;
        }

        if (nav.item(i).getAttribute("data-md-level") && nav.item(i).getAttribute("data-md-component")) {
            nav.item(i).style.display = 'block';
            nav.item(i).style.overflow = 'visible';
        }
    }

    var nav = document.getElementsByClassName("md-nav__toggle");
    for(var i = 0; i < nav.length; i++) {
       nav.item(i).checked = true;
    }
    
    // ナビゲーションバーのフォントサイズを階層が深くなるにつれて小さくする
    var navLinks = document.querySelectorAll(".md-nav__link");
    navLinks.forEach(function(navLink) {
        var level = navLink.getAttribute("data-md-level");
        if (level) {
            var fontSize = 1.3 - (parseInt(level) * 0.1); // 階層が深くなるにつれてフォントサイズを小さくする
            navLink.style.fontSize = fontSize + "rem";
        }
    });
}