const fs = require("fs");
const fsext = require("fs-ext")
const Promise = require("bluebird");

const {
  DIV_DEFAULTS,
  DIVS_TO_INTERNATIONAL,
  QUESTIONS_TO_INTERNATIONAL,
  QUESTION_DEFAULTS
} = require("../translations.js");

function createFile(languageName) {
  return new Promise((resolve, reject) => {
    const path = languageName + ".json";
    fs.open(path, "w", (err, fd) => {
      if (fd) {
        fs.write(fd, "", (err, result) => {
          if (err) {console.error("ERROR WRITING FILE:", err)}
          fs.write(fd, "{\n", (err, result)=>{
            if (err) {console.error("ERROR WRITING FILE:", err)}
            resolve(fd);
          })
        })

      } else {
        console.error("error", err, fd)
        reject(err);
      }
    });
  });
}

function writeLanguageFiles() {
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
            // writeToLanguageFile(languageName, elementId, value)
          }
        )
      }
    );
  });
}

function writeSpanishDefaultsFile() {
  createFile("es").then(fd => {
    [DIV_DEFAULTS].forEach(elementHashTable => {
      let elementIds = Object.keys(elementHashTable);
      Promise.map(elementIds, id =>{
        let value = elementHashTable[id];
        return writeToLanguageFile(fd, id, value);
      }).then(result=>{
        debugger;
        fsext.seekSync(fd, -2, 1);
        fs.write(fd, "\n}\n", (err, result)=>{
          if (err) {console.error("ERROR WRITING FILE:", err)}
          //resolve(fd);
        })
      })
      /*      elementIds.forEach(
              elementId => {
                let value = elementHashTable[elementId];
                writeToLanguageFile(fd, elementId, value);
              }

            ); */
    });
  })
}

function writeToLanguageFile(fd, elementId, value) {
  return new Promise((resolve, reject) => {
    if (fd) {
      if (value) {
        value = value.replace(/(\r\n|\n\r|\r|\n)/gm, "").trim()
        fs.write(fd, `"${elementId.trim()}": "${value}",\n`,
          (err, fd) => {
            if (err) {
              console.error("ERROR", err);
              reject(err)
            }
            resolve(fd);
          })
      } else {
        console.error("error in write to language file. No value")
        reject('error write')
      }
    } else {
      console.error('ERROR: no file handle')
      reject('error write');
    }
  });
}



writeSpanishDefaultsFile();