(function(){
  window.devmountain.UI = function(){
    var init = function(){
      bind_to_namespace();
    };
    var activate = function(event, options){
      $('.waypoint_reached').removeClass('waypoint_reached');
      options.element.addClass('waypoint_reached');
      if(options.complete){
        options.complete();
      }
    };
    var bind_to_namespace = function(){
      $(devmountain).on('waypoint',activate);
    };
    init();
  };
}());
