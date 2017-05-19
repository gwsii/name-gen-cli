#!/usr/bin/env node

const argv = require('yargs')
  .usage(
`
Usage: $0 [options]

Generate and output a random name.`)
  .default({
    words: 2
  })
  .alias('n', 'number')
  .alias('a', 'alliterative')
  .alias('d', 'dashed')
  .alias('w', 'words')
  .alias('h', 'help')
  .number('w')
  .describe('n', 'Include a random number in the name')
  .describe('a', 'Start all the words in the name with the same letter')
  .describe('d', 'Put dashes between words in the name: like-this')
  .describe('w', 'Number of words to use')
  .help('h')
  .argv;

const opts = {
  words: argv.words,
  number: argv.number === true,
  alliterative: argv.alliterative === true
};

const generate = require('project-name-generator');

const name = generate(opts);

if(argv.dashed === true) {
  console.log(name.dashed);
} else {
  console.log(name.spaced);
}