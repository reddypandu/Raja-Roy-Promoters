(function ($) {
  "use strict";




  
  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
      $(".navbar").addClass("sticky-top shadow-sm");
    } else {
      $(".navbar").removeClass("sticky-top shadow-sm");
    }
  });





  // Dropdown on mouse hover
  const $dropdown = $(".dropdown");
  const $dropdownToggle = $(".dropdown-toggle");
  const $dropdownMenu = $(".dropdown-menu");
  const showClass = "show";

  $(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 992px)").matches) {
      $dropdown.hover(
        function () {
          const $this = $(this);
          $this.addClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "true");
          $this.find($dropdownMenu).addClass(showClass);
        },
        function () {
          const $this = $(this);
          $this.removeClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "false");
          $this.find($dropdownMenu).removeClass(showClass);
        }
      );
    } else {
      $dropdown.off("mouseenter mouseleave");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 25,
    dots: true,
    loop: true,
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
  // Testimonials carousel
  $(".projects-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 25,
    dots: true,
    loop: true,
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
  $(".hero-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 25,
    dots: true,
    loop: true,
    center: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 1,
      },
    },
  });
  $(document).ready(function(){
    $(window).scroll(function(){
        $('.counter-value').each(function(){
            var isVisible = $(this).visible(true); // Check if the element is visible in the viewport
            if(isVisible){
                if(!$(this).hasClass('counted')){ // Check if the element has already been counted
                    $(this).addClass('counted');
                    $(this).prop('Counter',0).animate({
                        Counter: $(this).text()
                    },{
                        duration: 2000,
                        easing: 'easeInQuad',
                        step: function (now){
                            $(this).text(Math.ceil(now));
                        }
                    });
                }
            }
        });
    });

    // Helper function to check if element is visible in viewport
    $.fn.visible = function(partial){
        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
    };
});


})(jQuery);
function filterProducts(category,button) {
  var buttons = document.querySelectorAll('#portfolio-flters li');
    buttons.forEach(function(btn) {
      btn.classList.remove('active');
    });
    button.classList.add('active');


  var products = document.querySelectorAll('.project');
  products.forEach(function(product) {
    if (category === 'btn1' || product.getAttribute('data-category') === category) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
  }