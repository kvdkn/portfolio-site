//VENOBOX

$(document).ready(function() {
    $('.venobox').venobox({
        numeratio: true,
        infinigall: true,
        border: '0'
        });
});

//SMOOTH SCROLL ANIMATION

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
        }, 600);
          return false;
        }
      }
    });
  });

  //MOBILE NAV

    $(function() {
      mobileNav();
    });

    function mobileNav() {
      $('.mobile-nav-toggle').on('click', function() {
        var status = $(this).hasClass('is-open');
        if(status){ $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open'); }
        else { $('.mobile-nav-toggle, .mobile-nav').addClass('is-open'); }
      });
      $('.mobile-nav li a').on('click', function() {
        $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open');
      });
    }

//SLIDE REVEALS

$(document).ready(function() {

    if (window.innerWidth > 769) {
        window.sr = ScrollReveal()
        sr.reveal('header', {
            delay: 200,
            scale: 0,
            opacity: 1,
            distance: '100px',
            origin: 'top'
        });
        sr.reveal('.logo', {
            container: 'header',
            delay: 500,
            scale: 0,
            opacity: 0,
            distance: '150px',
            origin: 'left'
        });
        sr.reveal('.nav', {
            container: 'header',
            delay: 900,
            scale: 0,
            opacity: 1,
            distance: '60px',
            origin: 'top'
        });
        sr.reveal('.section-cover', {
            delay: 1200,
            duration: 1000,
            scale: 0,
            distance: '500px',
            origin: 'top'
        });
        sr.reveal('.section-services', {
            container: '.content',
            delay: 1400,
            scale: 0,
            opacity: 0,
            distance: '200px',
            origin: 'bottom'
        });
        sr.reveal('.section-services .section-lead', {
            container: '.section-services',
            delay: 1400,
            scale: 0,
            opacity: 0,
            distance: '200px',
            origin: 'bottom'
        });
        sr.reveal('.services-flex', {
            container: '.section-services',
            delay: 1400,
            scale: 0,
            opacity: 0,
            distance: '200px',
            origin: 'bottom'
        });
    }
});
