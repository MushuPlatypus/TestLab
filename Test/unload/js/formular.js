/*
===================================
Pentia (PT) Namespace
===================================
*/
var PT = PT || {};
/*
===================================
PT.UnloadSurvey
===================================
*/
PT.UnloadSurvey = {
  /*
  ===================================
  Variables
  ===================================
  */
  Variables: {
    host: null,
    answered: null,
    refused: null
  },
  /*
  ===================================
  Setup
  ===================================
  */
  Setup: function () {
    if (!PT.UnloadSurvey.Storage.Cookie.Exists('surveyoriginatorsite')) {
      PT.UnloadSurvey.Variables.host = window.location.host;

      PT.UnloadSurvey.Storage.Cookie.Set('surveyoriginatorsite', JSON.stringify(PT.UnloadSurvey.Variables));
    }
  },
  /*
  ===================================
  Check domain
  ===================================
  */
  CheckDomain: function (event) {
    var domain = JSON.parse(PT.UnloadSurvey.Storage.Cookie.Get('surveyoriginatorsite')).host;
    console.log(domain, window.location.host, domain === window.location.host);
    //if (domain == window.location.host) {
    //  event.returnValue = "\o/";
    //}
  },
  /*
  ===================================
  Reset
  ===================================
  */
  Reset: function () {

  },
  Storage: {
    /*
    ===================================
    Cookie utils
    ===================================
    */
    Cookie: {
      /*
      ===================================
      Getting a cookie
      Usage: PT.Utils.Storage.Cookie.Get(name)
      Description: Read a cookie. If the cookie doesn't exist a null value will be returned.
      ===================================
      */
      Get: function (sKey) {
        return unescape(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + escape(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
      },
      /*
      ===================================
      Writing a cookie
      Usage: PT.Utils.Storage.Cookie.Get(name, value[, end[, path[, domain[, secure]]]])
      Description: Create/overwrite a cookie.
      Parameters:
        name (required)
          The name of the cookie to create/overwrite (string).
        value (required)
          The value of the cookie (string).
        end (optional)
          The max-age in seconds (e.g. 31536e3 for a year, Infinity for a never-expires cookie) or the expires date in GMTString format or as Date object; if not specified it will expire at the end of session (number – finite or Infinity – string, Date object or null).
        path (optional)
          E.g., "/", "/mydir"; if not specified, defaults to the current path of the current document location (string or null).
        domain (optional)
          E.g., "example.com", ".example.com" (includes all subdomains) or "subdomain.example.com"; if not specified, defaults to the host portion of the current document location (string or null).
        secure (optional)
          The cookie will be transmitted only over secure protocol as https (boolean or null).
      ===================================
      */
      Set: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
        if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
        var sExpires = "";
        if (vEnd) {
          switch (vEnd.constructor) {
            case Number:
              sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
              break;
            case String:
              sExpires = "; expires=" + vEnd;
              break;
            case Date:
              sExpires = "; expires=" + vEnd.toGMTString();
              break;
          }
        }
        document.cookie = escape(sKey) + "=" + escape(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
        return true;
      },
      /*
      ===================================
      Removing a cookie
      Usage: PT.Utils.Storage.Cookie.Delete(name[, path])
      Description: Delete a cookie.
      Parameters:
        name
          the name of the cookie to remove (string).
        path (optional)
          e.g., "/", "/mydir"; if not specified, defaults to the current path of the current document location (string or null).
      ===================================
      */
      Delete: function (sKey, sPath) {
        if (!sKey || !this.Exists(sKey)) { return false; }
        document.cookie = escape(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sPath ? "; path=" + sPath : "");
        return true;
      },
      /*
      ===================================
      Testing a cookie
      Usage: PT.Utils.Storage.Cookie.Exists(name)
      Description: Check if a cookie exists. Returns a bool.
      ===================================
      */
      Exists: function (sKey) {
        return (new RegExp("(?:^|;\\s*)" + escape(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
      },
      /*
      ===================================
      Getting the list of all cookies
      Usage: PT.Utils.Storage.Cookie.All()
      Description: Returns an array of all readable cookies from this location.
      ===================================
      */
      All: function () {
        var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
        for (var nIdx = 0; nIdx < aKeys.length; nIdx++) { aKeys[nIdx] = unescape(aKeys[nIdx]); }
        return aKeys;
      }
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
    PT.UnloadSurvey.Setup();
  }
});

window.addEventListener("beforeunload", function (event) {
  if (PT.UnloadSurvey.Storage.Cookie.Exists('surveyoriginatorsite')) {
    PT.UnloadSurvey.CheckDomain(event);
  }
});