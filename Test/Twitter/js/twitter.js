/*
===================================
Pentia (PT) Namespace
===================================
*/
var PT = PT || {};
/*
===================================
PT.Twitter
===================================
*/
PT.Twitter = {
  /*
  ===================================
  Variables
  ===================================
  */
  Variables: {
    feed: null
  },
  /*
  ===================================
  Setup
  ===================================
  */
  Setup: function () {
    var raw_template = $('#tweet-template').html();
    var template = Handlebars.compile(raw_template);
    var placeHolder = $("ul");
    $.get("js/twitterfeed.json", function (data, status, xhr) {
      $.each(data, function (index, element) {
        // Generate the HTML for each post
        var html = template(element);
        // Render the posts into the page
        placeHolder.append(html);
      });
    });
  },
  /*
  ===================================
  Error
  ===================================
  */
  Error: function (elem) {

  },
  /*
  ===================================
  Reset
  ===================================
  */
  Reset: function () {

  }
};
/*
===================================
Initialize
===================================
*/
jQuery(document).ready(function () {
  if (!jQuery('body').hasClass('pageedit')) {
    PT.Twitter.Setup();
  }
});