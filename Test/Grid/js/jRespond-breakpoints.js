// call jRespond and add breakpoints
var PT = PT || {};
var jRespond = jRespond || {};
if (!jQuery('html').hasClass('ie8')) {
  var jRes = jRespond([
      {
        label: 'screen-xs',
        enter: 0,
        exit: 767
      }, {
        label: 'screen-sm',
        enter: 768,
        exit: 991
      }, {
        label: 'screen-md',
        enter: 992,
        exit: 1199
      }, {
        label: 'screen-lg',
        enter: 1200,
        exit: 10000
      }
  ]);

  jRes.addFunc([
      {
        breakpoint: 'screen-xs',
        enter: function () {
          PT.Utils.Event.Trigger('responsive', { media: 'screen-xs', direction: 'enter' });
        },
        exit: function () {
          PT.Utils.Event.Trigger('responsive', { media: 'screen-xs', direction: 'exit' });
        }
      }, {
        breakpoint: 'screen-sm',
        enter: function () {
          PT.Utils.Event.Trigger('responsive', { media: 'screen-sm', direction: 'enter' });
        },
        exit: function () {
          PT.Utils.Event.Trigger('responsive', { media: 'screen-sm', direction: 'exit' });
        }
      }, {
        breakpoint: 'screen-md',
        enter: function () {
          PT.Utils.Event.Trigger('responsive', { media: 'screen-md', direction: 'enter' });
        },
        exit: function () {
          PT.Utils.Event.Trigger('responsive', { media: 'screen-md', direction: 'exit' });
        }
      }, {
        breakpoint: 'screen-lg',
        enter: function () {
          PT.Utils.Event.Trigger('responsive', { media: 'screen-lg', direction: 'enter' });
        },
        exit: function () {
          PT.Utils.Event.Trigger('responsive', { media: 'screen-lg', direction: 'exit' });
        }
      }
  ]);
}
jQuery(document).ready(function () {
  if (!jQuery('html').hasClass('ie8')) {
    PT.Utils.Event.Trigger('responsive', { media: jRes.getBreakpoint(), direction: 'initial' });
  }
});