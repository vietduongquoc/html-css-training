function myFunction() {
    var x = document.getElementById("header-topnav");
    if (x.className === "header-nav") {
      x.className += " responsive";
    } else {
      x.className = "header-nav";
    }
  }