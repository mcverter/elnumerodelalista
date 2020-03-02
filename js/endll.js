let list_number;
let list_date;
let globalLanguage;
let translations = {};
let defaultLanguage = "es";
loadLanguageJson(defaultLanguage);

const supportedLanguages = [
    "am",
    "ar",
    "bn",
    "en",
    "es",
    "fa",
    "fr",
    "ha",
    "ht",
    "pt",
    "ru",
    "sw",
    "tr",
    "uk",
    "zh"
];

const divs_to_translate = [
    "el-numero-es",
    "el-numero-de-la-lista",
    "sobre",
    "mas-informacion",
    "language-picker-label",
    "disclaimer",
    "language-picker-label",
    "select-label",
    "map-label",
    "credits"
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
    //  "qMyContact",
    "qLeviticus",
    "qRFM",
    "qBusquedas2",
    "q589",
    "qAntifascist",
    "qMutualAid"
];

/* language is either specified in URL or browser default language */
const getParameters = window.location.search.substr(1);
globalLanguage = getParameters.match(/language=(\w+)/)
    ? getParameters.substr(getParameters.indexOf("language=") + 9, 2)
    : window.navigator.language.substr(0, 2).toLowerCase();

function reloadSite() {
    window.location.reload(true);
}

function load_daily_number() {
    console.log("fetching daily php");
    fetch("admin/get.php")
        .then(response => {
            return response.json();
        })
        .then(json => {
            list_number = json.list_number;
            list_date = new Date(json.list_date + "T12:00:00");
            populateNumberDiv(list_number);
            populateTranslatedDateDiv();
            populateDaysAgoDiv();

            const rightNow = new Date();
            const seven_am_tj = new Date(
                rightNow.toDateString() + " 07:00:00 GMT-0700 (Pacific Daylight Time)"
            );
            if (
                dateFns.differenceInCalendarDays(rightNow, list_date) !== 0 &&
                rightNow.getTime() > seven_am_tj.getTime()
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
            console.error("error", error);
        });
}

function populateDaysAgoDiv() {
    const daysAgoDiv = document.getElementById("days-ago");
    daysAgoDiv.innerText = numDaysAgo(list_date);

    function numDaysAgo() {
        // debugger;
        const days_difference = dateFns.differenceInCalendarDays(
            new Date(),
            list_date
        );
        if (days_difference === 0) {
            return today(globalLanguage);
        } else if (days_difference === 1) {
            return `(${yesterday(globalLanguage)})`;
        } else {
            return daysAgo(globalLanguage, days_difference);
        }
    }
}

function populateNumberDiv(list_number) {
    document.getElementById("list-number").innerText = list_number.toString();
}

function populateTranslatedDateDiv() {
    if (list_date) {
        document.getElementById(
            "list-day"
        ).innerText = list_date.toLocaleDateString(globalLanguage, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    }
}

function loadLanguageJson(language) {
    return fetch(`./js/translations/${language}.json`)
        .then(response => {
            return response.json();
        })
        .then(json => {
            translations[language] = json;
        })
        .catch(error => {
            console.error("error", error);
        });
}

function divToInternational(divName, language) {
    document.getElementById(divName).innerHTML =
        translations[language][divName] || translations[defaultLanguage][divName];
}

function questionToInternational(questionName, language) {
    const divElement = document.getElementById(questionName);
    const qAndA =
        translations[language][questionName] ||
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
    globalLanguage = language;
    if (translations[language]) {
        populateTranslatedDateDiv(language);
        translateAllDivs(language);
        translateAllQuestions(language);
    } else {
        loadLanguageJson(language).then(result => {
            populateTranslatedDateDiv(language);
            translateAllDivs(language);
            translateAllQuestions(language);
        });
    }
}

function mapOrDefault({value, mapping, defaultReturn}) {
    return mapping[value] || defaultReturn;
}


function daysAgo(language, days) {
    let defaultReturn = `(hace ${days} dias)`;
    let daysAgoMap = {
        "am": `${days} ቀናት በፊት`,
        "ar": `قبل ${days} أيام`,
        "bn": `${days} দিন আগে`,
        "en": `${days} days ago`,
        "es": `Hace ${days} días`,
        "fa": `${days} روز پیش`,
        "fr": `il y a ${days} jours`,
        "ha": `${days} days ago`,
        "ht": `${days} jou de sa`,
        "pt": `${days} dias atrás`,
        "ru": `${days} дней назад`,
        "sw": `siku ${days} zilizopita`,
        "tr": `${days} gün önce`,
        "uk": `${days} днів тому`,
        "zh": `${days}天以前`
    };

    return mapOrDefault({
        value: language,
        mapping: daysAgoMap,
        defaultReturn});
}
function today(language) {
    let defaultReturn = "(hoy)";
    const todayMap = {
        "am": "ዛሬ",
        "ar": "اليوم",
        "bn": "আজ",
        "en": "today",
        "es": "hoy",
        "fa": "امروز",
        "fr": "aujourd'hui",
        "ha": "yau",
        "ht": "jodi a",
        "pt": "hoje",
        "ru": "сегодня",
        "sw": "leo",
        "tr": "bugün",
        "uk": "сьогодні",
        "zh": "今天",
    };
    return mapOrDefault({
        value: language,
        mapping: todayMap,
        defaultReturn});
}


function yesterday(language) {
    let defaultReturn = "ayer"
    const yesterdayMap = {
        "am": "ትናንትና",
        "ar": "في الامس",
        "bn": "গতকাল",
        "en": "yesterday",
        "es": "ayer",
        "fa": "دیروز",
        "fr": "hier",
        "ha": "jiya",
        "ht": "yè",
        "pt": "ontem",
        "ru": "вчера",
        "sw": "jana",
        "tr": "dün",
        "uk": "вчора",
        "zh": "昨天",
    };

    return yesterdayMap[language] || defaultReturn;
}


