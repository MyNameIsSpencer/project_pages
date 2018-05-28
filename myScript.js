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
  let hatedateI1 = document.getElementById('hatedate-image1');
  let hatedateI2 = document.getElementById('hatedate-image2');
  let hatedateI3 = document.getElementById('hatedate-image3');
  let processLeft = document.getElementsByClassName('process-left');
  let processRight = document.getElementsByClassName('process-right');
  let productProcess = document.getElementById('product-process');
  let productTitle = document.getElementById('product-title');
  let processListLeft = document.getElementById('list-process-left');
  let processListRight = document.getElementById('list-process-right');

  let yPos = window.pageYOffset;

  if(yPos > 400) {
    pagetop.style.height = "85px";
    pagetop.style.paddingTop = "8px";
    headingName.style.fontSize = "25px";
    headingName.style.marginTop = "0px";
  }

  if (yPos > 4700 && yPos < 6000) {
    let listTop = "15vw";
    productTitle.style.top = "5vw";
    productTitle.style.position = "fixed";
    processListLeft.style.top = listTop;
    processListLeft.style.position = "fixed";
    processListRight.style.top = listTop;
    processListRight.style.position = "fixed";
  } else if (yPos > 6000) {
    productTitle.style.display = "none";
    processListLeft.style.display = "none";
    processListRight.style.display = "none";
  }

  for(let i = 0; i < 10; i++) {
    let incrementer = 100
    let scrollDis = 4700 + (i * incrementer);
    let nowItem = processLeft[i];
    if (yPos > scrollDis && yPos < (scrollDis + incrementer)) {
      nowItem.style.marginLeft = "0px";
    }
  }


  if(yPos > 3000){
    hatedateI3.style.transform = "rotateY(0deg)"
  } else if(yPos > 2500){
    hatedateI2.style.transform = "rotateY(0deg)"
  } else if(yPos > 2000){
    hatedateI1.style.transform = "rotateY(0deg)"
  } else if(yPos > 1250){
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
    pOne.style.backgroundColor = "white";
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
