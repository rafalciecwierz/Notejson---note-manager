const fs = require("fs");

const readLine = function() {
	console.log("Read line function");
};

const saveNotes = notes => {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync("./dependencies/notes.json", dataJSON);
};

const loadNotes = () => {
	try {
		return JSON.parse(
			(dataBuffer = fs
				.readFileSync("./dependencies/notes.json")
				.toString())
		);
	} catch (e) {
		return [];
	}
};

module.exports = {
	saveNotes,
	loadNotes,
	readLine,
};
