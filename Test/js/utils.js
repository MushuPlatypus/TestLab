/*
===================================
Pentia (PT) Namespace
===================================
*/
var PT = PT || {};
/*
===================================
PT.Utils
===================================
*/
PT.Utils = {
  Array: {
    /*
    ===================================
    Sort array by property
    Usage: array.sort(PT.Utils.Array.SortByProperty('firstName'));
    ===================================
    */
    SortByProperty: function sortByProperty(property) {
      'use strict';
      return function (a, b) {
        var sortStatus = 0;
        if (a[property] < b[property]) {
          sortStatus = -1;
        } else if (a[property] > b[property]) {
          sortStatus = 1;
        }

        return sortStatus;
      };
    }
  },
  /*
  ===================================
  String utils
  ===================================
  */
  Strings: {
    /*
    ===================================
    C# link string format
    Usage: PT.Utils.String.Format('<a href="{0}>{1}</a>', href, text);
    ===================================
    */
    Format: function (source, params) {
      if (arguments.length === 1) {
        return function () {
          var args = $.makeArray(arguments);
          args.unshift(source);
          return $.format.apply(this, args);
        };
      }
      if (arguments.length > 2 && params.constructor !== Array) {
        params = $.makeArray(arguments).slice(1);
      }
      if (params.constructor !== Array) {
        params = [params];
      }
      $.each(params, function (i, n) {
        source = source.replace(new RegExp("\\{" + i + "\\}", "g"), function () {
          return n;
        });
      });
      return source;
    },
    /*
    ===================================
    String contains
    Usage: PT.Utils.String.Contains(string, string[, bool]);
    ===================================
    */
    Contains: function (sString, sKey, caseSensitive) {
      sString = (caseSensitive) ? sString : sString.toLowerCase();
      return (~sString.indexOf(sKey)) ? true : false;
    },
    /*
    ===================================
    Format as number
    Usage: PT.Utils.String.Contains(string, string[, bool]);
    ===================================
    */
    FormatMoney: function (n, c, d, t) {
      var s, i, j;
      c = isNaN(c = Math.abs(c)) ? 2 : c,
      d = d === undefined ? "." : d,
      t = t === undefined ? "," : t,
      s = n < 0 ? "-" : "",
      i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
      j = (j = i.length) > 3 ? j % 3 : 0;
      return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
    }
  },
  /*
  ===================================
  Storage utils
  ===================================
  */
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
    },
    /*
    ===================================
    Local storage utils with fallback to cookie
    Dependencies: Needs the PT.Utils.Storage.Cookie section
    Note that it's not possible to set expiration date for a local storage object
    ===================================
    */
    LocalStorage: {
      Get: function (sKey) {
        return (!window.localStorage) ? PT.Utils.Storage.Cookie.Get(sKey) : window.localStorage.getItem(sKey);
      },
      Set: function (sKey, sValue) {
        return (!window.localStorage) ? PT.Utils.Storage.Cookie.Set(sKey, sValue, Infinity) : window.localStorage.setItem(sKey, sValue);
      },
      Delete: function (sKey) {
        return (!window.localStorage) ? PT.Utils.Storage.Cookie.Delete(sKey) : window.localStorage.removeItem(sKey);
      },
      Exists: function () {
        return (!window.localStorage) ? PT.Utils.Storage.Cookie.Exists(sKey) : (window.localStorage.getItem(sKey) !== null) ? true : false;
      },
      All: function () {
        if (!window.localStorage) {
          return PT.Utils.Storage.Cookie.All();
        } else {
          var keys = [];
          for (var key in localStorage) {
            keys.push(key);
          }
          return keys;
        }
      }
    }
  },
  /*
  ===================================
  Url utils
  ===================================
  */
  Url: {
    QueryString: {
      Get: function (sKey) {
        var keys = PT.Utils.Url.QueryString.All();
        return keys[sKey] || '';
      },
      Set: function (params, url) {
        var qs = '';
        var address = url || document.location.origin + document.location.pathname;
        for (var key in params) {
          var value = params[key];
          qs += encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&';
        }
        if (qs.length > 0) {
          qs = qs.substring(0, qs.length - 1);
          url = address + '?' + qs;
        }
        return url;
      },
      FullQueryString: function () {
        var keys = PT.Utils.Url.QueryString.All();
        var full = '?';
        for (var p in keys) {
          full += p + '=' + keys[p] + '&';
        }
        full = full.substr(0, full.length - 1);
        return full;
      },
      All: function (url, undef) {
        var pairs, qs, index, map = {};
        if (url === undef) {
          qs = window.location.search.substr(1);
        } else {
          index = url.indexOf('?');
          if (index === -1) { return {}; }
          qs = url.substring(index + 1);
        }
        pairs = qs.split('&');
        if (pairs === '') { return {}; }
        for (var i = 0; i < pairs.length; ++i) {
          var p = pairs[i].split('=');
          if (p.length !== 2) { continue; }
          map[p[0]] = decodeURIComponent(p[1].replace(/\+/g, ' '));
        }
        return map;
      }
    },
    GetProtocol: function () {
      return window.location.protocol;
    },
    GetHost: function () {
      return window.location.host;
    },
    GetPath: function () {
      return window.location.pathname;
    },
    FullUrl: function () {
      return PT.Utils.Url.GetProtocol() + "//" +
        PT.Utils.Url.GetHost() +
        ((PT.Utils.Url.GetPath() !== '/') ? PT.Utils.Url.GetPath() : '') +
        PT.Utils.Url.QueryString.FullQueryString();
    }
  },
  /*
  ===================================
  Event utils
  ===================================
  */
  Event: {
    variables: {},
    Trigger: function (eventName, eventState) {
      var event = jQuery.Event(eventName);
      event.state = eventState;
      jQuery.event.trigger(event);
    },
    Heartbeat: function (eventName, eventState, interval) {
      var event = jQuery.Event(eventName);
      event.state = eventState;
      this.variables[eventName] = setInterval(function () { jQuery.event.trigger(event); }, interval);
    },
    Flatline: function (eventName) {
      clearInterval(this.variables[eventName]);
      delete (this.variables[eventName]);
    }
  },
  /*
  ===================================
  UserAgent utils
  ===================================
  */
  UserAgent: {
    Detect: function (returnValue) {
      var os;
      var browser;
      var version;
      var ua = window.navigator.userAgent;
      var platform = window.navigator.platform;
      var mobile;
      if (/MSIE/.test(ua)) {
        browser = 'Internet Explorer';
        if (/IEMobile/.test(ua)) {
          browser += ' Mobile';
        }
        version = /MSIE \d+[.]\d+/.exec(ua)[0].split(' ')[1];
      } else if (/Chrome/.test(ua)) {
        browser = 'Chrome';
        version = /Chrome\/[\d\.]+/.exec(ua)[0].split('/')[1];
      } else if (/Opera/.test(ua)) {
        browser = 'Opera';
        if (/mini/.test(ua)) {
          browser += ' Mini';
        } else if (/Mobile/.test(ua)) {
          browser += ' Mobile';
        }
      } else if (/Android/.test(ua)) {
        browser = 'Android Webkit Browser';
        mobile = true;
        os = /Android\s[\.\d]+/.exec(ua);
      } else if (/Firefox/.test(ua)) {
        browser = 'Firefox';
        if (/Fennec/.test(ua)) {
          browser += ' Mobile';
        }
        version = /Firefox\/[\.\d]+/.exec(ua)[0].split('/')[1];
      } else if (/Safari/.test(ua)) {
        browser = 'Safari';
        if ((/iPhone/.test(ua)) || (/iPad/.test(ua)) || (/iPod/.test(ua))) {
          os = 'iOS';
        }
      }
      if (!version) {
        version = /Version\/[\.\d]+/.exec(ua);
        if (version) {
          version = version[0].split('/')[1];
        } else {
          version = /Opera\/[\.\d]+/.exec(ua)[0].split('/')[1];
        }
      }
      if (platform === 'MacIntel' || platform === 'MacPPC') {
        os = 'Mac OS X ' + /10[\.\_\d]+/.exec(ua)[0];
        if (/[\_]/.test(os)) {
          os = os.split('_').join('.');
        }
      } else if (platform === 'Win32') {
        os = 'Windows 32 bit';
      } else if (platform == 'Win64') {
        os = 'Windows 64 bit';
      } else if (!os && /Linux/.test(platform)) {
        os = 'Linux';
      } else if (!os && /Windows/.test(ua)) {
        os = 'Windows';
      }

      switch (returnValue) {
        case 'browser':
          return browser;
        case 'version':
          return version;
        case 'os':
          return os;
        default:
          return browser + ' ' + version + ' ' + os;
      }
    },
    TransitionEndEvent: function () {
      var t,
      el = document.createElement("fakeelement");

      var transitions = {
        "transition": "transitionend",
        "OTransition": "oTransitionEnd",
        "MozTransition": "transitionend",
        "WebkitTransition": "webkitTransitionEnd"
      }

      for (t in transitions) {
        if (el.style[t] !== undefined) {
          return transitions[t];
        }
      }
    },
    Prefix: function () {
      var styles = window.getComputedStyle(document.documentElement, ''),
        pre = (Array.prototype.slice
          .call(styles)
          .join('')
          .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
        )[1],
        dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
      return {
        dom: dom,
        lowercase: pre,
        css: '-' + pre + '-',
        js: pre[0].toUpperCase() + pre.substr(1)
      };
    },
    EventSupported: function (eventName) {
      var TAGNAMES = {
        'select': 'input',
        'change': 'input',
        'submit': 'form',
        'reset': 'form',
        'error': 'img',
        'load': 'img',
        'abort': 'img'
      };
      var el = document.createElement(TAGNAMES[eventName] || 'div');
      eventName = 'on' + eventName;
      var isSupported = (eventName in el);
      if (!isSupported) {
        el.setAttribute(eventName, 'return;');
        isSupported = typeof el[eventName] == 'function';
      }
      el = null;
      return isSupported;
    }
  }
};

