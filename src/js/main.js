// css
import 'bootstrap/dist/css/bootstrap.min.css';
import '../libs/font-awesome/css/all.min.css';
import 'lightgallery/dist/css/lightgallery.min.css';
import 'slick-carousel/slick/slick.css';
import '../css/main.scss';

// js
import $ from 'jquery';

window.$ = window.jQuery = $;
import 'bootstrap';
import 'slick-carousel';
import './modules/_functions';
import 'lightgallery';
import 'lightgallery/modules/lg-video.min';
// import './libs/masonry.pkgd.min'
// import './modules/_forms'

function detectMob() {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];

  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
}
let cw = document.body.clientWidth;

const search_input = $('#searchForm');

function place_serach_wrap(search_wrap) {
  search_wrap.append(search_input);
}

function detect_search_replacement(cw) {
  const sh_search_wrap = $('.subheader__search');
  const mob_search_wrap = $('.mobile__search');
  const def_search_wrap = $('.header__search');
  if (cw < 1150 && cw >= 992) {
    place_serach_wrap(sh_search_wrap);
  } else if (cw < 992) {
    place_serach_wrap(sh_search_wrap);
    // place_serach_wrap(mob_search_wrap);
    mob_search_wrap.on('click', function () {
      sh_search_wrap.toggleClass('active');
    });
  } else {
    place_serach_wrap(def_search_wrap);
  }
}

$(window).resize(function () {
  cw = document.body.clientWidth;
  detect_search_replacement(cw);
});

$(function () {
  detect_search_replacement(cw);

  let menu = $('.dropdown-menu-custom[data-target="dropdownMenuSubHeader"]');

  function hideMenu() {
    menu.removeClass('show').closest('.show').removeClass('show');
    $('#dropdownMenuSubHeader').removeClass('visible');
  }

  var headerTopMenu = $('.header-top'),
    headerTopMenuHeight = headerTopMenu.height();

  $(document).on('scroll', function () {
    if (!detectMob()) {
      if (menu.is(':visible')) {
        $(
          '.dropdown-menu-custom[data-target="dropdownMenuSubHeader"]'
        ).toggle();
        $('#dropdownMenuSubHeader').toggleClass('visible');
      }
    }

    if ($(window).scrollTop() > headerTopMenuHeight) {
      $('body').addClass('menu-fixed');
      headerTopMenu.addClass('fixed');
    } else {
      $('body').removeClass('menu-fixed');
      headerTopMenu.removeClass('fixed');
    }
  });

  $('#dropdownMenuSubHeader').on('click', function () {
    if (!menu.hasClass('show')) {
      $('.dropdown-menu-custom[data-target="dropdownMenuSubHeader"]').toggle();
      $('#dropdownMenuSubHeader').toggleClass('visible');
    } else {
      hideMenu();
    }
  });

  $(document).on('click', function (e) {
    if ($(e.target).parent().hasClass('size-guid--selector')) {
      selectGender($(e.target));
    }
    if (
      $(e.target).attr('id') === 'sizeGuidBtn' ||
      $(e.target).parents('.close').attr('id') === 'sizeGuidClose'
    ) {
      toggle_sizeGuid();
    }

    if (
      !$(e.target).closest('.dropdown-menu-custom').length &&
      e.target.id !== 'dropdownMenuSubHeader'
    ) {
      if (menu.is(':visible')) {
        $(
          '.dropdown-menu-custom[data-target="dropdownMenuSubHeader"]'
        ).toggle();
        $('#dropdownMenuSubHeader').toggleClass('visible');
      }
    }
  });

  var slider = $('.shop-detail__big-slider'),
    mainSlider = $('#mainSlider');

  if (slider.length) {
    slider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      swipe: true,
      asNavFor: '.shop-detail-slider',
    });

    $('.shop-detail-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      variableWidth: true,
      asNavFor: '.shop-detail__big-slider',
      dots: false,
      centerPadding: 0,
      centerMode: false,
      focusOnSelect: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 765,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    });
  }

  if (mainSlider.length) {
    mainSlider.slick({
      lazyLoad: 'ondemand',
      mobileFirst: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      swipe: true,
    });
  }

  var lightGallery = $('#lightgallery'),
    videoGallery = $('#videogallery');

  if (lightGallery.length) {
    lightGallery.lightGallery({
      selector: '.gallery-item',
    });
  }

  if (videoGallery.length) {
    videoGallery.lightGallery({
      selector: '.video-item',
    });
  }
});
function selectGender(e) {
  let genderState = '._' + e.data('gender');
  e.siblings().removeClass('active');
  e.addClass('active');

  let _table = e.parents('.size-guid--wrapper').find('.size-guid--body');
  _table.find(genderState).siblings().fadeOut(300);
  setTimeout(() => {
    _table.find(genderState).fadeIn(300);
  }, 300);
}
function toggle_sizeGuid() {
  $('#sizeGuid').toggleClass('active');
}
