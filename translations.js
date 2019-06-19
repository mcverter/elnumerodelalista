function QUESTION_TO_INTERNATIONAL(questionName, language) {
/*  "qWhatList",
    "qHowList",
    "qWhatList",
    "qHowList",
    "qWaitTime",
    "qQuantity",
    "qCrossing",
    "qWhatAsylum",
    "qCFI",
    "qMano",
    "qPostCFI",
    "qWhatHielera",
    "qWhatDetencion",
    "qDetencionPrep",
    "qMyContact",
    "qLeviticus",
    "qACAB",
    "qBusquedas",
    "qMutualAid"
*/
}

function INTERNATIONAL_DIV_TRANSLATIONS(div, language) {
  switch (div) {
    case "mas_informacion":
      switch (language) {
        case "en":
          return "MORE INFORMATION";
        case "fr":
          return "PLUS D'INFORMATION";
        case "ht":
          return "PLIS ENFOMASYON";
        default:
          return "MAS INFORMACION";
      }

    case "sobre":
      switch (language) {
        case "en":
          return "ON";
        case "fr":
          return "SUR";
        case "ht":
          return "SOU";
        default:
          return "SOBRE";
      }

    case "el_numero_es":
      switch (language) {
        case "en":
          return "THE NUMBER IS";
        case "fr":
          return "LE NOMBRE EST";
        case "ht":
          return "NIMEWO A SE";
        default:
          return "EL NUMERO ES";
      }

    case "el_numero_de_la_lista":
      switch (language) {
        case "en":
          return "THE LIST NUMBER";
        case "fr":
          return "LE NOMBRE DE LA LISTE";
        case "ht":
          return "NIMEWO LIS LA";
        default:
          return "EL NUMERO DE LA LISTA";
      }
  }
}

function hoy(language) {
  switch (language) {
    case "en":
      return "today";
    case "es":
      return "hoy";
    case "ht":
      return "jodi a";
    case "fr":
      return "aujourd'hui";
    default:
      return "hoy";
  }
}

function ayer(language) {
  switch (language) {
    case "en":
      return "yesterday";
    case "es":
      return "ayer";
    case "fr":
      return "aujourd'hui";
    case "ht":
      return "ye";
    default:
      return "ayer";
  }
}

function xDaysAgo(language, x) {
  switch (language) {
    case "en":
      return "yesterday";
    case "es":
      return "ayer";
    case "fr":
      return "aujourd'hui";
    case "ht":
      return "ye";
    default:
      return "ayer";
  }
}

function questionToInternational(questionName, language) {
  debugger;
  var divElement = document.getElementById(questionName);
  var qAndA = QUESTION_DIV_TRANSLATIONS(questionName, language);
  divElement.getElementsByTagName("dd")[0].innerHTML = qAndA[0];
  divElement.getElementsByTagName("dt")[0].innerHTML = qAndA[1];

}
function divToInternational(divName, language) {
  var divElement = document.getElementById(divName);
  divElement.innerHTML = INTERNATIONAL_DIV_TRANSLATIONS(divName, language);
}
