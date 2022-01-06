import fs from 'fs';
import chalk from 'chalk';


const getNotes = (a,b) => {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    console.log("notes: ", notes)
    const duplicateNotes = notes.filter((note) => note.title === title)


    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.bold.inverse('New note added!'))
    }else{
        console.log(chalk.red.bold.inverse('Note title taken!'))
    }
}

const removeNote = (title) => {
    // console.log('Note removed!', title)
    const notes = loadNotes()
    console.log('Notes:', notes)
    const noteToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > noteToKeep.length) {
        console.log(chalk.green.bold.inverse('Note removed!'))
        saveNotes(noteToKeep)
    }else{
        console.log(chalk.red.bold.inverse('No note found!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your notes...'))
    notes.forEach(note => console.log(chalk.blue(' ', note.title)));
}

const readNote = (title) => {
    const notes = loadNotes()
    const noteTitleMatch = notes.find((note) => note.title  === title )
    if (noteTitleMatch) {
    console.log(chalk.cyan.inverse('Body:', noteTitleMatch.body))
        
    } else {
    console.log(chalk.red.inverse('No Title Match'))
        
    }
    // console.log(chalk.pink.bold(notes))

}

const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
    console.log(dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        console.log("e: ", e)
        return []
    }
}

export { getNotes, addNote, removeNote, listNotes, readNote }