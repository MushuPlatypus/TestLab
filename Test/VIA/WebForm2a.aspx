<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm2a.aspx.cs" Inherits="Tester.VIA.WebForm2a" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
  <title></title>
  <link href="styles/compiled.css" rel="stylesheet" />
</head>
<body>
  <form id="form1" runat="server" class="form-horizontal" action="WebForm3.aspx">
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
        <li class="state_current">Uddannelse</li>
        <li class="">Betaling</li>
      </ol>
      <fieldset class="content__fieldset">
        <legend>Kontaktoplysninger</legend>
        <div class="row">
          <div class="col-sm-7">
            <p>
              Du har angivet, at du er ledig og ikke tidligere studerende men har ikke vedhæftet bilag.              Hvis du vil fortsætte din tilmelding, skal dokumentation for adgangsgivende uddannelse og erhvervserfaring samt AR245 eller kontrakt med jobcenter sendes inden tre dage til studiesekretæren på lmel@viauc.dk
            </p>
            <p>Ønsker du stadig at fortsætte?</p>
          </div>
        </div>

        <div class="form-group">
          <div class="col-sm-5">
            <input type="submit" class="content__fieldset__next" value="Ja, jeg vil fortsætte" />
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-5">
            <a class="content__fieldset__prev" href="#" onclick="window.history.back();return false;">Nej, jeg vil vedhæfte dokumentationen</a>
          </div>
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
