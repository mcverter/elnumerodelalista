function INTERNATIONAL_DIV_TRANSLATIONS(div, language) {
  switch (div) {
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

function divToInternational(divName, language) {
  var divElement = document.getElementById(divName);
  divElement.innerText = INTERNATIONAL_DIV_TRANSLATIONS(divName, language);
}