/*
===================================
Prototype overrides and additions
===================================
*/
/*
===================================
Add indexOf to Array prototype if it doesnt exist
===================================
*/
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (searchElement /*, fromIndex */) {
    "use strict";
    if (this === null) {
      throw new TypeError();
    }
    var t = Object(this);
    var len = t.length >>> 0;

    if (len === 0) {
      return -1;
    }
    var n = 0;
    if (arguments.length > 1) {
      n = Number(arguments[1]);
      if (n != n) { // shortcut for verifying if it's NaN
        n = 0;
      } else if (n !== 0 && n != Infinity && n != -Infinity) {
        n = (n > 0 || -1) * Math.floor(Math.abs(n));
      }
    }
    if (n >= len) {
      return -1;
    }
    var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
    for (; k < len; k++) {
      if (k in t && t[k] === searchElement) {
        return k;
      }
    }
    return -1;
  };
}
/*
===================================
String functions
===================================
*/
if (typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, '');
  };
}

/*
===================================
Date functions
===================================
*/
Date.prototype.sGetDay = function () {
  return (this.getDay() + 1) % 7;
};
Date.prototype.addDays = function (days) {
  var dat = new Date(this.valueOf());
  dat.setDate(dat.getDate() + days);
  return dat;
};

function getDays(startDate, endDate, addFn, interval) {
  addFn = addFn || Date.prototype.addDays;
  interval = interval || 1;
  var retVal = [];
  var current = new Date(startDate);
  while (current <= endDate) {
    retVal.push(new Date(current));
    current = addFn.call(current, interval);
  }
  return retVal;
}

/**
 * Protect window.console method calls, e.g. console is not defined on IE
 * unless dev tools are open, and IE doesn't define console.debug
 */
(function () {
  if (!window.console) {
    window.console = {};
  }
  // union of Chrome, FF, IE, and Safari console methods
  var m = [
    "log", "info", "warn", "error", "debug", "trace", "dir", "group",
    "groupCollapsed", "groupEnd", "time", "timeEnd", "profile", "profileEnd",
    "dirxml", "assert", "count", "markTimeline", "timeStamp", "clear"
  ];
  // define undefined methods as noops to prevent errors
  for (var i = 0; i < m.length; i++) {
    if (!window.console[m[i]]) {
      window.console[m[i]] = emptyFunction();
    }
  }
})();

function emptyFunction() { }
