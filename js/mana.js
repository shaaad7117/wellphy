// nav bar sticky
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

// back to top
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

// wow
$('document').ready(function() {
  // Tooltips
  $('[data-toggle="tooltip"]').tooltip();

  // Popovers
  $('[data-toggle="popover"]').popover();

  // Page scroll animate
  new WOW().init();
});

 // Item Slider
 $('.items-container').slick({
  infinite: true,
  arrows: true,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 991,
    settings: {
      slidesToShow: 2,
      arrows: false
    }
  },
  {
    breakpoint: 525,
    settings: {
      slidesToShow: 1,
      arrows: false
    }
  }]
});


// counter section
var counters = $(".counters-item > strong");
var countersQuantity = counters.length;
var counter = [];

for (i = 0; i < countersQuantity; i++) {
  counter[i] = parseInt(counters[i].getAttribute("data-to"));
}

var count = function(start, value, id) {
  var localStart = start;
  setInterval(function() {
    if (localStart < value && localStart < 4) {
      localStart++;
      document.querySelector("#sel").innerHTML = localStart;
    }
  }, 4000);
}

for (j = 0; j < countersQuantity; j++) {
  count(0, counter[j], "#" + counters[j].sel);
}

// Second JS COUNTER


var start = 0;
var value = document.querySelector("#sel2").getAttribute("data-to");
var id = "#sel2";

var intervalId = setInterval(function() {
  if (start < value && start < 4253) {
    start++;
    document.querySelector(id).innerHTML = start;
  } else {
    clearInterval(intervalId);
  }
}, 1);






// Testimonial Slider
$('.testimonial-carousel').slick({
  infinite: true,
  arrows: false,
  // autoplay: true,
  slidesToShow: 2,
  dots: true,
  slidesToScroll: 2,
  responsive: [{
    breakpoint: 991,
    settings: {
      slidesToShow: 2
    }
  },
  {
    breakpoint: 525,
    settings: {
      slidesToShow: 1
    }
  }]
});









// mega menu, menu and header nav bar start
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
});

menuTrigger.addEventListener("click",() =>{
  toggleMenu();
});

closeMenu.addEventListener("click",() =>{
  toggleMenu();
});

document.querySelector(".menu-overlay").addEventListener("click",() =>{
  toggleMenu();
});

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


// nav bar sticky
window.onscroll = function() {
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

// back to top
$('document').ready(function() {
  // Back to top
  var backTop = $(".back-to-top");

  $(window).scroll(function() {
    if ($(document).scrollTop() > 400) {
      backTop.css('visibility', 'visible');
    } else if ($(document).scrollTop() < 400) {
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

// wow
$('document').ready(function() {
  // Tooltips
  $('[data-toggle="tooltip"]').tooltip();

  // Popovers
  $('[data-toggle="popover"]').popover();

  // Page scroll animate
  new WOW().init();
});

// Item Slider
$('.items-container').slick({
  infinite: true,
  arrows: true,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        arrows: false
      }
    },
    {
      breakpoint: 525,
      settings: {
        slidesToShow: 1,
        arrows: false
      }
    }
  ]
});


$('#contact-form').validate({
  rules: {
    user_name: {
      required: true,
      minlength: 4
    },
    user_email: {
      required: true,
      email: true
    },
    // user_subject: {
    // 	required: false
    // },
    user_message: {
      required: true
    }
  },
  messages: {
    user_name: {
      required: 'Come on, you have a name, don\'t you?',
      minlength: 'Your name must consist of at least 2 characters'
    },
    user_email: {
      required: 'Please put your email address'
    },
    user_message: {
      required: 'Put some messages here?',
      minlength: 'Your name must consist of at least 2 characters'
    }
  },
  submitHandler: function(form) {
    $(form).ajaxSubmit({
      type: 'POST',
      data: $(form).serialize(),
      url: 'sendmail.php',
      success: function() {
        $('#contact-form #success').fadeIn();
      },
      error: function() {
        $('#contact-form #error').fadeIn();
      }
    });
  }
});

// counter section
var counters = $(".counters-item > strong");
var countersQuantity = counters.length;
var counter = [];

for (i = 0; i < countersQuantity; i++) {
  counter[i] = parseInt(counters[i].getAttribute("data-to"));
}

var count = function(start, value, id) {
  var localStart = start;
  setInterval(function() {
    if (localStart < value && localStart < 4) {
      localStart++;
      document.querySelector("#sel").innerHTML = localStart;
    }
  }, 4000);
}

for (j = 0; j < countersQuantity; j++) {
  count(0, counter[j], "#" + counters[j].sel);
}