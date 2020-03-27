const fs = require("fs");
const chalk = require("chalk");

const readNote = title => {
	const notes = loadNotes();
	const note = notes.find(note => note.title === title);
	if (note) {
		console.log(
			chalk.cyan.inverse(" Title: \n") + chalk.cyan(`${note.title}`)
		);
		console.log(
			chalk.cyan.inverse(" Body: \n") + chalk.cyan(`${note.body}`)
		);
	} else {
		console.log(chalk.red.inverse(" No note founded. "));
	}
};

const addNotes = (title, body) => {
	const notes = loadNotes();
	const duplicateNote = notes.find(note => note.title === title);
	debugger;
	if (!duplicateNote) {
		notes.push({
			title: title,
			body: body,
		});
		saveNotes(notes);
		console.log(chalk.green.inverse(`Note named "${title}" added.`));
	} else {
		console.log(chalk.yellow.inverse("This title is already taken."));
	}
};

const removeNote = title => {
	const notes = loadNotes();
	const filteredNotes = notes.filter(note => note.title !== title);
	if (filteredNotes.length === notes.length)
		console.log(chalk.yellow.inverse("There is no such a note..."));
	else {
		saveNotes(filteredNotes);
		console.log(
			chalk.green.inverse(`Success. Note "${title}" has been deleted.`)
		);
	}
};

const listNotes = () => {
	const notes = loadNotes();
	console.log(chalk.cyan.inverse("Your notes"));
	notes.forEach((note, index) => {
		console.log(chalk.cyan(`${index + 1}).`) + ` ${note.title}.`);
	});
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
	addNotes,
	removeNote,
	listNotes,
	readNote,
};
