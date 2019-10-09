let list_date;
let language;
let translations = {};
let defaultLanguage = "es";
loadLanguageJson(defaultLanguage).then();

const divs_to_translate = [
  "el-numero-es",
  "el-numero-de-la-lista",
  "sobre",
  "mas-informacion",
  "language-picker-label",
  "dont-bug-me",
  "disclaimer",
];

const questions_to_translate = [
  "qWhySoSlow",
  "qWhatList",
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
  "qRFM",
  "qBusquedas",
  "q589",
  "qAntifascist",
  "qMutualAid"
];

/* language is either specified in URL or browser default language */
const getParameters = window.location.search.substr(1);
language = getParameters.match(/language=(\w+)/) ?
    getParameters.substr(getParameters.indexOf("language=") + 9, 2) :
    window.navigator.language.substr(0, 2).toLowerCase();

function reloadSite() {
  window.location.reload(true)
}

function load_daily_number() {
  console.log("fetching daily json")
  fetch("./daily.json")
      .then(response => {
        return response.json()
      })
      .then(json => {
        let {
          list_number,
          day_of_number,
          month_of_number,
          year_of_number
        } = json;
        list_date = new Date(year_of_number + '-' + month_of_number + '-' + day_of_number + 'T12:00:00');
        populateNumberDiv(list_number);
        populateTranslatedDateDiv();
        populateDaysAgoDiv();

        const rightNow = new Date();
        const seven_am_tj = new Date(rightNow.toDateString() + " 07:00:00 GMT-0700 (Pacific Daylight Time)");
        if ((dateFns.differenceInCalendarDays(rightNow, list_date) !== 0)
            && (rightNow.getTime() > seven_am_tj.getTime())
        ) {
          // show not current and attempt reload of number
          document.getElementById("not-current-warning").style.display = "block";
          window.setTimeout(load_daily_number, 5000);
        } else {
          // hide not current
          document.getElementById("not-current-warning").style.display = "none";
        }
      })
      .catch(error => {
        console.error("error", error)
      })

}

function populateDaysAgoDiv() {
  const daysAgoDiv = document.getElementById("days-ago");
  daysAgoDiv.innerText = numDaysAgo(list_date);

  function numDaysAgo() {
    const days_difference = dateFns.differenceInCalendarDays(new Date(), list_date);
    if (days_difference === 0) {
      return `(${hoy(language)})`;
    } else if (days_difference === 1) {
      return `(${ayer(language)})`;
    } else {
      return "(hace " + days_difference + "dias)";
    }
  }
}

function populateNumberDiv(list_number) {
  document.getElementById("list-number").innerText
      = list_number.toString();
}

function populateTranslatedDateDiv() {
  if (list_date) {
    document.getElementById("list-day").innerText
        = list_date.toLocaleDateString(language, {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }
    )
  }
}

function loadLanguageJson(language) {
    return fetch(`./translations/${language}.json`)
        .then(response => {
          return response.json()
        })
        .then(json => {
          translations[language] = json;
        })
        .catch(error => {
          console.error("error", error)
        })
}

function divToInternational(divName, language) {
  document.getElementById(divName).innerHTML =
      translations[language][divName] ||
      translations[defaultLanguage][divName];
}

function questionToInternational(questionName, language) {
  var divElement = document.getElementById(questionName);
  var qAndA = translations[language][questionName] ||
      translations[defaultLanguage][questionName];
  divElement.getElementsByTagName("dt")[0].innerHTML = qAndA[0];
  divElement.getElementsByTagName("dd")[0].innerHTML = qAndA[1];
}

function translateAllDivs(language) {
  for (let i = 0; i < divs_to_translate.length; i++) {
    divToInternational(divs_to_translate[i], language);
  }
}

function translateAllQuestions(language) {
  for (let i = 0; i < questions_to_translate.length; i++) {
    questionToInternational(questions_to_translate[i], language);
  }
}

function translateAllContent(language) {
  if (translations[language]) {
    populateTranslatedDateDiv(language);
    translateAllDivs(language);
    translateAllQuestions(language);
  } else {
    loadLanguageJson(language)
        .then(result => {
          populateTranslatedDateDiv(language);
          translateAllDivs(language);
          translateAllQuestions(language);
        })
  }
}