!(function(o) {
    "use strict";
    o(window).scroll(function(a) {
      100 < o(window).scrollTop()
        ? o("#mainNav").addClass("navbar-shrink")
        : o("#mainNav").removeClass("navbar-shrink");
    }),
      o('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (
          location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
          location.hostname == this.hostname
        ) {
          var a = o(this.hash);
          if ((a = a.length ? a : o("[name=" + this.hash.slice(1) + "]")).length)
            return (
              o(window).width() <= 768
                ? o("html, body").animate(
                    {
                      scrollTop: a.offset().top - 80
                    },
                    1e3
                  )
                : o("html, body").animate(
                    {
                      scrollTop: a.offset().top
                    },
                    1e3
                  ),
              !1
            );
        }
      }),
      o(".js-scroll-trigger").click(function() {
        window.innerWidth < "992" &&
          (o(".navbar-collapse").collapse("hide"),
          o("#mainNav").css("background-color", "#111C33"));
      }),
      o("body").scrollspy({
        target: "#mainNav",
        offset: 57
      });
  })(jQuery)

// ------------------------------------------------------------------------------ //
  // Accordian   
  // ------------------------------------------------------------------------------ //


  var allPanels = $(".accordion > dd").hide();
  allPanels.first().slideDown("easeOutExpo");
  $(".accordion").each(function () {
    $(this).find("dt > a").first().addClass("active").parent().next().css({
      display: "block"
    });
  });

  $(document).on('click', '.accordion > dt > a', function (e) {
    var current = $(this).parent().next("dd");
    $(this).parents(".accordion").find("dt > a").removeClass("active");
    $(this).addClass("active");
    $(this).parents(".accordion").find("dd").slideUp("easeInExpo");
    $(this).parent().next().slideDown("easeOutExpo");
    return false;

  });


   // ------------------------------------------------------------------------------ //
  // Active Menu 
  // ------------------------------------------------------------------------------ //


  $('#dopeNav').dopeNav({
    stickyNav: true,
  });

  //Smooth Scrolling Using Navigation Menu
  $('a[href*="#"]').on('click', function (e) {
    $('html,body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 70
    }, 500);
    e.preventDefault();
  });
