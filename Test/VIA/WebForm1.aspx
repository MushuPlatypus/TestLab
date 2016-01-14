<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="Tester.VIA.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
  <title></title>
  <link href="styles/compiled.css" rel="stylesheet" />
</head>
<body>
  <form id="form1" runat="server" class="form-horizontal" action="WebForm2.aspx">
  <div class="form-wizard" role="dialog" aria-labelledby="form-wizard__top-bar__title" aria-describedby="form-wizard__description">
    <div class="content">
      <div class="top-bar">
        <h2 class="top-bar__title">Online tilmelding</h2>
        <%--<div class="form-wizard__content__top-bar__close"></div>--%>
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
        <li class="state_current">Person info</li>
        <li class="">Uddannelse</li>
        <li class="">Betaling</li>
      </ol>
      <fieldset class="content__fieldset">
        <legend>Kontaktoplysninger</legend>
        <div class="row">
          <div class="form-group">
            <div class="row">
              <div class="col-sm-5">
                <label for="name-given">Fornavn</label>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-5">
                <input type="text" class="form-control validate-required" id="name-given" />
              </div>
              <div class="col-sm-7">
                <div class="validation-msg">Fornavn skal indtastes. Fx. Thomas</div>
              </div>
            </div>
          </div>
        </div>

        <div class="form-group">
          <div class="row">
            <div class="col-sm-5">
              <label for="name-family">Efternavn</label>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-5">
              <input type="text" class="form-control validate-required" id="name-family" />
            </div>
            <div class="col-sm-7">
              <div class="validation-msg">Efternavn skal indtastes. Fx. Petersen</div>
            </div>
          </div>
        </div>


        <div class="form-group">
          <div class="row">
            <div class="col-sm-5">
              <label for="cpr-nr">CPR-nr.</label>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-5">
              <input type="tel" class="form-control validate-required validate-cpr" id="cpr-nr" />
            </div>
            <div class="col-sm-7">
              <div class="validation-msg" id="cprcheck">CPR nr. skal indtastes. Fx. 111111-1111</div>
            </div>
          </div>
        </div>

        <div class="form-group">
          <div class="row">
            <div class="col-sm-5">
              <label for="telephone">Mobiltelefon</label>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-5">
              <input type="tel" class="form-control validate-required  validate-telephone" id="telephone" />

            </div>
            <div class="col-sm-7">
              <div class="validation-msg">Telefonnummer skal indtastes. Fx. 44444444</div>
            </div>
          </div>
        </div>

        <div class="form-group">
          <div class="row">
            <div class="col-sm-5">
              <label for="email">E-mail</label>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-5">
              <input type="email" class="form-control validate-required validate-email" id="email" />
            </div>
            <div class="col-sm-7">
              <div class="validation-msg"></div>
            </div>
          </div>
        </div>


        <div class="form-group">
          <div class="row">
            <div class="col-sm-5">
              <label for="email-repeat">Gentag e-mail</label>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-5">
              <input type="email" class="form-control validate-required validate-email validate-repeat" data-validate-repeat="email" id="email-repeat" />
            </div>
            <div class="col-sm-7">
              <div class="validation-msg"></div>
            </div>
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
  </form>
</body>
</html>
