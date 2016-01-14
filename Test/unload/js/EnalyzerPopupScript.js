// Enalyzer Popup Script v0.1
//
// Enalyzer Inc. (c) 2005 - This script is the property of Enalyzer Inc.
//
// 1.	This script (or parts of it) may only be used by customers of Enalyzer Inc.
// 2.	This script (or parts of it) may only be used with Enalyzer Inc. Products.
// 3.	Customers of Enalyzer Inc. are allowed to modify this the script to serve their needs. As long as:
//
//		- This disclamer is not removed
//		- The script is used with products of Enalyzer Inc.
//						

var enalyzerSurveyWindow;
var enalyzerClientInformation;
var enalyzerSurveyWindow;

// Survey Invitation Class
function EnalyzerSurveyInvitation() {

  // Class Members
  this.SurveyUrl = null;
  this.ClientIp;
  this.ClientIpsAllowed;
  this.ClientIpsDenied;
  this.CookieSurveyRelatedIdentifier;
  this.InvitationHeight = 300; //Default value - do not change here - Change on instance of class. 
  this.InvitationWidth = 550;  //Default value - do not change here - Change on instance of class. 
  this.SurveyHeight = 600;     //Default value - do not change here - Change on instance of class. 
  this.SurveyWidth = 800;      //Default value - do not change here - Change on instance of class. 
  this.width = 400;
  this.height = 300;


  this.SurveyOpenOnLeavingDomain = false; //Default value - do not change here - Change on instance of class. 

  // Exposed Methods
  this.Execute = ExecuteMethod;
  this.Accept = AcceptMethod;
  this.Decline = DeclineMethod;
  this.PositionInvitation = PositionInvitationMethod;


  // Methods - Start 
  function ExecuteMethod() {
    enalyzerClientInformation = new EnalyzerClientInformation();

    if (PerformIpValidation(this) == false) {
      return;
    }

    if (enalyzerClientInformation.BrowserIsMozillaNN4) {
      var enabled = testCookie()
      if (!enabled == 0) {
        return false;
      }
    } else {
      if (!navigator.cookieEnabled) {
        return false;
      }
    }

    if (HasAcceptedOrDeclinedBefore(this) == true) {
      var objSurveyInvitation = document.getElementById('divSurveyInvitation');
      objSurveyInvitation.parentNode.removeChild(objSurveyInvitation);
      return;
    }

    ShowInvitation(this);
  }

  function testCookie() {
    var d = new Date();
    var timeout = d.getTime() + (1 * 60 * 1000);
    var expires = new Date();
    expires.setTime(timeout);
    var expires_str = expires.toGMTString();
    var test_str = "IsEnalyzerCookieEnabled=" + 1 + ";path=/;"
    var domain = "www.enalyzer.com";
    test_str += domain + "; expires=" + expires_str;
    document.cookie = test_str;
    enabled = document.cookie.indexOf("IsEnalyzerCookieEnabled");
    if (enabled == 0) {
      return 0;
    } else {
      return 1;
    }

  }


  function HasAcceptedOrDeclinedBefore(classRef) {

    if (document.cookie.indexOf(escape(classRef.CookieSurveyRelatedIdentifier)) > -1) {
      return true;
    } else {
      return false;
    }

  }

  function AcceptMethod() {

    if (this.SurveyOpenOnLeavingDomain) {
      document.forms['EnalyzerSurveyInvitationForm'].elements["hdnSurveyUrl"].value = this.SurveyUrl;
      enalyzerSurveyWindow = EnalyzerCreateReferencedWindow(enalyzerSurveyWindow, "EnalyzerPopupSurveyOnLeaveDomainMonitor.htm", this.SurveyWidth, this.SurveyHeight, 'scrollbars=yes,resizable=yes')
    } else {
      enalyzerSurveyWindow = EnalyzerCreateReferencedWindow(enalyzerSurveyWindow, this.SurveyUrl, this.SurveyWidth, this.SurveyHeight, 'scrollbars=yes,resizable=yes')
    }
    HideInvitation();
    WriteCookie(this);
  }

  function DeclineMethod() {
    HideInvitation();
    WriteCookie(this);
  }

  function WriteCookie(classRef, name, value) {

    var timeTenYears = new Date();
    timeTenYears.setFullYear(timeTenYears.getFullYear() + 10);
    if (this.BrowserIsInternetExplorer) {
      document.cookie = "EnalyzerInvitation=" + escape(classRef.CookieSurveyRelatedIdentifier) + "; expires=" + timeTenYears.toGMTString();
    } else {
      if (this.BrowserIsNMozillaNN4) {
        var d = new Date();
        var timeout = d.getTime() + (1 * 60 * 1000);
        var expires = new Date();
        expires.setTime(timeout);
        var expires_str = expires.toGMTString();
        var test_str = "IsEnalyzerCookieEnabled=" + 1 + ";path=/;"
        var domain = "www.enalyzer.com";
        test_str += domain + "; expires=" + expires_str;
        document.cookie = test_str;
      } else {
        document.cookie = "EnalyzerInvitation=" + escape(classRef.CookieSurveyRelatedIdentifier) + "; expires=" + timeTenYears.toGMTString();
      }
    }
  }


  function RemoveCookie(classRef) {
    var timeTenYearsBack = new Date();
    timeTenYearsBack.setFullYear(timeTenYearsBack.getFullYear() - 10);
    document.cookie = "EnalyzerInvitation=" + escape(classRef.CookieSurveyRelatedIdentifier) + "; expires=" + timeTenYearsBack.toGMTString();
  }



  //Used for positioning the PopupWindow and the overlay Div***********************************************************************
  function PositionInvitationMethod(classRef) {
    //Get the classRef it if is null
    if (classRef == null) {
      classRef = this;
    }

    //
    var InvitationPositionLeftOffSet = (enalyzerClientInformation.ClientPageWidth - classRef.InvitationWidth) / 2;
    var InvitationPositionTopOffSet = (enalyzerClientInformation.ClientPageHeight - classRef.InvitationHeight) / 2;


    //
    EnalyzerClientInformation();
    enalyzerClientInformation = new EnalyzerClientInformation();

    //Opera and Internet Explorer
    if (enalyzerClientInformation.BrowserIsOpera || enalyzerClientInformation.BrowserIsInternetExplorer) {
      document.all.divSurveyInvitation.style.top = 0;
      document.all.divSurveyInvitation.style.left = 0;
      document.all.divSurveyInvitation.style.height = "100%";
      document.all.divSurveyInvitation.style.width = "100%";
    }
    else {
      //Mozilla NN6
      if (enalyzerClientInformation.BrowserIsMozillaNN6) {
        document.getElementById("divSurveyInvitation").style.top = "50%";
        document.getElementById("divSurveyInvitation").style.left = "50%";
        document.getElementById("divSurveyInvitation").style.marginTop = "-" + (classRef.InvitationHeight) / 2 + "px";
        document.getElementById("divSurveyInvitation").style.marginLeft = "-" + (classRef.InvitationWidth) / 2 + "px";
      }
      else {
        //Mozilla NN4
        if (enalyzerClientInformation.BrowserIsMozillaNN4) {
          document.layers['divSurveyInvitation'].position = 'absolute';
          document.layers['divSurveyInvitation'].top = InvitationPositionTopOffSet;
        }
        else
          //Anything else
        {
          document.layers['divSurveyInvitation'].position = 'absolute';
          document.layers['divSurveyInvitation'].top = InvitationPositionTopOffSet;
          document.layers['divSurveyInvitation'].left = InvitationPositionLeftOffSet;
        }
      }
    }
  }
  //********************************************************************************************************************		
  //Function which displays the Popup***********************************************************************************
  function ShowInvitation(classRef) {
    enalyzerClientInformation = new EnalyzerClientInformation();
    EnalyzerToggleSelects('hidden')
    if (enalyzerClientInformation.BrowserIsOpera || enalyzerClientInformation.BrowserIsInternetExplorer) {
      //Show the Popup div
      document.all.divSurveyInvitation.style.visibility = 'visible';
      //Show the Background div
      document.all.outerDivSurveyInvitation.style.visibility = 'visible';

    }
    else {
      if (enalyzerClientInformation.BrowserIsMozillaNN4) {
        //Show the Popup div
        document.layers['divSurveyInvitation'].visibility = "visible";
        //Show the Background div
        document.layers['outerDivSurveyInvitation'].visibility = "visible";
      }
      else {
        //Show the Popup div
        document.getElementById("divSurveyInvitation").style.visibility = "visible";
        //Show the Background div
        document.getElementById("outerDivSurveyInvitation").style.visibility = "visible";
      }
    }
    //Position the Popup div
    PositionInvitationMethod(classRef);
  }
  //********************************************************************************************************************
  //Function which hides the Popup**************************************************************************************
  function HideInvitation() {
    if (enalyzerClientInformation.BrowserIsOpera || enalyzerClientInformation.BrowserIsInternetExplorer) {
      //Hide the Popup div
      document.all.divSurveyInvitation.style.zIndex = -50;
      document.all.divSurveyInvitation.style.visibility = 'hidden';
      //Hide the Background div
      document.all.outerDivSurveyInvitation.style.visibility = "hidden";
      document.all.outerDivSurveyInvitation.style.zIndex = -50;
    }
    else {
      if (enalyzerClientInformation.BrowserIsMozillaNN4) {
        //Hide the Popup div
        document.layers['divSurveyInvitation'].visibility = 'hide';
        document.layers['divSurveyInvitation'].zIndex = -50;
        //Hide the Background div
        document.layers("outerDivSurveyInvitation").visibility = "hidden";
        document.layers("outerDivSurveyInvitation").zIndex = -50;
      }
      else {
        //Hide the Popup div
        document.getElementById("divSurveyInvitation").style.visibility = "hidden";
        document.getElementById("divSurveyInvitation").style.zIndex = -50;
        //Hide the Background div
        document.getElementById("outerDivSurveyInvitation").style.visibility = "hidden";
        document.getElementById("outerDivSurveyInvitation").style.zIndex = -50;
      }
    }
  }
  //********************************************************************************************************************

  function CookiePresent(classRef) {
    return false;
  }

  function PerformIpValidation(classRef) {
    var ipValid = true;

    if (classRef.ClientIpsAllowed != null || classRef.ClientIpsDenied != null) {

      if (classRef.ClientIpsAllowed != null)
        classRef.ClientIpsAllowed = classRef.ClientIpsAllowed.replace(" ", "");

      if (classRef.ClientIpsDenied != null)
        classRef.ClientIpsDenied = classRef.ClientIpsDenied.replace(" ", "");

      //By default the ip checks only work if the Ip property on the class is set
      if (classRef.ClientIp != null) {

        //Check allow array
        if (classRef.ClientIpsAllowed != null) {
          if (!IsIpInTheList(classRef.ClientIp, classRef.ClientIpsAllowed)) {
            ipValid = false;
          }
        }

        //Check deny array - This check overrules the allow array
        if (classRef.ClientIpsDenied != null) {
          if (IsIpInTheList(classRef.ClientIp, classRef.ClientIpsDenied)) {
            ipValid = false;
          }
        }
      }
    }


    return ipValid;
  }

  function IsIpInTheList(ip, ipList) {

    var blnIpIsInTheList = false;
    var arIpList = ipList.split(",");

    for (var iIp = 0; iIp < arIpList.length; iIp++) {

      if (IpMatchesIpOrMask(ip, arIpList[iIp])) {
        blnIpIsInTheList = true;
      }

    }
    return blnIpIsInTheList;

  }


  function IpMatchesIpOrMask(clientIp, listIp) {

    var blnMatched = true;
    var arClientIpParts, arListIpParts;
    if (clientIp.length > 0 && listIp.length > 0) {
      arClientIpParts = clientIp.split(".");
      arListIpParts = listIp.split(".");

      if (arClientIpParts.length == arListIpParts.length) {

        for (var iIp = 0; iIp < arClientIpParts.length; iIp++) {

          if (arClientIpParts[iIp] != arListIpParts[iIp] && arListIpParts[iIp] != "*") {

            blnMatched = false;
            break;
          }
        }
      } else {
        blnMatched = false;
      }
    }

    return blnMatched;

  }


  // Methods - End

} // SurveyInvitation Class End


