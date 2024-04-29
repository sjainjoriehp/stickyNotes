const express=require('express')
const router = express.Router();
let{FetchAllNotes,AddNote,UpdateNote,DeleteNote}=require('../controller/Notes.Controller')
let fetchUser=require('../Services/middleware/fetchUser')


/*Notes Route*/
// ROUTE 1: Get All the Notes using: GET "/api/notes/getuser". Login required
router.get('/fetchallnotes',fetchUser,FetchAllNotes)

// ROUTE 2: Add a new Note using: POST "/api/notes/addnote". Login required
router.post('/addnote',fetchUser,AddNote)
// ROUTE 3: Update an existing Note using: PUT "/api/notes/updatenote". Login required
router.put('/updatenote/:id',fetchUser,UpdateNote)
// ROUTE 4: Delete an existing Note using: DELETE "/api/notes/deletenote". Login required
router.delete('/deletenote/:id',fetchUser,DeleteNote)

module.exports=router