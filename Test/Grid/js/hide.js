/*
===================================
Pentia (PT) Namespace
===================================
*/
var PT = PT || {};
/*
===================================
PT.Hide
===================================
*/
PT.Hide = {
  /*
  ===================================
  Variables
  ===================================
  */
  Variables: {

  },
  /*
  ===================================
  Setup
  ===================================
  */
  Setup: function () {
    //jQuery(window).resize(function() {

    //});
  },
  /*
  ===================================
  Fixed
  ===================================
  */
  Fixed: function () {
    var cellSize = jQuery('.paper').first();
    var height = cellSize.width() + 30;
    var hideAfter = height * 2 + (height / 2);
    jQuery('.hidesome').height(hideAfter);
  },
  /*
  ===================================
  Fluid
  ===================================
  */
  Fluid: function () {
    var cellSize = jQuery('.paper').first();
    var height = cellSize.width() + 30;
    var hideAfter = height * 3 + (height / 2);
    jQuery('.hidesome').height(hideAfter);
  },
  /*
  ===================================
  Responsive
  ===================================
  */
  Responsive: function (e) {
    switch (e.state.media) {
      case 'screen-xs':
        //if (e.state.direction === 'enter' || e.state.direction === 'initial')
        PT.Hide.Fluid();
        break;
      case 'screen-sm':
        //if (e.state.direction === 'enter' || e.state.direction === 'initial')
        PT.Hide.Fixed();
        break;
      case 'screen-md':
        //if (e.state.direction === 'enter' || e.state.direction === 'initial')
        PT.Hide.Fixed();
        break;
      case 'screen-lg':
        //if (e.state.direction === 'enter' || e.state.direction === 'initial')
        PT.Hide.Fixed();
        break;
      default:
    }
  }
};
/*
===================================
Initialize
===================================
*/
jQuery(document).ready(function () {
  if (!jQuery('body').hasClass('pageedit')) {
    PT.Hide.Setup();
  }
});

jQuery(window).on('responsive', function (e) {
  PT.Hide.Responsive(e);
});