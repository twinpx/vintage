( function($) {

'use strict';

  $( function() {
  

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





function FloatPhone(b) {
    function c() {
        d();
        e();
    }

    function d() {
        j.$elem = $(b);
        j.$elem.data("FloatPhone", j);
        j.scrollEvent = undefined;
        j.scrollIntervalEvent = undefined;
        j.scrollIntervalId = undefined;
        j.showTimeoutId = undefined;
        j.showTime = 3e3;
    }

    function e() {
        f();
        $(window).bind("scroll", g);
        j.$elem.find( '.b-icon-close' ).click( clickClose );
    }

    function f() {
        j.showTimeoutId = setTimeout(function() {
            h();
        }, j.showTime);
    }

    function g(a) {
        j.scrollEvent = a;
        if ( !j.scrollIntervalEvent ) {
          j.scrollIntervalEvent = a;
          clearTimeout(j.showTimeoutId);
          i();
          j.scrollIntervalId = setInterval(function() {
            return j.scrollIntervalEvent !== j.scrollEvent ? void(j.scrollIntervalEvent = j.scrollEvent) : (clearInterval(j.scrollIntervalId), j.scrollIntervalEvent = void 0, void f());
          }, 100);
        }
    }

    function h() {
      if ( window.Cookies && window.Cookies.get( 'showMessage' ) !== 'N' ) {
        j.$elem.addClass("i-visible");
      }
    }

    function i() {
      j.$elem.removeClass("i-visible");
    }
    
    function clickClose() {
      i();
      if ( window.Cookies ) {
        Cookies.set( 'showMessage', 'N', { expires: 365, path: window.location.href });
      }
    }
    
    var j = this;
    c();
}

new FloatPhone( '#b-float-phone' );
if ( $.fn.fotorama ) {
  $('.fotorama').fotorama({
    thumbwidth: 65,
    thumbheight: 65
  });
}

if ( $.fn.zoomple ) {
  setTimeout( function() {
    $('img.zoomple').zoomple();
  }, 1000 );
}

  $.fn.tabs = function() {
    return this.each( function() {
      var self = this,
          $this = $( self ),
          $tabs = $this.find( '.b-tabs__tab' ),
          $items = $this.find( '.b-tabs__i' ),
          $decor = $this.find( '.b-tabs__decor' ),
          $top = $this.find( '.b-tabs__nav__top span' ),
          $menu = $this.find( '.b-tabs__nav__menu' ),
          popFlag = false;
         
      if ( window.matchMedia( "(min-width: 768px)" ).matches ) {
        $tabs.each( function() {
          var $this = $( this );
          var width = $this.outerWidth();
          $this.width( width ).css({ paddingLeft: 0, paddingRight: 0 });
        });
      }
          
      $tabs.click( clickTab );
      moveDecor( $tabs.eq(0) );
      locationTab();
      
      $( window ).resize( function() {
        $tabs.each( function() {
          var $this = $( this );
          if ( $this.hasClass( 'i-active' )) {
            moveDecor( $this );
          }
        });
      });
      
      window.onpopstate = function( event ) {
        popFlag = true;
        if ( event.state ) {
          $tabs.filter( '[data-tab=' + event.state.tab + ']' ).click();
        } else {
          $tabs.eq(0).click();
        }
      };
      
      function clickTab(e) {
        var $this = $( e.target );
        e.preventDefault();
        
        if ( $this.hasClass( 'i-active' )) {
          return;
        }
        
        highlightTab( $this );
        moveDecor( $this );
        showItem( $this );
        setUrl( $this );
        setText( $this );
        $.scrollTo( $( self ), 500);
      }
      
      function setText( $tab ) {
        $top.text( $tab.text());
      }
      
      function setUrl( $tab ) {
        if ( !window.history ) {
          return;
        }
        var tab = $tab.data( 'tab' ),
            url = "?tab=" + tab;
            
        if ( window.location.search === '' || ( String( window.location.search ).search( '#' ) !== -1 && String( window.location.search ).search( '?' ) === -1 )) {
          url = "?tab=" + tab + window.location.search;
        } else {
          if ( String( window.location.search ).search( '[\?|&]tab=' ) === -1 ) {
            url = window.location.search + '&tab=' + tab;
          } else {
            url = String( window.location.search ).replace( /[\?|&](tab\=\w+)&?/.exec( String( window.location.search ))[1], 'tab=' + tab );
          }
        }
        
        if ( !popFlag ) {
          window.history.pushState( {tab: tab}, "page 2", url );
        }
        
        popFlag = false;
      }
      
      function showItem( $tab ) {
        var tab = $tab.data( 'tab' );
        $this.find( '.b-tabs__i' ).each( function() {
          var $item = $( this );
          if ( $item.data( 'tab' ) === tab ) {
            $items.removeClass( 'i-active' );
            $item.addClass( 'i-active' );
            if ( $item.find( '.fotorama' ).length ) {
              $item.find( '.fotorama' ).data( 'fotorama' ).resize({ width: "100%" });
            }
          }
        });
        
        $( '.b-tabs__nav__menu i:visible' ).click();
      }
      
      function moveDecor( $tab ) {
        $decor.css({
          left: $tab.position().left + 'px',
          width: $tab.outerWidth()
        });
      }
      
      function highlightTab( $tab ) {
        $tabs.removeClass( 'i-active' );
        $tab.addClass( 'i-active' );
      }
      
      function locationTab() {
        var tab = String( window.location.search ).match( /tab=([-_a-z]+)/ );
        
        if ( !tab ) {
          return;
        }
        
        tab = tab[1];
        
        var evt = {
          target: $tabs.filter( '[data-tab=' + tab + ']' ),
          preventDefault: function() {}
        };
        
        clickTab( evt );
      }
    });
  };
  
  $( '.b-tabs:not(.i-links)' ).tabs();
  
  $( '.b-tabs.i-links' ).each( function() {
    var $this = $( this );
    var $decor = $this.find( '.b-tabs__decor' );
    var $tab = $this.find( '.b-tabs__tab.i-active' );
    $decor.css({
      left: $tab.position().left + 'px',
      width: $tab.outerWidth()
    });
  });
  
  $( '.b-tabs__nav__top, .b-tabs__nav__menu i' ).click( function() {
		$( '.b-tabs__nav__top' ).slideToggle();
		$( '.b-tabs__nav__menu' ).slideToggle();
	});
  
  var $commentsTab = $( '.b-tabs__i[data-tab="comments"]' );
  
  $commentsTab.find( 'form' ).submit( function(e) {
    e.preventDefault();
    
    var $form = $( this );
    
    $.ajax({
      url: $form.attr("action"),
      type: $form.attr("method"),
      dataType: "json",
      data: $form.serialize(),
      success: function( data ) {
        if ( data && data.STATUS === 'Y' && data.RESPONSE ) {
          //add comment
          if ( $commentsTab.find( '.b-new-comment:eq(0)' ).length ) {
            $commentsTab.find( '.b-new-comment:eq(0)' ).before( '<div class="b-new-comment">' + data.RESPONSE + '<hr class="i-line i-size-L"></div>' );
          } else {
            $( '#collapseCommentForm' ).before( '<div class="b-new-comment">' + data.RESPONSE + '<hr class="i-line i-size-L"></div>' );
          }
          $commentsTab.find( '.b-new-comment:eq(0)' ).slideDown();
          $.scrollTo( $commentsTab.find( '.b-new-comment:eq(0)' ).offset().top - 200, 500);
          //reset the form
          $form.find( 'textarea.form-control' ).val('');
          //hide an error message
          $commentsTab.find( '.b-alert-warning' ).slideUp( function() {
            $( this ).remove();
          });
        } else if ( data && data.STATUS === 'E' && data.MESSAGE ) {
          //show the message
          if ( $commentsTab.find( '.b-alert-warning' ).length ) {
            $commentsTab.find( '.b-alert-warning span' ).addClass( 'i-hide' );
            setTimeout( function() { $commentsTab.find( '.b-alert-warning span' ).text( data.MESSAGE ).removeClass( 'i-hide' );}, 300 );
          } else {
            $form.before( '<div class="b-alert-warning i-slide"><span>' + data.MESSAGE + '</span></div>' );
            $commentsTab.find( '.b-alert-warning' ).slideDown();
          }
        }
      },
      error: function( a, b, c ) {
        if ( window.console ) {
          console.log(a);
          console.log(b);
          console.log(c);
        }
      }
    });
    
  });



  });

}( jQuery ));