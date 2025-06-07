import React, { useEffect, useState } from 'react'

const AddNote = (props) => {
    const { handleAddNote, editableNote } = props;
    console.log("editable note", editableNote)
    const [note, setNote] = useState({
        title: "",
        description: ""
    })
    useEffect(()=> {
        if (editableNote) {
            setNote(editableNote)
        }
    }, editableNote)
    const handleChangeTitle = (event) => {
        // console.log("event", event)
        setNote(previous => ({ ...previous, title: event.target.value }))
    }

    const handleChangeDescription = (event) => {
        setNote(previous => ({ ...previous, description: event.target.value }))
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        // console.log("event",event)
        //this is called stateup so are state up the note
        handleAddNote(note);
    }
    // console.log("note", note)
    return (
        <div>
            <h1>Add Note</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" value={note.title} placeholder="Enter title" onChange={handleChangeTitle} />
                <input type='text' name="description" value={note.description} placeholder='Enter description' onChange={handleChangeDescription} />
                <button type="submit">{editableNote ? "Update Note": "Add Note"}</button>
            </form>
        </div>
    )
}

export default AddNote
