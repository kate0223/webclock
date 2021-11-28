var i = 0;
var images = [];
var slideTime = 3000; // 3 seconds

images[0] = 'https://i.imgur.com/pDfZoLF.png';
images[1] = 'https://i.imgur.com/809dZ0J.png';
images[2] = 'https://i.imgur.com/6r5PQq0.jpeg';

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

