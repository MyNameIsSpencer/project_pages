  var pagetop, yPos;
  function yScroll(){
    pagetop = document.getElementById('pagetop');
    menu = document.getElementById('menu');
    headingName = document.getElementById('heading-name');
    yPos = window.pageYOffset;
    if(yPos > 150){
      pagetop.style.height = "36px";
      pagetop.style.paddingTop = "8px";
      headingName.style.fontSize = "25px";
      menu.style.height = "0px";
    } else {
      pagetop.style.height = "120px";
      pagetop.style.paddingTop = "25px";
      headingName.style.fontSize = "35px";
      menu.style.height = "50px";
    }
  }
  window.addEventListener("scroll", yScroll);

  for(let i = 0; i < 41; i ++) {
    document.write(`<h2>${(i+1)}.  Dummy page content ....`);
  }
