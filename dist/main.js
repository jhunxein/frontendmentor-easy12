"use strict";
function onStart() {
    var doc = document;
    var loader = doc.getElementById('loader');
    var article = doc.getElementById('article');
    var footer = doc.getElementById('footer');
    document.body.style.overflow = 'hidden';
    document.body.style.pointerEvents = 'none';
    if (loader && article && footer) {
        setTimeout(function () {
            loader.classList.add('remove');
            article.classList.add('animate-onload');
            footer.classList.add('animate-onload');
            document.body.style.overflow = 'visible';
            document.body.style.pointerEvents = 'all';
        }, 3700);
    }
}
onStart();
