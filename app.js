const chalk = require("chalk");
const ns = require("./dependencies/notes");

console.log(chalk.cyan.inverse("Hello! This is initial commit"));

ns.readLine();

ns.saveNotes({
	title: "First note",
	body: "This is the body of the first note",
});

const testNotes = ns.loadNotes();
console.log("Notes: ");
console.log("Title: " + testNotes.title);
console.log("Body of the note: " + testNotes.body);
