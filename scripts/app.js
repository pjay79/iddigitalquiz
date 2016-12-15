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
  // ScrollMagic scenes
  var scene1 = new $.ScrollMagic.Scene({triggerElement: ".cinemas-and-food"});
  var cinemasandfood = new TimelineMax();
  cinemasandfood.staggerFrom($('.cinemas-and-food img'), 1.5, {autoAlpha: 0, y: "+=75px", ease: Expo.easeOut}, 0.35, 0);
	scene1.setTween(cinemasandfood);
	scene1.addTo(controller);

  var scene2 = new $.ScrollMagic.Scene({triggerElement: ".news-and-events"});
  var newsandevents = new TimelineMax();
  newsandevents.from($('.news-and-events h2'), 0.5, {autoAlpha: 0, y: "+=50px", ease: Power2.easeOut})
               .from($('.news-and-events img:first-of-type'), 0.5, {autoAlpha: 0,scale: 2, rotation: 360, ease: Power2.easeOut}, 0.25)
               .from($('#news-and-events__carousel'), 0.5, {autoAlpha: 0, y: "+=100px", ease: Power2.easeOut}, 0.25);
	scene2.setTween(newsandevents);
	scene2.addTo(controller);

  var scene3 = new $.ScrollMagic.Scene({triggerElement: ".offers-and-promotions"});
  var offersandpromotions = new TimelineMax();
  offersandpromotions.from($('.offers-and-promotions h2'), 0.5, {autoAlpha: 0, y: "+=50px", ease: Power2.easeOut})
                     .from($('.offers-and-promotions img:first-of-type'), 0.5, {autoAlpha: 0,scale: 2, rotation: 360, ease: Power2.easeOut}, 0.25)
                     .from($('#offers-and-promotions__carousel'), 0.5, {autoAlpha: 0, y: "+=100px", ease: Power2.easeOut}, 0.25);
	scene3.setTween(offersandpromotions);
	scene3.addTo(controller);

  var scene4 = new $.ScrollMagic.Scene({triggerElement: ".centre-location"});
  var centrelocation = new TimelineMax();
  centrelocation.from($('.centre-location h2'), 0.5, {autoAlpha: 0, y: "+=50px", ease: Power2.easeOut})
                .from($('.centre-location .icon-grey'), 0.5, {autoAlpha: 0,scale: 2, rotation: 360, ease: Power2.easeOut}, 0.25)
                .staggerFrom($('.centre-location .col-md-6'), 0.25, {autoAlpha: 0, y: "+=50px", ease: Power2.easeOut}, 0.2);
  scene4.setTween(centrelocation);
  scene4.addTo(controller);

  var scene5 = new $.ScrollMagic.Scene({triggerElement: ".sign-up"});
  var signup = new TimelineMax();
  signup.from($('.sign-up h2'), 0.5, {autoAlpha: 0, y: "+=50px", ease: Power2.easeOut})
        .from($('.sign-up img:first-of-type'), 0.5, {autoAlpha: 0,scale: 2, rotation: 360, ease: Power2.easeOut}, 0.25)
        .from($('.sign-up p'), 0.5, {autoAlpha: 0, y: "+=50px", ease: Power2.easeOut}, 0.25)
        .staggerFrom($('.form-group'), 0.5, {autoAlpha: 0, y: "+=50px", ease: Power2.easeOut}, 0.2);
  scene5.setTween(signup);
  scene5.addTo(controller);

  var scene6 = new $.ScrollMagic.Scene({triggerElement: "footer", triggerHook: 0.8});
  var follow = new TimelineMax();
  follow.from($('footer h2'), 0.5, {autoAlpha: 0, y: "+=50px", ease: Power2.easeOut});
  scene6.setTween(follow);
  scene6.addTo(controller);

  // Scroll
  $('.up').on('click', function(){
      $("html, body").animate({scrollTop: 0}, 1000);
  });
