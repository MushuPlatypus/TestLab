<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm2.aspx.cs" Inherits="Tester.VIA.WebForm2" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
  <title></title>
  <link href="styles/compiled.css" rel="stylesheet" />
</head>
<body>
  <form id="form1" runat="server" class="form-horizontal" action="WebForm2a.aspx">
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
        <div class="form-group">
          <div class="row">
            <div class="col-sm-5">
              <label>
                <input type="checkbox" id="ledig-jobcenter" />
                Jeg er ledig / tilknyttet et jobcenter
              </label>
            </div>
            <div class="col-sm-7">
              <div class="validation-msg validation-checkbox"></div>
            </div>
          </div>
        </div>

        <div class="form-group">
          <div class="row">
            <div class="col-sm-5">
              <label for="stillingsbetegnelse">Stillingsbetegnelse</label>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-5">
              <input type="text" class="form-control" id="stillingsbetegnelse" />
            </div>
            <div class="col-sm-7">
              <div class="validation-msg"></div>
            </div>
          </div>
        </div>

        <div class="form-group">
          <div class="row">
            <div class="col-sm-5">
              <label for="ansaettelsessted">Ansættelsessted</label>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-5">
              <input type="text" class="form-control" id="ansaettelsessted" />
            </div>
            <div class="col-sm-7">
              <div class="validation-msg"></div>
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
              <input type="text" class="form-control" id="adresse" />
            </div>
            <div class="col-sm-7">
              <div class="validation-msg"></div>
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
              <input type="tel" class="form-control" id="postnr" />
            </div>
            <div class="col-sm-7">
              <div class="validation-msg"></div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6">
            <p class="">Jeg har indenfor de sidste 5 år været studerende ved Højskolen for Videreuddannelse og Kompetenceudvikling, VIA og har tidligere indsendt dokumentation</p>
          </div>
        </div>

        <div class="form-group">
          <div class="row">
            <div class="col-sm-5">
              <div class="radio-inline">
                <label>
                  <input type="radio" name="indsendtdokumentation" class="validate-radio" data-validate-radio="indsendtdokumentation" id="inlineRadio1" value="Nej" />
                  Nej
                </label>
              </div>
              <div class="radio-inline">
                <label>
                  <input type="radio" name="indsendtdokumentation" class="validate-radio" data-validate-radio="indsendtdokumentation" id="inlineRadio2" value="Ja" />
                  Ja
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
              <label for="adgangsgivendeuddannelse">Adgangsgivende uddannelse</label>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-5">
              <select class="form-control validate-required" id="adgangsgivendeuddannelse">
                <option value=""></option>
                <option value="1">Skriv noget</option>
              </select>
            </div>
            <div class="col-sm-7">
              <div class="validation-msg">Du skal vælge noget fra listen</div>
            </div>
          </div>
        </div>

        <div class="form-group">
          <div class="row">
            <div class="col-sm-5">
              <label for="afgangsaar">Afgangsår på grunduddannelse</label>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-5">
              <select class="form-control" id="afgangsaar">
                <option value=""></option>
                <option value="1">Skriv noget</option>
              </select>
            </div>
            <div class="col-sm-7">
              <div class="validation-msg"></div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6">
            <p class="">Som en del af optagelseskravene skal du vedhæfte dokumentation for adgangsgivende uddannelse og erhvervserfaring</p>
          </div>
        </div>

        <div class="form-group">
          <div class="row">
            <div class="col-sm-5">
              <input type="file" title="Vedhæft fil..." id="file1" class="validate-file" data-filename-placement="inside" data-validate-filegroup="filedokumentation" />
            </div>
            <div class="col-sm-7">
              <div class="validation-msg">Du må kun uploade pdf filer</div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-5">
              <input type="file" title="Vedhæft fil..." id="file2" class="validate-file" data-filename-placement="inside" data-validate-filegroup="filedokumentation" />
            </div>
            <div class="col-sm-7">
              <div class="validation-msg">Du må kun uploade pdf filer</div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-5">
              <input type="file" title="Vedhæft fil..." id="file3" class="validate-file" data-filename-placement="inside" data-validate-filegroup="filedokumentation" />
            </div>
            <div class="col-sm-7">
              <div class="validation-msg">Du må kun uploade pdf filer</div>
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
  <script>
    function navigateTo(page) {
      window.location.assign(page);
    }
  </script>
  </form>
</body>
</html>
