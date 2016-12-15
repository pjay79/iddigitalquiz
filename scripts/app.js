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
  // Toggle drop down menu
  $('.dropdown-toggle').dropdown();
  // Hamburger menu overlay
  var overlay = new TimelineMax({paused:true});
      overlay.to($('.header__hamburger-menu--overlay'), 0.25, { autoAlpha: 1 });
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
  // On load
  $(window).on('load', function() {
  // Preloader
  $('.preloader__wrapper').fadeOut('slow');
  // Hero animation
  var main__animation = new TimelineMax({paused:true, delay: 0.25});
  main__animation.set($('.hero'), {visibility: "visible"})
                 .from($('.hero h1'), 1, {autoAlpha: 0, x: "-=100px", ease: Power2.easeOut})
                 .from($('.hero img:first-of-type'), 1, {autoAlpha: 0, scale: 2, rotation: 360, ease: Power2.easeOut}, 0.5)
                 .from($('.hero h2'), 1, {autoAlpha: 0, x: "+=100px",ease: Power2.easeOut}, 1)
                 .from($('.down'), 1, {autoAlpha: 0, y: "-=100px", ease: Bounce.easeOut}, 1.5);
  main__animation.play();
  });
  // Init ScrollMagic controller
  var controller = new $.ScrollMagic.Controller();
  // ScrollMagic scene
  var scene1 = new $.ScrollMagic.Scene({triggerElement: ".cinemas-and-food"});
  var cinemasandfood = new TimelineMax();
  cinemasandfood.staggerFrom($('.cinemas-and-food img'), 1.5, {autoAlpha: 0, y: "+=75px", ease: Expo.easeOut}, 0.35, 0);
	scene1.setTween(cinemasandfood);
	scene1.addTo(controller);
  // Fade section headings in
  $('section').each(function(){
		var headings = new $.ScrollMagic.Scene({triggerElement: this, duration: "90%", triggerHook: 0.9});
	      headings.setTween(TweenLite.from(this.children[0], 0.5, {autoAlpha: 0, scale: 0, y: "+=50px", ease: Power2.easeOut}));
		    headings.addTo(controller);
	});
  // Fade footer heading in
    var footer = new $.ScrollMagic.Scene({triggerElement: "#footer", duration: "90%", triggerHook: 0.9});
        footer.setTween(TweenLite.from($('footer h2'), 0.5, {autoAlpha: 0, scale: 0, y: "+=50px", ease: Power2.easeOut}));
        footer.addTo(controller);
  // Fade carousels in
  $('.carousel.slide').each(function(){
		var headings = new $.ScrollMagic.Scene({triggerElement: this, duration: "100%", triggerHook: 1});
	      headings.setTween(TweenLite.from(this, 0.5, {autoAlpha: 0, y: "+=50px", ease: Power2.easeOut}));
		    headings.addTo(controller);
	});
  // Scroll
  $('.up').click(function(){
      $("html, body").animate({scrollTop: 0}, 1000);
  });
