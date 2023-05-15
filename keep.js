//   nav bar stiky im stilll figuring hiw this shit worke
window.onscroll = function () {
    myFunction();
  };
  
  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;
  
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
  // nav bar js Finished
  
  // Slidin SHiiit
  const menu = document.querySelector(".menu__list");
  menu.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("menu__link")) {
      menu.style.setProperty(
        "--underline-width",
        `${event.target.offsetWidth}px`
      );
      menu.style.setProperty(
        "--underline-offset-x",
        `${event.target.offsetLeft}px`
      );
    }
  });
  menu.addEventListener("mouseleave", () =>
    menu.style.setProperty("--underline-width", "0")
  );
  // Slidin SHiiit
  
  
  // Owl Coresell
  $('document').ready(function() {
    $('#doctorSlideshow').owlCarousel({
      nav: true,
      dots: false,
      // navText: ["<span class='mai-arrow-back'></span>", "<span class='mai-arrow-forward'></span>"],
      // responsive: {
      //   0: {
      //     items: 1
      //   },
      //   576: {
      //     items: 2
      //   },
      //   992: {
      //     items: 3
      //   }
      // }
    });
  });
  
    // WOW
    
    $('document').ready(function() {
        // Tooltips
        $('[data-toggle="tooltip"]').tooltip();
    
        // Popovers
        $('[data-toggle="popover"]').popover();
    
        // Page scroll animate
        new WOW().init();
    });
    // 
    












































    //   nav bar stiky im stilll figuring hiw this shit worke
window.onscroll = function () {
  myFunction();
};


var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
// nav bar js Finished

// 


//back Top started

$('document').ready(function() {
  // Back to top
  var backTop = $(".back-to-top");

  $(window).scroll(function() {
    if($(document).scrollTop() > 400) {
      backTop.css('visibility', 'visible');
    }
    else if($(document).scrollTop() < 400) {
      backTop.css('visibility', 'hidden');
    }

   
  });

  backTop.click(function() {
    $('html').animate({
      scrollTop: 0
    }, 1000);
    return false;
  });

});

// Back to top ENDED

  // WOW
  
  $('document').ready(function() {
    // Tooltips
    $('[data-toggle="tooltip"]').tooltip();
  
    // Popovers
    $('[data-toggle="popover"]').popover();
  
    // Page scroll animate
    new WOW().init();
  });
  // 
  
// Counterrr section Biaaaaatch


// Mega menu ,menu and header nav bar start
const menu = document.querySelector(".menu");
 const menuMain = menu.querySelector(".menu-main");
 const goBack = menu.querySelector(".go-back");
 const menuTrigger = document.querySelector(".mobile-menu-trigger");
 const closeMenu = menu.querySelector(".mobile-menu-close");
 let subMenu;
 menuMain.addEventListener("click", (e) =>{
 	if(!menu.classList.contains("active")){
 		return;
 	}
   if(e.target.closest(".menu-item-has-children")){
   	 const hasChildren = e.target.closest(".menu-item-has-children");
      showSubMenu(hasChildren);
   }
 });
 goBack.addEventListener("click",() =>{
 	 hideSubMenu();
 })
 menuTrigger.addEventListener("click",() =>{
 	 toggleMenu();
 })
 closeMenu.addEventListener("click",() =>{
 	 toggleMenu();
 })
 document.querySelector(".menu-overlay").addEventListener("click",() =>{
 	toggleMenu();
 })
 function toggleMenu(){
 	menu.classList.toggle("active");
 	document.querySelector(".menu-overlay").classList.toggle("active");
 }
 function showSubMenu(hasChildren){
    subMenu = hasChildren.querySelector(".sub-menu");
    subMenu.classList.add("active");
    subMenu.style.animation = "slideLeft 0.5s ease forwards";
    const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
    menu.querySelector(".current-menu-title").innerHTML=menuTitle;
    menu.querySelector(".mobile-menu-head").classList.add("active");
 }

 function  hideSubMenu(){  
    subMenu.style.animation = "slideRight 0.5s ease forwards";
    setTimeout(() =>{
       subMenu.classList.remove("active");	
    },300); 
    menu.querySelector(".current-menu-title").innerHTML="";
    menu.querySelector(".mobile-menu-head").classList.remove("active");
 }
 
 window.onresize = function(){
 	if(this.innerWidth >991){
 		if(menu.classList.contains("active")){
 			toggleMenu();
 		}

 	}
 }



// Mega menu ,menu and header nav bar Ended here









  // Slidin SHiiit
  const menuu = document.querySelector(".menu__list");
  menuu.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("menu__link")) {
      menuu.style.setProperty(
        "--underline-width",
        `${event.target.offsetWidth}px`
      );
      menuu.style.setProperty(
        "--underline-offset-x",
        `${event.target.offsetLeft}px`
      );
    }
  });
  menuu.addEventListener("mouseleave", () =>
    menuu.style.setProperty("--underline-width", "0")
  );
  // Slidin SHiiit
  

  window.onscroll = function () {
    myFunction();
  };
  


// Back to top










// Second JS COUNTER

var start = 0;
var value = document.querySelector("#sel2").getAttribute("data-to");
var id = "#sel2";

var intervalId = setInterval(function() {
  if (start < value && start < 85) {
    start++;
    document.querySelector(id).innerHTML = start;
  } else {
    clearInterval(intervalId);
  }
}, 40);


