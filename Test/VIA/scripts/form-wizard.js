/*
===================================
Pentia (PT) Namespace
===================================
*/
var PT = PT || {};
/*
===================================
PT.FormWizard
===================================
*/
PT.FormWizard = {
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
    jQuery('input[type="file"]').bootstrapFileInput();

    jQuery('.validate-required').bind('keyup blur change', function () {
      PT.FormWizard.Validate_Required(jQuery(this));
    });

    jQuery('.validate-cpr').bind('keyup blur', function () {
      PT.FormWizard.Validate_Cpr(jQuery(this));
    });

    jQuery('.validate-telephone').bind('keyup blur', function () {
      PT.FormWizard.Validate_Telephone(jQuery(this));
    });

    jQuery('.validate-repeat').bind('keyup blur', function () {
      PT.FormWizard.Validate_Repeat(jQuery(this));
    });

    jQuery('.validate-email').bind('keyup blur', function () {
      PT.FormWizard.Validate_Email(jQuery(this));
    });

    jQuery('input.validate-file').bind('click change blur', function () {
      PT.FormWizard.Validate_File(jQuery(this), ['pdf']);
    });

    jQuery('.validate-radio').bind('click blur', function () {
      PT.FormWizard.Validate_Radio(jQuery(this));
    });

    jQuery('form').on('submit', function (e) {
      if (!PT.FormWizard.Validate_Submit()) {
        e.preventDefault();
      }
    });
  },
  /*
  ===================================
  Validate: Submit
  ===================================
  */
  Validate_Submit: function () {
    var validationFields = jQuery('[class*="validate"]');
    var isValid = true;
    validationFields.each(function () {
      jQuery(this).focus().blur();
      if (!jQuery(this).hasClass('valid')) {
        isValid = false;
      }
    });


    return isValid;
  },
  /*
  ===================================
  Validate: Required
  ===================================
  */
  Validate_Required: function (elem) {
    var isValid = false;
    if (elem.val().trim() !== '') {
      isValid = true;
    }

    if (isValid) {
      elem.addClass('valid').removeClass('invalid');
      elem.parent().next().find('.validation-msg').removeClass('invalid');
    } else {
      elem.addClass('invalid').removeClass('valid');
      elem.parent().next().find('.validation-msg').addClass('invalid');
    }
  },
  /*
  ===================================
  Validate: CPR
  ===================================
  */
  Validate_Cpr: function (elem) {
    var value = elem.val(), match = false;
    if (value.match(/[0-9]{6}\-?[0-9]{4}/)) {
      value = value.replace(/\-/g, "");
      var chk = 0;
      for (var i = 9; i > -1; i--) {
        chk += (+value.charAt(i)) * ((i > 2) ? (10 - i) : (4 - i));
      }
      if (chk % 11 == 0) match = true;
      var dag = new Date(+value.substring(4, 2), +value.substring(2, 2), +value.substring(0, 2));
      if (dag.getTime() > new Date().getTime() || !match) {
        elem.addClass('invalid').removeClass('valid');
        elem.parent().next().find('.validation-msg').addClass('invalid');
      } else {
        elem.addClass('valid').removeClass('invalid');
        elem.parent().next().find('.validation-msg').removeClass('invalid');
      }
    } else {
      elem.addClass('invalid').removeClass('valid');
      elem.parent().next().find('.validation-msg').addClass('invalid');
    }
  },
  /*
  ===================================
  Validate: Number
  ===================================
  */
  Validate_Telephone: function (elem) {
    var value = elem.val();
    if (value.match(/[0-9]{8}/)) {
      elem.addClass('valid').removeClass('invalid');
      elem.parent().next().find('.validation-msg').removeClass('invalid');
    } else {
      elem.addClass('invalid').removeClass('valid');
      elem.parent().next().find('.validation-msg').addClass('invalid');
    }
  },
  /*
  ===================================
  Validate: Email
  ===================================
  */
  Validate_Email: function (elem) {
    var value = elem.val();
    if (value.match(/(.+)@(.+){2,}\.(.+){2,}/)) {
      elem.addClass('valid').removeClass('invalid');
      elem.parent().next().find('.validation-msg').removeClass('invalid');
    } else {
      elem.addClass('invalid').removeClass('valid');
      elem.parent().next().find('.validation-msg').addClass('invalid');
    }
  },
  /*
  ===================================
  Validate: Repeat
  ===================================
  */
  Validate_Repeat: function (elem) {
    var value = elem.val();
    var valueCompare = jQuery(elem.data('data-validate-repeat')).val();
    if (value === valueCompare) {
      elem.addClass('valid').removeClass('invalid');
      elem.parent().next().find('.validation-msg').removeClass('invalid');
    } else {
      elem.addClass('invalid').removeClass('valid');
      elem.parent().next().find('.validation-msg').addClass('invalid');
    }
  },
  /*
  ===================================
  Validate: File
  ===================================
  */
  Validate_File: function (elem, filetypes) {
    var file = elem.val();
    var exts = filetypes;
    // first check if file field has any value
    if (file) {
      // split file name at dot
      var getExt = file.split('.');
      // reverse name to check extension
      getExt = getExt.reverse();
      // check file type is valid as given in 'exts' array
      if ($.inArray(getExt[0].toLowerCase(), exts) > -1) {
        elem.addClass('valid').removeClass('invalid').closest('a').addClass('valid').removeClass('invalid');
        elem.closest('div').next().find('.validation-msg').removeClass('invalid');
      } else {
        elem.addClass('invalid').removeClass('valid').closest('a').addClass('invalid').removeClass('valid');
        elem.closest('div').next().find('.validation-msg').addClass('invalid');
      }
    }
  },
  /*
  ===================================
  Validate: Radio
  ===================================
  */
  Validate_Radio: function (elem) {
    var radioGroup = jQuery('[name="' + elem.data('validate-radio') + '"]');

    if (radioGroup.is(':checked')) {
      radioGroup.addClass('valid').removeClass('invalid');
      elem.parent().parent().parent().next().find('.validation-msg').removeClass('invalid');
    } else {
      radioGroup.addClass('invalid').removeClass('valid');
      elem.parent().parent().parent().next().find('.validation-msg').addClass('invalid');
    }
  },
};
/*
===================================
Initialize
===================================
*/
jQuery(document).ready(function () {
  PT.FormWizard.Setup();
});

/*
===================================
Polyfills
===================================
*/
if (!String.prototype.trim) {
  (function () {
    // Make sure we trim BOM and NBSP
    var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    String.prototype.trim = function () {
      return this.replace(rtrim, '');
    };
  })();
}