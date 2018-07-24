var pagetop, yPos;
var scrollTrigger = 0;
function yScroll(){
  let pagetop = document.getElementById('pagetop');
  let menu = document.getElementById('menu');
  let headingName = document.getElementById('heading-name');
  let rotatorOne = document.getElementById('rotator-one');
  let pOne = document.getElementById('p-one');
  let tech = document.getElementById('tech');
  let edu = document.getElementById('edu');
  let networkI1 = document.getElementById('network-image1');
  let networkI2 = document.getElementById('network-image2');
  let networkI3 = document.getElementById('network-image3');
  let processLeft = document.getElementsByClassName('process-left');
  let processRight = document.getElementsByClassName('process-right');
  let productProcess = document.getElementById('product-process');
  let productTitle = document.getElementById('product-title');
  let processListLeft = document.getElementById('list-process-left');
  let processListRight = document.getElementById('list-process-right');
  let pfer = document.getElementById('pfer');
  let pfer2 = document.getElementsByClassName('pfer2');
  let fitImage = document.getElementsByClassName('fitsite-img');





  let yPos = window.pageYOffset;

  let windowWidth = window.innerWidth;
  let screenMulti = 1;
  let smallScreen = 0.4;
  let smallerScreen = 1;
  let bigScreen = 1.4;

  if (windowWidth > 800 && windowWidth < 1900) {
    screenMulti = 1;
  } else if (windowWidth > 1900) {
    screenMulti = bigScreen;
  } else if (windowWidth < 800) {
    screenMulti = smallScreen;
  } else if (windowWidth < 500) {
    screenMulti = smallerScreen;
  }

  let techEduCrunch = 1000 * screenMulti,

      pferFade = 1400 * screenMulti,
      firstFitRow = 1700 * screenMulti,
      secondFitRow = 2000 * screenMulti,
      thirdFitRow = 2200 * screenMulti,

      firstRotator = 2500 * screenMulti,
      secondRotator = 2700 * screenMulti,
      thirdRotator = 3000 * screenMulti,
      fourthRotator = 3500 * screenMulti,

      processSlideIn = 4000 * screenMulti;


  if(yPos > 400) {
    pagetop.style.height = "85px";
    pagetop.style.paddingTop = "8px";
    headingName.style.fontSize = "25px";
    headingName.style.marginTop = "0px";
  }

  if (yPos > processSlideIn) {
    for (let i = 0; i < 5; i++) {
      let transDel = `${300 * i}ms`
      processLeft[i].style.transitionDelay = transDel;
      processRight[i].style.transitionDelay = transDel;
      processLeft[i].style.marginLeft = "0";
      processRight[i].style.marginLeft = "0";
    }
  } else if(yPos > fourthRotator){
    networkI3.style.transform = "rotateY(0deg)";
  } else if(yPos > thirdRotator){
    networkI2.style.transform = "rotateY(0deg)";
  } else if(yPos > secondRotator){
    networkI1.style.transform = "rotateY(0deg)";
  } else if(yPos > firstRotator){
    pagetop.style.height = "85px";
    pagetop.style.paddingTop = "8px";
    headingName.style.fontSize = "25px";
    headingName.style.marginTop = "0px";
    rotatorOne.style.transform = "rotate(0deg)";
    pOne.style.marginLeft = "0px";
    pOne.style.backgroundColor = "white";
    pOne.style.color = "black";
    scrollTrigger += 1;
  } else if(yPos > thirdFitRow) {
    pfer2[2].style.opacity = "1";
    fitImage[2].style.opacity = "1";
  } else if(yPos > secondFitRow) {
    pfer2[1].style.opacity = "1";
    fitImage[1].style.opacity = "1";
  } else if(yPos > firstFitRow) {
    pfer2[0].style.opacity = "1";
    fitImage[0].style.opacity = "1";
  } else if(yPos > pferFade) {
    pfer.style.opacity = "1";


  } else if(yPos > techEduCrunch){
    pagetop.style.height = "85px";
    pagetop.style.paddingTop = "8px";
    headingName.style.fontSize = "25px";
    headingName.style.marginTop = "0px";
    tech.style.color = "white";
    tech.style.width = "35%";
    edu.style.width = "45%";
    edu.style.marginLeft = "0";
    edu.style.color = "black";
  } else if(yPos > 600){
    pagetop.style.height = "85px";
    pagetop.style.paddingTop = "8px";
    headingName.style.fontSize = "25px";
    headingName.style.marginTop = "0px";
    scrollTrigger += 1;
  } else if (yPos > 250){
    pagetop.style.height = "120px";
    pagetop.style.paddingTop = "25px";
    pagetop.style.transition = "height 0.3s linear 0s, padding 0.3s linear 0s";
    headingName.style.fontSize = "35px";
    headingName.style.marginTop = "0px";
    menu.style.height = "50px";
    scrollTrigger += 1;
  } else if(scrollTrigger === 0){
    pagetop.style.height = `${100 - (yPos / 4)}%`
  } else if (yPos < 150 && scrollTrigger > 0) {
    pagetop.style.height = `97%`;
  }
}
window.addEventListener("scroll", yScroll);

function topFunction(yPos) {
  document.body.scrollTop = yPos;
  document.documentElement.scrollTop = yPos;
}

function showDetail(stage) {
  let detail = document.getElementById(stage);
  detail.style.display = "inline-block";
}

function removeDetail(stage) {
  let detail = document.getElementById(stage);
  detail.style.display = "none";
}
