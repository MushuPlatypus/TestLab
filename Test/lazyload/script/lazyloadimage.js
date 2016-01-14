//$(function () {
//  // Change this value to adjust the amount of blur
//  var BLUR_RADIUS = 10;

//  var canvas = document.querySelector('[data-canvas]');
//  var canvasContext = canvas.getContext('2d');

//  var image = new Image();
//  image.src = document.querySelector('[data-canvas-image]').src;

//  var drawBlur = function () {
//    var w = canvas.width;
//    var h = canvas.height;
//    canvasContext.drawImage(image, 0, 0, w, h);
//    stackBlurCanvasRGBA('heroCanvas', 0, 0, w, h, BLUR_RADIUS);
//  };

//  image.onload = function() {
//    drawBlur();
//  };
//});

/*
===================================
Pentia (PT) Namespace
===================================
*/
var PT = PT || {};
/*
===================================
PT.LazyImage
===================================
*/
PT.LazyImage = {
  /*
  ===================================
  Variables
  ===================================
  */
  Variables: {
    BLUR_RADIUS: 10
  },
  /*
  ===================================
  Setup
  ===================================
  */
  Setup: function () {
    var canvas = document.querySelector('[data-canvas]');
    var canvasContext = canvas.getContext('2d');
    
    var image = new Image();
    image.src = document.querySelector('[data-canvas-image]').src;
    jQuery(image).load(function() {
      PT.LazyImage.DrawBlur(canvas, canvasContext, image);
    });
  },
  /*
  ===================================
  Error
  ===================================
  */
  DrawBlur: function (canvas, canvasContext, image) {
    var w = canvas.width;
    var h = canvas.height;
    canvasContext.drawImage(image, 0, 0, w, h);
    stackBlurCanvasRGBA('heroCanvas', 0, 0, w, h, PT.LazyImage.Variables.BLUR_RADIUS);
    jQuery(canvas).css({ visibility: 'visible' }).fadeTo(500, 1, function() {
      PT.LazyImage.LoadFullImage();
    });
  },
  /*
  ===================================
  LoadFullImage
  ===================================
  */
  LoadFullImage: function () {
    var image = jQuery('.fullimage');
    image.attr('src', image.data('data-src'));
    jQuery(image).load(function () {
      jQuery('.fullimage').src(image.src).css({ visibility: 'visible' }).fadeTo(500, 1);
    });
  }
};
/*
===================================
Initialize
===================================
*/
jQuery(document).ready(function () {
  if (!jQuery('body').hasClass('pageedit')) {
    PT.LazyImage.Setup();
  }
});