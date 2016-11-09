buttonScroll();
headerScroll();
footerScroll();


//NAV-HEADER
function headerScroll () {
    $(document).ready(function() {
        $("a.site-header-navbar-item").click(function () {
          var elementClick = $(this).attr("href");
          var destination = $(elementClick).offset().top;
          $('html,body').animate( { scrollTop: destination }, 1100 );
          return false;
        });
    });
};

//NAV-FOOTER
function footerScroll () {
    $(document).ready(function() {
        $("a.site-footer-navbar-item").click(function () {
          var elementClick = $(this).attr("href");
          var destination = $(elementClick).offset().top;
          $('html,body').animate( { scrollTop: destination }, 1100 );
          return false;
        });
    });
};

//BUTTON
function buttonScroll () {
    $(document).ready(function() {
        $("a.site-header-button-link").click(function () {
          var elementClick = $(this).attr("href");
          var destination = $(elementClick).offset().top;
          $('html,body').animate( { scrollTop: destination }, 1100 );
          return false;
        });
    });
};



