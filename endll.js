const list_number = 2702;
const day_of_number = '14';
const month_of_number = '07';
const year_of_number = '2019';

/* language is either specified in URL or browser default language */
const getParameters = window.location.search.substr(1);
let language = getParameters.match(/language=(\w+)/) ?
  getParameters.substr(getParameters.indexOf("language=") + 9, 2) :
  window.navigator.language.substr(0, 2).toLowerCase();

const divs_to_translate = [
  "el-numero-es",
  "el-numero-de-la-lista",
  "sobre",
  "mas-informacion",
  "language-picker-label",
  "dont-bug-me",
  "disclaimer",
];

function translateAllDivs(){
  for (let i=0; i<divs_to_translate.length; i++){
    divToInternational(divs_to_translate[i], language);
  }
}

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
  "qMutualAid"
];

function translateAllQuestions(){
  for (let i=0; i<questions_to_translate.length; i++){
    questionToInternational(questions_to_translate[i], language);
  }
}


function translateAllContent() {
  language = document.getElementById("language-picker").value || language;

  translateDate();
  translateAllDivs();
  translateAllQuestions();
}
/* We only care about date, not time. */
const list_date = new Date(year_of_number + '-' + month_of_number + '-' + day_of_number + 'T12:00:00');
const today = new Date(); //new Date().toJSON().slice(0,10) + 'T12:00:00');

function translateDate() {
  document.getElementById("list-day").innerText = list_date.toLocaleDateString(language, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
  )
}

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

function populateDivs() {
  const listNumberDiv = document.getElementById("list-number");
  const daysAgoDiv = document.getElementById("days-ago");

  document.getElementById.innerText = translateDate();
  listNumberDiv.innerText = list_number.toString();
  daysAgoDiv.innerText = numDaysAgo();
}

function reloadIfPreviousDayNumberAndAfter7AMTJ() {
  const rightNow = new Date();
  const seven_am_tj = new Date(rightNow.toDateString() + " 07:00:00 GMT-0700 (Pacific Daylight Time)");

  if ((
      dateFns.differenceInCalendarDays(
        rightNow, list_date) !== 0) &&
    (rightNow.getTime() > seven_am_tj.getTime())
  ) {
    location.reload(true)
  }
}


function reloadAfterInterval() {
  const interval = 3 * 1000;
  window.setTimeout(reloadIfPreviousDayNumberAndAfter7AMTJ, interval);
}
