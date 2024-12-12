
  $('.an-portfolio-slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    pauseOnHover: false,
    cssEase: 'linear',
    arrows: false,
    dots: false,
    responsive: [{
        breakpoint: 1400,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          arrows: false
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2.8,
          arrows: false,
          autoplaySpeed: 2000,
          speed: 500,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
          autoplaySpeed: 2000,
          speed: 500,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrows: false,
          autoplaySpeed: 2000,
          speed: 500,
        }
      }
    ]
  });
  $('.testimonial-slider').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [{
        breakpoint: 1400,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          arrows: false
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  });
  $('.digital-proc-slider').slick({
    slidesToShow: 3.1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    infinite: false,
    centerMode: true,
    centerPadding: '00px',
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: true,
    responsive: [{
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        arrows: false,
        vertical: false,
        autoplaySpeed: 3000,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        arrows: false,
        vertical: false,
        autoplaySpeed: 3000,
      }
    },
    
  ]
  });
  $(".open_package_model").click(function() {
    var e = $(this).attr("data-name"),
        t = $(this).attr("data-price"),
        a = $(this).attr("data-service"),
        o = $(this).attr("data-id")
    $(".popup_form .pkg_name").text(a), $(".popup_form .pkg_price").text(t), $(".popup_form #pkg_title").text(e), $("#get_pkg_data").val(o), $(".popup_package_model").modal("show")
})
  var counted = 0;
  if ($('.an-counter-row').length > 0) {
    $(window).scroll(function () {
      var oTop = $('.an-counter-row').offset().top - window.innerHeight;
      if (counted == 0 && $(window).scrollTop() > oTop) {
        $('.an-counter-row .item b span').each(function () {
          var $this = $(this),
            countTo = $this.attr('data-count');
          $({
            countNum: $this.text()
          }).animate({
            countNum: countTo
          }, {
            duration: 1000,
            easing: 'swing',
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
              //alert('finished');
            }

          });
        });
        counted = 1;
      }

    });
  }

  AOS.init({
    disable: function () {
      var maxWidth = 991;
      return window.innerWidth < maxWidth;
    }
  });
$('.navbar-toggler').click(function(){
  $('.menu-ovalay').toggleClass('active')
})
$('.menu-ovalay').click(function(){
  $(this).removeClass('active')
  $('.navbar-collapse').removeClass('show')
})