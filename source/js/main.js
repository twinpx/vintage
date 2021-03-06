var logoArray = [ '/upload/logo-vybor-vkusa.png', '/upload/logo-pomidor.jpg', '/upload/salat.jpg' ];
$( '#logoVyborVkusa' ).attr({ src: logoArray[ Math.floor( Math.random() * logoArray.length )] });

$( '[data-toggle="tooltip"]' ).tooltip();

$(".bj-page-header .bj-logo-space__icon.glyphicon-user").popover({
    html: !0,
    trigger: "click",
    placement: "bottom"
});

$( document ).click( function(e) {
  if ( !$( e.target ).hasClass( 'glyphicon-user' ) && !$(e.target).hasClass( 'popover-content' )) {
    $( ".bj-page-header .bj-logo-space__icon.glyphicon-user" ).popover( 'hide' );
  }
});

$(".bj-page-header__menu-link").click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(".bj-page-header__dropdown article").slideDown();
});
$(".bj-page-header__dropdown article").click(function(e) {
    e.stopPropagation();
});
$(".bj-page-header__dropdown .up").click(function(e) {
    $(this).closest("article").slideUp();
    e.preventDefault();
});
$(document).click(function() {
    $(".bj-page-header__dropdown article").slideUp();
});

if ( document.getElementById( 'viewCounter' )) {
  $.ajax({
    url: $( '#viewCounter' ).data( 'url' ),
    type: 'POST',
    dataType: "json",
    success: function(data) {},
    error: function (a, b, c) {
      if ( window.console ) {
        console.log(a);
        console.log(b);
        console.log(c);
      }
    }
  });
}

$( window ).bind( "scroll", scrollWindow ).scroll();

function scrollWindow(e) {
  
  $( 'form.i-invisible' ).not( '.i-animate' ).each( function() {
    var $form = $( this );
    var bottom = $form.offset().top;
    var extra = 250;
    var scrollToScreen = bottom - document.documentElement.clientHeight + extra;
    if ( window.pageYOffset > scrollToScreen ) {
      $form.addClass( 'i-animate' );
    }
  });
  
}

$("#nav-button").sideNav();

//header search
$(".bj-page-header__search .glyphicon").click(function() {
    $(this).closest(".bj-page-header__search").addClass("i-active").find("input").focus();
});
$(".bj-page-header__search__input").blur(function() {
    $(this).val("").closest(".bj-page-header__search").removeClass("i-active");
});

//filter menu
$(".bj-hidden-link").click(function(e) {
    e.preventDefault();
    var c = $(this);
    return c.hasClass("i-up") ? void c.removeClass("i-up").parent().find(".bj-hidden__hidden").slideUp() : void c.addClass("i-up").parent().find(".bj-hidden__hidden").slideDown();
});

//mobile banner
(function() {
    function a() {
        var mob = "ontouchstart"in document.documentElement;
        return mob && $(document).width() <= 600 ? "mobile" : "desktop";
    }
    function c() {
      //window.location.replace(window.location);
      $.ajax({
        url: $( '#banner-carousel-1' ).data( 'url' ),
        type: $( '#banner-carousel-1' ).data( 'method' ),
        dataType: "html",
        success: function(data) {
          $( '#banner-carousel-1' ).html( html );
        },
        error: function() {}
      });
    }
    function d(a) {
        Cookies.set("mobile", a, {
            expires: 30,
            path: "/",
            domain: window.location.hostname
        });
    }
    var e, f;
    e = a();
    f = Cookies.get("mobile");
    
    if ( !f && e !== f ) {
      d(e);
      c(e);
    }
}());

//subscribe form
( function() {

  $( '.bj-news-unsubscribe-link' ).click( function(e) {
    e.preventDefault();
    
    $( '.bj-news-unsubscribe-form' ).submit();
  });
  
  $( '.bj-news-subscribe-form' ).submit( function(e) {
    e.preventDefault();
    var $form = $( this );
    
    $.ajax({
      url: $form.attr("action"),
      type: $form.attr("method"),
      dataType: "json",
      data: $form.serialize(),
      success: function(data) {
        if ( data.success === 'success' ) {
          $( '.bj-news-subscribe__s .alert-success' ).removeClass( 'hide' );
          $( '.bj-news-subscribe__s .alert-warning' ).addClass( 'hide' );
          $( '.bj-news-subscribe__s .bj-news-subscribe-form' ).addClass( 'hide' );
        } else {
          $( '.bj-news-subscribe__s .alert-warning' ).removeClass( 'hide' );
          $( '.bj-news-subscribe__s .alert-success' ).addClass( 'hide' );
        }
      },
      error: function(a, b, c) {
        $( '.bj-news-subscribe__s .alert-warning' ).removeClass( 'hide' );
        $( '.bj-news-subscribe__s .alert-success' ).addClass( 'hide' );
        
        if ( window.console ) {
          console.log(a);
          console.log(b);
          console.log(c);
        }
      }
    });
    
  });
  
  $( '.bj-news-unsubscribe-form' ).submit( function(e) {
    e.preventDefault();
    
    var $form = $( this );
    $.ajax({
      url: $form.attr("action"),
      type: $form.attr("method"),
      dataType: "json",
      data: $form.serialize(),
      success: function(data) {
        if ( data.success === 'success' ) {
          $( '.bj-news-subscribe__s .alert-success' ).addClass( 'hide' );
          $( '.bj-news-subscribe__s .alert-warning' ).addClass( 'hide' );
          $( '.bj-news-subscribe__s .bj-news-subscribe-form' ).removeClass( 'hide' );
        }
      },
      error: function(a, b, c) {        
        if ( window.console ) {
          console.log(a);
          console.log(b);
          console.log(c);
        }
      }
    });
  });
  
}());