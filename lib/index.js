#! /usr/bin/env node
const { Command } = require("commander");
const program = new Command();

const { createFile } = require("../utils/createFile");

program.name("rsg").version("0.0.1").description("Generate react components");

program
  .command("component")
  .alias("c")
  .description("Generate a new react component")
  .argument("<name>", "Component name")
  .option("-t, --ts", "typescript component", false)
  .action((name, options) => {
    createFile(name, options, "components");
  })
  .showHelpAfterError();

program
  .command("page")
  .alias("p")
  .description("Generate a new react page component")
  .argument("<name>", "Component name")
  .option("-t, --ts", "typescript component", false)
  .action((name, options) => {
    createFile(name, options, "pages");
  })
  .showHelpAfterError();

program.parse();
