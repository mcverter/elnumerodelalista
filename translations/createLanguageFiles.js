const fs = require("fs");

const {
  DIV_DEFAULTS,
  DIVS_TO_INTERNATIONAL,
  QUESTIONS_TO_INTERNATIONAL,
  QUESTION_DEFAULTS
} = require("../translations.js");
[DIVS_TO_INTERNATIONAL,
  QUESTIONS_TO_INTERNATIONAL].forEach(elementHashTable=>{
  let elementIds = Object.keys(elementHashTable);
  elementIds.forEach(
    elementId => {
      let languagesHash = elementHashTable[elementId];
      let languageKeys = Object.keys(languagesHash);
      languageKeys.forEach(
        languageName => {
          let value = languagesHash[languageName];
          writeToLanguageFile(languageName, elementId, value)
        }
      )
    }
  );
});

[DIV_DEFAULTS, QUESTION_DEFAULTS].forEach(elementHashTable=>{
  let elementIds = Object.keys(elementHashTable);
  elementIds.forEach(
    elementId => {
      let value = elementHashTable[elementId];
      writeToLanguageFile("es", elementId, value);
    }
  );
});


function writeToLanguageFile(languageName, elementId, value) {
//  console.log("language:", languageName, ", element:", elementId, ", value:", value);
  const path = languageName + ".json";
  fs.access(path, fs.F_OK, (err) => {
    if (err) {
      console.error(err)
      console.log("creating file");
      fs.createWriteStream(path, (err, filehandle) => {
        fs.writeFile(path, `
        {"${elementId}": "${value}"},
        `)
      })
    }
  });
}


