(function(){
  window.devmountain.util = {
    larger_than_mobile: function(){
      return window.innerWidth > 620;
    },
    mobile: function(){
      return window.innerWidth < 621;
    },
  };
}());