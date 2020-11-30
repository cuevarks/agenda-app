const filename = "../data/events.json";
let events = require(filename);
const helper = require("../helpers/helper");

function getEvents() {
  return new Promise((resolve, reject) => {
    if (events.length === 0) {
      reject({
        message: "no events available",
        status: 202,
      });
    }

    resolve(events);
  });
}

function getEvent(id) {
  return new Promise((resolve, reject) => {
    helper
      .eventById(events, id)
      .then((event) => resolve(event))
      .catch((err) => reject(err));
  });
}

function insertEvent(newEvent) {
  return new Promise((resolve, reject) => {
    const id = { id: helper.getNewId(events) };
    newEvent = { ...id, ...newEvent };
    events.push(newEvent);
    helper.writeJSONFile(filename, events);
    resolve(newEvent);
  });
}

function updateEvent(id, newEvent) {
  return new Promise((resolve, reject) => {
    helper
      .eventById(events, id)
      .then((event) => {
        const index = events.findIndex((p) => p.id === event.id);
        id = { id: event.id };
        const date = {
          createdAt: event.createdAt,
          updatedAt: helper.newDate(),
        };
        events[index] = { ...id, ...date, ...newEvent };
        helper.writeJSONFile(filename, events);
        resolve(events[index]);
      })
      .catch((err) => reject(err));
  });
}

function deleteEvent(id) {
  return new Promise((resolve, reject) => {
    helper
      .eventById(events, id)
      .then(() => {
        events = events.filter((event) => event.id !== id);
        helper.writeJSONFile(filename, events);
        resolve();
      })
      .catch((err) => reject(err));
  });
}

module.exports = {
  insertEvent,
  getEvents,
  getEvent,
  updateEvent,
  deleteEvent,
};
