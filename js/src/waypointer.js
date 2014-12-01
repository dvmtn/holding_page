(function(){
  window.devmountain.Waypointer = function(){

    var init = function(){
      bind_to_dom();
    };

    var bind_to_dom = function(){

      $('section').waypoint( function(direction){
        $(devmountain).trigger('waypoint', {
          element: $(this),
          direction: direction
        });
      });

      $('nav').waypoint( function(direction){
        $(devmountain).trigger('waypoint_nav', {
          element: $(this),
          direction: direction
        });
      });

    };

    init();
  };
}());
