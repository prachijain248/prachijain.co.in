$(document).ready(function(){
    customBanner();
    smoothscroll();
    fixednav();
});
$(window).load(function(){
    customBanner();
});
function customBanner(){
    var windowheight = $(window).height();
    $(".jumbotron-custom").css({ height: windowheight +'px'})
}
function smoothscroll(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
}
function fixednav(){
    arrowNavigation = $('.navigation-menu-scroll').offset().top + 100;
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= arrowNavigation) {
            $("body").addClass("fixed");
        } else {
            $("body").removeClass("fixed");
        }
    });
}