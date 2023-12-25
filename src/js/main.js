function myFunction() {
  console.log('hello')
  var x = document.getElementById("header-topnav");
  if (x.className === "header-nav") {
    x.className += " responsive";
  } else {
    x.className = "header-nav";
  }
}
