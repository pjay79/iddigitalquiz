$(window).on("beforeunload",function(){$(window).location.reload(!0)});var fullscreen=function(){$("main").css({width:$(window).width(),height:$(window).height()})};fullscreen(),$(window).on("resize",function(){fullscreen()}),$("body").bind("touchstart",function(){});