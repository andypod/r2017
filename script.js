// script.js
window.onload = function() {
  var menuItems = document.getElementsByClassName('menu-item');
  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', function() {
      alert("In Development!");
    });
  }
}
