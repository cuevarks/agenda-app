const fs = require("fs");

const getNewId = (array) => {
  if (array.length > 0) {
    return array[array.length - 1].id + 1;
  } else {
    return 1;
  }
};

function writeJSONFile(filename, content) {
  fs.writeFileSync(filename, JSON.stringify(content), "utf8", (err) => {
    if (err) {
      console.log(err);
    }
  });
}

function eventById(array, id) {
  return new Promise((resolve, reject) => {
    const row = array.find((r) => r.id === id);
    if (!row) {
      reject({
        message: "Event not found",
        status: 404,
      });
    }
    resolve(row);
  });
}

module.exports = { eventById, getNewId, writeJSONFile };
