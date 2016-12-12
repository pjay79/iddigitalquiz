  // Force scroll to top on refresh + force cache reload
  $(window).on('beforeunload', function(){
  //$(window).scrollTop(0);
  $(window).location.reload(true);
  });
  // Set 100% viewport width/height to div's
  var fullscreen = function(){
    $('main').css({width: $(window).width(), height: $(window).height()});
  };
  fullscreen();
  // Run the function again in case of window resize
  $(window).on('resize', function() {
    fullscreen();
  });
  // Hover touch
  $('body').bind('touchstart', function(){});
