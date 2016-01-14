<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm3.aspx.cs" Inherits="Tester.VIA.WebForm3" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
  <title></title>
  <link href="styles/compiled.css" rel="stylesheet" />
</head>
<body>
  <form id="form1" runat="server" class="form-horizontal" action="WebForm4.aspx">
  <div class="form-wizard" role="dialog" aria-labelledby="form-wizard__top-bar__title" aria-describedby="form-wizard__description">
    <div class="content">
      <div class="top-bar">
        <h2 class="top-bar__title">Online tilmelding</h2>
      </div>
      <div class="row">
        <div class="content__description col-sm-7">
          <h3 class="content__description__h3">
            Nedsat funktionsevne,<br />
            udvikling og inklusion
          </h3>
          <p>Aktivitetsnummer 1234567890</p>
          <p>
            Vær opmærksom på at din tilmelding er bindende efter<br />
            ansøgningsfristens udløb
          </p>
        </div>
      </div>
      <ol class="content__progress">
        <li class="">Person info</li>
        <li class="">Uddannelse</li>
        <li class="state_current">Betaling</li>
      </ol>
      <fieldset class="content__fieldset">
        <legend>Kontaktoplysninger</legend>
        <div class="form-group">
          <div class="row">
            <div class="col-sm-6">
              <p class="">Betaling foretages som:</p>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-5">
              <div class="radio">
                <label>
                  <input type="radio" id="radio1" value="Privatperson" name="betalingforetages" class="validate-radio" data-validate-radio="betalingforetages" />
                  Privatperson.<br />
                  Faktura fremsendes til adresse.
                </label>
              </div>
              <div class="radio">
                <label>
                  <input type="radio" id="radio2" value="Offentlig/privat arbejdsgiver" name="betalingforetages" class="validate-radio" data-validate-radio="betalingforetages" />
                  Offentlig/privat arbejdsgiver.<br />
                  EAN nr. oplyses
                </label>
              </div>
              <div class="radio">
                <label>
                  <input type="radio" id="radio3" value="Privat arbejdsgiver" name="betalingforetages" class="validate-radio" data-validate-radio="betalingforetages" />
                  Privat arbejdsgiver.<br />
                  CVR-nr. oplyses
                </label>
              </div>
            </div>
            <div class="col-sm-7">
              <div class="validation-msg">Du skal vælge én af mulighederne</div>
            </div>
          </div>
        </div>

        <div class="form-group">
          <div class="row">
            <div class="col-sm-5">
              <label for="navn">Navn</label>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-5">
              <input type="text" class="form-control validate-required" id="navn" />
            </div>
            <div class="col-sm-7">
              <div class="validation-msg">Du skal skrive et navn</div>
            </div>
          </div>
        </div>

        <div class="form-group">
          <div class="row">
            <div class="col-sm-5">
              <label for="adresse">Adresse</label>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-5">
              <input type="text" class="form-control validate-required" id="adresse" />
            </div>
            <div class="col-sm-7">
              <div class="validation-msg">Du skal skrive en adresse</div>
            </div>
          </div>
        </div>

        <div class="form-group">
          <div class="row">
            <div class="col-sm-5">
              <label for="postnr">Postnr.</label>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-5">
              <input type="tel" class="form-control validate-required" id="postnr" />
            </div>
            <div class="col-sm-7">
              <div class="validation-msg">Du skal skrive et postnummer</div>
            </div>
          </div>
        </div>

        <div class="form-group">
          <div class="row">
            <div class="col-sm-5">
              <label for="additional">Evt. bemærkninger</label>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-5">
              <textarea id="additional"></textarea>
            </div>
            <div class="col-sm-7">
              <div class="validation-msg"></div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6">
            <p class="">
              Tilmeldingen kan først sendes afsted når alle obligatoriske felter er korrekt udfyldt.
            </p>
            <p>
            Ved online tilmelding er al kommunikation mellem dig og serveren krypteret så ingen udenforstående kan tyde eller ændre de informationer du indtaster.
          </div>
        </div>

        <div class="form-group col-sm-5">
          <input type="submit" class="content__fieldset__next" value="Fortsæt" />
        </div>

      </fieldset>
    </div>
  </div>
  <script src="scripts/jquery-1.11.2.min.js"></script>
  <script src="scripts/bootstrap.file-input.js"></script>
  <script src="scripts/form-wizard.js"></script>
  <script>
    function navigateTo(page) {
      window.location.assign(page);
    }
  </script>
  </form>
</body>
</html>
