
(function ($) {

  "use strict";

  // COUNTER NUMBERS
  jQuery('.counter-thumb').appear(function () {
    jQuery('.counter-number').countTo();
  });

  // CUSTOM LINK
  $('.smoothscroll').click(function () {
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height();

    scrollToDiv(elWrapped, header_height);
    return false;

    function scrollToDiv(element, navheight) {
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop - navheight;

      $('body,html').animate({
        scrollTop: totalScroll
      }, 300);
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById("cookie-banner");
    const btn = document.getElementById("accept-cookies-btn");

    if (!localStorage.getItem("cookieConsent")) {
      setTimeout(() => banner.classList.add("active"), 1000); // 1 second delay
    }

    btn.addEventListener("click", () => {
      localStorage.setItem("cookieConsent", "true");
      banner.classList.remove("active");
    });
  });


  // Automatically update copyright year
  document.getElementById("copyrightYear").textContent = new Date().getFullYear();

  document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById("cookie-banner");
    const btn = document.getElementById("accept-cookies-btn");

    if (!localStorage.getItem("cookieConsent")) {
      setTimeout(() => banner.classList.add("active"), 1000); // 1 second delay
    }

    btn.addEventListener("click", () => {
      localStorage.setItem("cookieConsent", "true");
      banner.classList.remove("active");
    });
  });



})(window.jQuery);


