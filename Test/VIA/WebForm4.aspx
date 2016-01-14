<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm4.aspx.cs" Inherits="Tester.VIA.WebForm4" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
  <title></title>
  <link href="styles/compiled.css" rel="stylesheet" />
</head>
<body>
  <form id="form1" runat="server" class="form-horizontal" action="http://www.google.com">
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
          <table>
            <tr>
              <td>Ordrenummer</td>
              <td>1234567890</td>
            </tr>
            <tr>
              <td>Startdato</td>
              <td>09-10-2014</td>
            </tr>
            <tr>
              <td>Sted</td>
              <td>Grenaa</td>
            </tr>
            <tr>
              <td>Pris</td>
              <td>8.500,00</td>
            </tr>
          </table>
          <p>
            Kvitteringen er sendt til:<br />
            modtagermail@mail.com
          </p>
          <p>
            Får du brug for at annullere din tilmelding skal du kontakte studiesekretæren på <a href="mailto:lmel@viauc.dk">lmel@viauc.dk</a>          Tilmeldingen kan dog ikke annulleres efter ansøgningsfristens udløb.
          </p>
        </div>
      </div>
    </div>
    <div class="footer">
      <a href="#" class="col-sm-6 left">Gå til forsiden for Videreuddannelse</a>
      <a href="#" class="col-sm-6 right">Modtag vores nyhedsbrev</a>
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
