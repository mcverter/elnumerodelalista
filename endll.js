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


