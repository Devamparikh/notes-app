import fs from 'fs';

const getNotes = function(a,b){
    return 'Your notes...'
}

const addNote = function(title, body){
    const notes = loadNotes()
    console.log("notes: ", notes)
    const duplicateNotes = notes.filter(function (note){
        return note.title === title
    })


    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    }else{
        console.log('Note title taken!')
    }

    
}

const saveNotes = function (notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        console.log("e: ", e)
        return []
    }
}

export { getNotes, addNote }