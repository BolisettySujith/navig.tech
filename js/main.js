//Get the button:
mybutton = document.getElementById("scrollUp");

function scrollFunction() {
  if (
    document.body.scrollTop > sticky ||
    document.documentElement.scrollTop > sticky
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Functional Sticky Navbar
window.onscroll = function () {
  myFunction();
  scrollFunction();
};

var navbar = document.querySelector("nav");
var services = document.querySelector("#features");
console.log(services);
var sticky = services.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

$(document).ready(function () {
  // Preloader
  document.querySelector(".preloader").classList.add("opacity-0");
  setTimeout(function () {
    document.querySelector(".preloader").style.display = "none";
  }, 1000);

  //   Nice Select Initialization
  $("select").niceSelect();
});

// Navbar Open Function on Mobile Menu
function openNav() {
  // const navbar = document.getElementById(".myNav");
  // navbar.style.width = "100%";
  $("#myNav").css("width", "100%");
  // console.log("clicked");
}

// Navbar Close Function on Mobile Menu
function closeNav() {
  $("#myNav").css("width", "0");
}

// cursor movement code

// const cursor = document.querySelector(".cursor");
// const positionElement = (e) => {
//   const mouseY = e.pageY;
//   const mouseX = e.pageX;

//   // cursor.style.transform = `translate3d(${mouseX-5}px, ${mouseY+5}px, 0)`;
//   cursor.style.top = `${mouseY}px`;
//   cursor.style.left = `${mouseX}px`;
// };

// window.addEventListener("mousemove", positionElement);

// click_event = new CustomEvent('click');
// btn_element = cursor;
// btn_element.dispatchEvent(click_event);

const copyrightYear = document.getElementById("copyright-year");

copyrightYear.innerHTML = new Date().getFullYear();
