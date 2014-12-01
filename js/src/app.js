(function(){
  window.devmountain.App = function(){
    var sticky_nav = new devmountain.StickyNav();
    var scrolling_nav = new devmountain.ScrollingNav();
    this.waypointer = new devmountain.Waypointer();
    this.ui = new devmountain.UI();
  };
}());