function EnalyzerCreateReferencedWindow(objWindow, strUrl, intWidth, intHeight, strProperties) {
  if (typeof objWindow == 'undefined' || objWindow.closed) {
    if (strProperties.length > 0) { strProperties = ',' + strProperties }
    objWindow = window.open(strUrl, '', 'top=' + (screen.availHeight - intHeight) / 2 + ',left=' + (screen.availWidth - intWidth) / 2 + ',width=' + intWidth + ',height=' + intHeight + strProperties);
  }
  else if (objWindow.document.location.href.slice(objWindow.document.location.href.length - strUrl.length, objWindow.document.location.href.length) != strUrl) {
    objWindow.close();
    if (strProperties.length > 0) { strProperties = ',' + strProperties }
    objWindow = window.open(strUrl, '', 'top=' + (screen.availHeight - intHeight) / 2 + ',left=' + (screen.availWidth - intWidth) / 2 + ',width=' + intWidth + ',height=' + intHeight + strProperties);
  }
  else {
    objWindow.focus();
  }
  return objWindow;
}

function EnalyzerToggleSelects(action) {
  for (var i = 0; i < document.forms.length; i++) {
    var colElements = document.forms[i];
    for (var j = 0; j < colElements.length; j++) {
      if (colElements[j].type == "select-one") {
        colElements[j].style.visibility = action;
      }
    }
  }
}

