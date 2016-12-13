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
  // Toggle drop down menu
  $('.dropdown-toggle').dropdown();
  // Hamburger menu overlay
  var overlay = new TimelineMax({paused:true});
      overlay.to($('.header__hamburger-menu--overlay'), 0.25, { autoAlpha: 1 });
             //.staggerFrom($('nav ul li a'), 0.25, { autoAlpha:0, scale: 1.5, cycle: {x: [-25, 25]}, ease: Expo.easeOut}, 0.25);
  $('.header__hamburger-menu').on('click', function() {
    if (!$(this).hasClass('active')) {
      $(this).addClass('active');
      overlay.timeScale(1).play();
    } else {
      $(this).removeClass('active');
      overlay.timeScale(5).reverse();
    }
  });
  // Hamburger menu overlay - close on clicking link
  $('nav li a').on('click', function() {
    $('.header__hamburger-menu').removeClass('active');
    overlay.timeScale(5).reverse();
  });
