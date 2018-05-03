'use strict';

let form = document.querySelector(".sign-in-htm"),
  formRegistration = document.querySelector(".sign-up-htm");

form.addEventListener(
  "submit",
  function(ev) {
    let oOutput = document.querySelectorAll(".error-message")[0],
      obj = {},
      oData = new FormData(form);
    for (const [k, v] of oData) {
      obj[k] = v;
    }

    let oReq = new XMLHttpRequest();
    oReq.open("POST", "https://neto-api.herokuapp.com/signin");
    oReq.setRequestHeader("Content-Type", "application/json");
    oReq.addEventListener("load", onLoad);

    function onLoad() {
      let data = JSON.parse(oReq.responseText);
      if (data.message) {
        oOutput.textContent = data.message;
      } else {
        oOutput.textContent = `ѕользователь ${data.name} успешно авторизован`;
      }
    }

    oReq.send(JSON.stringify(obj));
    ev.preventDefault();
  },
  false
);

formRegistration.addEventListener(
  "submit",
  function(ev) {
    let oOutput = document.querySelectorAll(".error-message")[1],
      obj = {},
      oData = new FormData(formRegistration);
    for (const [k, v] of oData) {
      obj[k] = v;
    }

    let oReq = new XMLHttpRequest();
    oReq.open("POST", "https://neto-api.herokuapp.com/signup");
    oReq.setRequestHeader("Content-Type", "application/json");
    oReq.addEventListener("load", onLoad);

    function onLoad() {
      let data = JSON.parse(oReq.responseText);
      if (data.message) {
        oOutput.textContent = data.message;
      } else {
        oOutput.textContent = `ѕользователь ${
          data.name
        } успешно зарегистрирован`;
      }
    }

    oReq.send(JSON.stringify(obj));
    ev.preventDefault();
  },
  false
);


