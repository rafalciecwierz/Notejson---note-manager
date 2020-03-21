const fs = require("fs");

const readLine = function() {
	console.log("Read line function");
};

const saveNotes = notes => {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync("./dependencies/notes.json", dataJSON);
};

module.exports = {
	saveNotes,
	readLine,
};
