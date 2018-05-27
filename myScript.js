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
  let yPos = window.pageYOffset;
  if(yPos > 1250){
    pagetop.style.height = "85px";
    pagetop.style.paddingTop = "8px";
    headingName.style.fontSize = "25px";
    headingName.style.marginTop = "0px";
    tech.style.color = "white";
    tech.style.width = "35%";
    edu.style.width = "45%";
    edu.style.marginLeft = "0";
    edu.style.color = "black";
  } else if(yPos > 700){
    pagetop.style.height = "85px";
    pagetop.style.paddingTop = "8px";
    headingName.style.fontSize = "25px";
    headingName.style.marginTop = "0px";
    rotatorOne.style.transform = "rotate(0deg)";
    pOne.style.marginLeft = "0px";
    pOne.style.backgroundColor = "beige";
    pOne.style.color = "black";
    scrollTrigger += 1;
  } else if(yPos > 450){
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
  }else if(scrollTrigger === 0){
    pagetop.style.height = `${100 - (yPos / 4)}%`
  }
}
window.addEventListener("scroll", yScroll);

function topFunction(yPos) {
  document.body.scrollTop = yPos;
  document.documentElement.scrollTop = yPos;
}
