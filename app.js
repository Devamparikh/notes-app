import chalk from 'chalk';
import { argv } from 'process';
import yargs from 'yargs';
import yargsParser from 'yargs-parser';
// import { hideBin } from 'yargs/helpers'
// const yargs = require('yargs')
// const chalk =  require('chalk')
// const notes = require('./notes.js')

import * as notes  from "./notes.js";

// const msg = getNotes()
// const greenMsg = chalk.green.bold(msg)
// console.log(greenMsg)


// console.log(validator.isEmail('deavak@gamao.com'))



// const command = process.argv[2]

//Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note.',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        // console.log('Adding the note!')
        // console.log('Title: ' + argv.title)
        // console.log('Body: ' + argv.body)

        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note.',
    handler: function(){
        console.log('Removing the note!')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List all notes.',
    handler: function(){
        console.log('Listing the notes!')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note.',
    handler: function(){
        console.log('Reading the note!')
    }
})


// console.log(process.argv)


// console.log(yargs.argv)

yargs.parse()


// if (command === 'add'){
//     console.log('Adding notes!')
// } else if (command === 'remove'){
//     console.log('Removing notes!')
// }