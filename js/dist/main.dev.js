"use strict";

var elForm = document.querySelector(".js-form");
var elInput = document.querySelector(".js-input");
var elSelect = document.querySelector(".js-select");
var elResult = document.querySelector(".js-result");
var elUsd = document.querySelector(".js-usd");
var elEuro = document.querySelector(".js-euro");
var elRubl = document.querySelector(".js-rubl");
var USD_TO_UZS = 11000;
var EURO_TO_UZS = 11800;
var RUBL_TO_UZS = 1700;
elForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var money = elInput.value.trim();
  var selectValue = elSelect.value;
  var kurslar = 0;

  if (selectValue == "EURO") {
    kurslar = "EURO TRANSLATE ".concat(money * EURO_TO_UZS, " so'm");
  } else if (selectValue == "USD") {
    kurslar = "USD TRANSLATE ".concat(money * USD_TO_UZS, " so'm");
  } else if (selectValue == "RUBL") {
    kurslar = "RUBL TRANSLATE ".concat(money * RUBL_TO_UZS, " so'm");
  }

  elResult.textContent = "".concat(kurslar);
});