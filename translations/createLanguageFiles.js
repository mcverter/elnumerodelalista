const fs = require("fs");

const {
  DIV_DEFAULTS,
  DIVS_TO_INTERNATIONAL,
  QUESTIONS_TO_INTERNATIONAL,
  QUESTION_DEFAULTS
} = require("../translations.js");

const languageToPath = language => `${language}.json`;

function writeLanguageDivs() {
  let elementIds = Object.keys(DIVS_TO_INTERNATIONAL);
  elementIds.forEach(
    elementId => {
      let languagesHash = DIVS_TO_INTERNATIONAL[elementId];
      let languageKeys = Object.keys(languagesHash);
      languageKeys.forEach(
        languageName => {
          let value = languagesHash[languageName];
          writeToLanguageFile(languageName, elementId, `"${sanitizeString(value)}"`)
        }
      )
    }
  );
}


function endJSONFile(language) {
  let path = languageToPath(language)
  let stats = fs.statSync(path);
  fs.truncateSync(path, stats.size - 2);
  let fd = fs.openSync(path, "a")
  fs.writeSync(fd, "\n}\n");
  return fd;
}


function sanitizeString(string) {
  return string ? string.replace(/(\r\n|\n\r|\r|\n)/gm, "")
      .replace(/"/gm, "'")
      .replace(/\s\s+/gm, " ")
      .trim() :
    ""
}

function writeLanguageQuestions(language) {
  let elementIds = Object.keys(QUESTIONS_TO_INTERNATIONAL);

  elementIds.map(elementId =>{
    let languagesHash = QUESTIONS_TO_INTERNATIONAL[elementId];
    let languageKeys = Object.keys(languagesHash);
    languageKeys.forEach(
      languageName => {
        let qAndA = languagesHash[languageName];
        let value = `["${sanitizeString(qAndA[0])}","${sanitizeString(qAndA[1])}"]`;
        return writeToLanguageFile(languageName, elementId, value)
      }
    )
  })
}

function writeSpanishQuestions(language) {
  [QUESTION_DEFAULTS].forEach(elementHashTable => {
    let elementIds = Object.keys(elementHashTable);
    elementIds.map(id =>{
      let qAndA = elementHashTable[id];
      let value = `["${sanitizeString(qAndA[0])}","${sanitizeString(qAndA[1])}"]`;
      return writeToLanguageFile(language, id, value);
    })
  });
}

function writeSpanishDivs(language) {
  let elementIds = Object.keys(DIV_DEFAULTS);
  elementIds.map(id => {
    let value = DIV_DEFAULTS[id];
    return writeToLanguageFile(language, id, `"${sanitizeString(value)}"`)
  })
}



function writeToLanguageFile(language, elementId, value) {
  if (language && elementId && value) {
    let fd = fs.openSync(languageToPath(language), "a");
    fs.writeSync(fd, `"${elementId.trim()}": ${value},\n`);
    fs.closeSync(fd);
  }
}

function startJSONFile(language) {
  let fd = fs.openSync(languageToPath(language), "w");
  fs.writeSync(fd, "{\n")
  fs.closeSync(fd);
}
function writeSpanishFile() {
  let spanish = "es";
  startJSONFile(spanish);
  writeSpanishDivs(spanish);
  writeSpanishQuestions(spanish);
  endJSONFile(spanish);
}

function getLanguages() {
  let languages = {};

  Object.keys(QUESTIONS_TO_INTERNATIONAL)
    .forEach(questionDiv =>{
      Object.keys(QUESTIONS_TO_INTERNATIONAL[questionDiv]).forEach((language)=>{
        languages[language] = true;
      });
    });

  Object.keys(DIVS_TO_INTERNATIONAL)
    .forEach(div =>{
      Object.keys(DIVS_TO_INTERNATIONAL[div]).forEach((language)=>{
        languages[language] = true;
      });
    });

  return Object.keys(languages);
}

function writeLanguageFiles() {
  let languages = getLanguages();
  languages.forEach(language =>startJSONFile(language));
  writeLanguageDivs();
  writeLanguageQuestions();
  languages.forEach(language=>endJSONFile(language));
}

// MAIN
writeSpanishFile();
writeLanguageFiles();