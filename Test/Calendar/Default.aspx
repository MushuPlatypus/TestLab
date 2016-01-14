<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Tester.Calendar.Default" %>

<%@ Register Src="~/Calendar/Calendar.ascx" TagPrefix="uc1" TagName="Calendar" %>


<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
      <uc1:Calendar runat="server" id="Calendar" />
    </div>
    </form>
  <script src="clndr.js"></script>
  <asp:LinkButton runat="server" OnClick="DoSomething"></asp:LinkButton>
</body>
</html>
