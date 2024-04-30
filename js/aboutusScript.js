// updates year in footer
const copyrightYear = document.getElementById("copyright-year");


copyrightYear.innerHTML = new Date().getFullYear();

  
  var navbar = document.querySelector("nav");

  
  function myFunction() {
    if (window.pageYOffset > sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
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