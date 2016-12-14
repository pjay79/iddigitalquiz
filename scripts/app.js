  // Force scroll to top on refresh + force cache reload
  $(window).on('beforeunload', function(){
    $(window).scrollTop(0);
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
  // Sticky header
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 50) {
      TweenLite.to($('header'), 0.5, {height: "90px", ease: Power4.easeOut});
      TweenLite.to($('.logo'), 0.5, {scale: 0.8, ease: Power4.easeOut});
      TweenLite.to($('main nav'), 0.5, {marginTop: "-10px", ease: Power4.easeOut});
      TweenLite.to($('.header__mobile-content-info'), 0.5, {marginTop: "-10px", ease: Power4.easeOut});
      TweenLite.to($('.header__mobile-content-info p'), 0.5, {paddingTop: "10px", paddingBottom: "10px", ease: Power4.easeOut});
    }
    else {
      TweenLite.to($('header'), 0.5, {height: "100px", ease: Power4.easeOut});
      TweenLite.to($('.logo'), 0.5, {scale: 1, ease: Power4.easeOut});
      TweenLite.to($('main nav'), 0.5, {marginTop: "0", ease: Power4.easeOut});
      TweenLite.to($('.header__mobile-content-info'), 0.5, {marginTop: "0", ease: Power4.easeOut});
      TweenLite.to($('.header__mobile-content-info p'), 0.5, {paddingTop: "20px", paddingBottom: "20px", ease: Power4.easeOut});
    }
  });
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
  // Main animation
  $(window).on('load', function() {
  var main__animation = new TimelineMax({paused:true, delay: 0.25});
  main__animation.set($('.hero'), {visibility: "visible"})
                 .from($('.hero h1'), 1, {autoAlpha: 0, x: "-=100px", ease: Power2.easeOut})
                 .from($('.hero img:first-of-type'), 1, {autoAlpha: 0, scale: 2, rotation: 360, ease: Power2.easeOut}, 0.5)
                 .from($('.hero h2'), 1, {autoAlpha: 0, x: "+=100px",ease: Power2.easeOut}, 1)
                 .from($('.down'), 1, {autoAlpha: 0, y: "-=100px", ease: Bounce.easeOut}, 1.5);
  main__animation.play();
  });
  // ScrollMagic scenes
  var controller = new $.ScrollMagic.Controller();
  var scene1 = new $.ScrollMagic.Scene({triggerElement: "#cinemas-and-food"});
  var cinemasandfood = new TimelineMax();
  cinemasandfood.staggerFrom($('.cinemas-and-food img'), 1.5, {autoAlpha: 0, y: "+=75px", ease: Expo.easeOut}, 0.35, 0);
	scene1.setTween(cinemasandfood);
	scene1.addTo(controller);
