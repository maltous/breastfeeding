function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Pgm7w474jY":
        Script1();
        break;
      case "6QV6LzBuR2u":
        Script2();
        break;
      case "5hhAEfiwwvE":
        Script3();
        break;
      case "6Gan6wvjUSo":
        Script4();
        break;
      case "5aB7zi1yIs4":
        Script5();
        break;
      case "6DuKWlK9AEW":
        Script6();
        break;
      case "68zJayO9Hsn":
        Script7();
        break;
      case "64OLVzQ4ckc":
        Script8();
        break;
      case "6Q6bNuVhfFF":
        Script9();
        break;
      case "5u7Kd9xdL1O":
        Script10();
        break;
      case "60oG99spodc":
        Script11();
        break;
      case "5jXp5DbUBex":
        Script12();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  $("#tab-customlink").hide();
}

function Script3()
{
  var player = GetPlayer();
var email="nsdd_courses@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  var player = GetPlayer();
var email="nsdd_courses@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script6()
{
  $("#tab-customlink").hide();
}

function Script7()
{
  $("#tab-customlink").hide();
}

function Script8()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script9()
{
  $("#tab-customlink").show();
}

function Script10()
{
  $("#tab-customlink").hide();
}

function Script11()
{
  $("#tab-customlink").hide();
}

function Script12()
{
  window.print();
}

