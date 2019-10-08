(function () {

  /* Main */
  window.onload = function () {
    load_daily_number();
    translateAllContent();
  };

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

  function loadLanguageDivs(divMappings) {
    let divsOrQuestions = Object.keys(divMappings);
    divsOrQuestions.forEach(dOq => {
        if (isDiv()) {
          return true;
        } else if (isQuestion()) {
          return false;
        } else {
          return false;
        }
      }
    )
  }
  function loadLanguageJson(language) {
    if (translations[language]) {
      loadLanguageDivs(translations[language]);
    } else {
      console.log("fetching translation json")
      fetch(`./translations/${language}.json`)
        .then(response => {
          return response.json()
        })
        .then(json => {
          translations[language] = json;
          loadLanguageDivs(json);
        })
        .catch(error => {
          console.error("error", error)
        })
    }
  }
  let list_date;
  let translations = {};

  /* language is either specified in URL or browser default language */
  const getParameters = window.location.search.substr(1);
  let language = getParameters.match(/language=(\w+)/) ?
    getParameters.substr(getParameters.indexOf("language=") + 9, 2) :
    window.navigator.language.substr(0, 2).toLowerCase();


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

  function reloadSite() {
    window.location.reload(true)
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


  function translateAllDivs() {
    for (let i = 0; i < divs_to_translate.length; i++) {
      divToInternational(divs_to_translate[i], language);
    }
  }


  function translateAllQuestions() {
    for (let i = 0; i < questions_to_translate.length; i++) {
      questionToInternational(questions_to_translate[i], language);
    }
  }

  function translateAllContent() {
    language = document.getElementById("language-picker").value || language;
    populateTranslatedDateDiv();
    translateAllDivs();
    translateAllQuestions();
  }
  return translateAllContent;
})();