//Function used for getting information about the browser**********************************************************************
function EnalyzerClientInformation() {
  this.BrowserIsInternetExplorer = false;
  this.BrowserIsMozilla = false;
  this.BrowserIsMozillaNN4 = false;
  this.BrowserIsMozillaNN6 = false;
  this.BrowserIsOpera = false;

  this.BrowserVersion;
  this.ClientPageWidth;
  this.ClientPageHeight;
  this.ClientPageTopOffset;
  this.ClientPageLeftOffset;

  this.ClientInfoString;


  //Browser identification~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  if (navigator.appName == 'Microsoft Internet Explorer') {
    this.BrowserIsInternetExplorer = true;
  }

  if (navigator.appName == 'Netscape') {
    this.BrowserIsMozilla = true;

    if (document.layers) {
      this.BrowserIsMozillaNN4 = true;
    }

    if (document.getElementById) {
      this.BrowserIsMozillaNN6 = true;
    }
  }

  if (window.opera) {
    this.BrowserIsOpera = true;
  }
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


  //
  this.BroswerVersion = parseInt(navigator.appVersion);


  //Page information~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //Width	    
  if (this.BrowserIsInternetExplorer) {
    this.ClientPageWidth = document.body.offsetWidth + 20;
  }
  else if (this.BrowserIsMozilla) {
    //this.ClientPageWidth = window.innerWidth;
    this.ClientPageWidth = document.body.clientWidth;
  }

  //Height
  if (this.BrowserIsInternetExplorer) {
    this.ClientPageHeight = document.body.offsetHeight;
  } else if (this.BrowserIsMozilla) {
    //this.ClientPageHeight = window.innerHeight;
    this.ClientPageHeight = document.body.clientHeight;
  }

  //Top offset
  if (this.BrowserIsInternetExplorer) {
    this.ClientPageTopOffset = document.body.scrollTop;
  } else if (this.BrowserIsMozilla) {
    this.ClientPageTopOffset = window.pageYOffset;
  }

  //Left offset
  if (this.BrowserIsInternetExplorer) {
    this.ClientPageLeftOffset = document.body.scrollLeft;
  } else if (this.BrowserIsMozilla) {
    this.ClientPageLeftOffset = window.pageXOffset;
  }
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


  ComposeClientInfoString(this);

  function ComposeClientInfoString(classRef) {

    classRef.ClientInfoString = 'BrowserIsInternetExplorer: ' + classRef.BrowserIsInternetExplorer + "\n";
    classRef.ClientInfoString = classRef.ClientInfoString + 'BrowserIsMozilla: ' + classRef.BrowserIsMozilla + "\n";
    classRef.ClientInfoString = classRef.ClientInfoString + 'BroswerVersion: ' + classRef.BroswerVersion + "\n";

    classRef.ClientInfoString = classRef.ClientInfoString + 'ClientPageWidth: ' + classRef.ClientPageWidth + "\n";
    classRef.ClientInfoString = classRef.ClientInfoString + 'ClientPageHeight: ' + classRef.ClientPageHeight + "\n";
    classRef.ClientInfoString = classRef.ClientInfoString + 'ClientPageTopOffset: ' + classRef.ClientPageTopOffset + "\n";
    classRef.ClientInfoString = classRef.ClientInfoString + 'ClientPageLeftOffset: ' + classRef.ClientPageLeftOffset + "\n";
  }
}
//******************************************************************************************************************************
// Enalyzer Popup Script - End