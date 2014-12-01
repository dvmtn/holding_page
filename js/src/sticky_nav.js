(function(){
  window.devmountain.StickyNav = function(){
    var scroll_near_unstuck_top = function(){
      return window.scrollY < $('header').height() - $('header nav').height();
    };

    var scroll_near_stuck_top = function(){
      return window.scrollY < $('header').height();
    };

    var already_stuck = function(){
      return $('header nav').hasClass('stuck');
    };

    var needs_sticking = function(){
      return !already_stuck() && devmountain.util.larger_than_mobile() && !scroll_near_unstuck_top();
    };

    var needs_unsticking = function(){
      return already_stuck() && scroll_near_stuck_top();
    };

    var stick_tests = function(){
      if(needs_sticking()){
        $('header').css('padding-bottom', $('header nav').height());
        $('header nav').addClass('stuck');
      }
      if(needs_unsticking()){
        $('header').css('padding-bottom', 0);
        $('header nav').removeClass('stuck');
      }
    };

    $(window).scroll(stick_tests);
  };
}());