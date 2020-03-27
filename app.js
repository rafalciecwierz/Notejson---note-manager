const chalk = require("chalk");
const yargs = require("yargs");
const notesSystem = require("./dependencies/notes");

// Create Add command
yargs.command({
	command: "add",
	describe: "Add a new note.",
	builder: {
		title: {
			describe: "Note title",
			demandOption: true,
			type: "string",
		},
		body: {
			describe: "Body text of the note.",
			demandOption: true,
			type: "string",
		},
	},
	handler(argv) {
		console.log(chalk.blueBright("Title.: ", argv.title));
		console.log(chalk.blue("Body:\n", argv.body));
		notesSystem.addNotes(argv.title, argv.body);
	},
});

// Create REMOVE command
yargs.command({
	command: "remove",
	describe: "Remove the note.",
	builder: {
		title: {
			describe: "Note title to be removed",
			demandOption: true,
			type: "string",
		},
	},
	handler(argv) {
		notesSystem.removeNote(argv.title);
	},
});

// Create LIST command
yargs.command({
	command: "list",
	describe: "List all the notes.",
	handler() {
		notesSystem.listNotes();
	},
});

// Create READ command
yargs.command({
	command: "read",
	describe: "Read a single note.",
	builder: {
		title: {
			describe: "Title to be found.",
			demandOption: true,
			type: "string",
		},
	},
	handler(argv) {
		notesSystem.readNote(argv.title);
	},
});

// Using yargs argv
yargs.parse();
