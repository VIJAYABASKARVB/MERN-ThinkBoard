import express from "express"
import { addNotes, deleteNotes, getNotes, updateNotes, getNotesById} from "../controllers/notesContoller.js";

const router = express();

//GET - View or retrive data from the database
router.get('/',getNotes)

//GET by ID - View or retrive data from the database
router.get('/:id',getNotesById)

//POST - Adding data to the database
router.post('/',addNotes)

//PUT - Update the data in the database
router.put('/:id',updateNotes)

//DELETE - Delete the data in the database
router.delete('/:id',deleteNotes)

export default router;