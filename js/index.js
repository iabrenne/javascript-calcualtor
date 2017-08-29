"use strict";

$(document).ready(function () {

  var decCounter = 0;

  $("#decimal").click(function () {
    var curDisplayValue = $("#display").html();
    if (decCounter == 0) {
      decCounter++;
      curDisplayValue = curDisplayValue + this.value;
      populateDisplay(curDisplayValue);
    }
  });

  $("#equals").click(function () {
    populateDisplay(eval($("#display").html()));
  });

  $("#clear").click(function () {
    $("#display").html("0");
    decCounter = 0;
  });

  $(".calc-key").click(function () {
    populateDisplay(disallowLeadZero(this.value));
  });

  $(".operator-key").click(function () {
    populateDisplay(disallowLeadZero(this.value));
    decCounter = 0;
  });
});

var disallowLeadZero = function disallowLeadZero(myHtmlValue) {
  var curDisplayValue = $("#display").html();
  var valuetoDisplay;
  if (curDisplayValue != "" && curDisplayValue == 0) {

    valuetoDisplay = myHtmlValue;
  } else valuetoDisplay = curDisplayValue + myHtmlValue;
  return valuetoDisplay;
};

var populateDisplay = function populateDisplay(myValtoDisplay) {
  $("#display").html(myValtoDisplay);
};