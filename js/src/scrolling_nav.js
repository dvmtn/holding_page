(function(){
  window.devmountain.ScrollingNav = function(){
    var calculate_target_top = function(event){
      var target = $($(event.currentTarget).attr('href'));
      return target.offset().top - $('nav').height();
    };
    var add_class = function(event){
      $('header nav a.active').removeClass('active');
      $(event.currentTarget).addClass('active');
    };
    var link_clicked = function(event){
      event.preventDefault();
      add_class(event);
      $(document.body).animate({scrollTop:calculate_target_top(event)}, 400);
    };
    $('nav a').click(link_clicked);
  };
}());