  var pagetop, yPos;
  var scrollTrigger = 0;
  function yScroll(){
    pagetop = document.getElementById('pagetop');
    menu = document.getElementById('menu');
    headingName = document.getElementById('heading-name');
    yPos = window.pageYOffset;
    if(yPos > 400){
      pagetop.style.height = "36px";
      pagetop.style.paddingTop = "8px";
      headingName.style.fontSize = "25px";
      headingName.style.marginTop = "0px";
      menu.style.height = "0px";
    } else if (yPos > 200){
      pagetop.style.height = "120px";
      pagetop.style.paddingTop = "25px";
      headingName.style.fontSize = "35px";
      headingName.style.marginTop = "0px";
      menu.style.height = "50px";
      scrollTrigger += 1;
    }else if(scrollTrigger === 0){
      pagetop.style.height = `${100 - (yPos / 4)}%`
    }
  }
  window.addEventListener("scroll", yScroll);
