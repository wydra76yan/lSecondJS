let i = 0;
let images = [];
let time = 4000;
let slide = document.getElementById('slide');

images[0] = "../images/FirstSliderImage.jpg";
images[1] = "../images/SecondSliderImage.jpg";
images[2] = "../images/ThirdSliderImage.jpg";

function changeImg(){
    //slide.classList.toggle('fadeIn');
    document.getElementById('slide').src = images[i];
    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }
    //setTimeout('slide.classList.toggle(\'fadeOut\')',2000);
    slide.classList.toggle('fadeOut');
    setTimeout("changeImg()", time);


}
 slide.classList.toggle('fadeIn');
window.onload=changeImg;
