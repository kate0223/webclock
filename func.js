var i = 0;
var images = [];
var slideTime = 3600000; // 3 seconds

images[0] = 'https://github.com/kate0223/webclock/blob/main/img/andre-benz-JnB8Gio4GZo-unsplash.jpg?raw=true';
images[1] = 'https://github.com/kate0223/webclock/blob/main/img/andrew-neel-jtsW--Z6bFw-unsplash.jpg?raw=true';
images[2] = 'https://github.com/kate0223/webclock/blob/main/img/john-towner-JgOeRuGD_Y4-unsplash.jpg?raw=true';
images[3] = 'https://github.com/kate0223/webclock/blob/main/img/nick-nice-gPm8h3DS1s4-unsplash.jpg?raw=true';
images[4] = 'https://github.com/kate0223/webclock/blob/main/img/olivier-guillard-xnGu_KGrqX8-unsplash.jpg?raw=true';
images[5] = 'https://github.com/kate0223/webclock/blob/main/img/steve-harvey-U4wcrDteZ2Y-unsplash.jpg?raw=true';
function changePicture() {
    document.body.style.backgroundImage = "url(" + images[i] + ")";

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changePicture, slideTime);
}
window.onload = changePicture;
