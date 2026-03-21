import Notes from "../models/notesModels.js"

export async function getNotes(req,res){
  try{
    const notes = await Notes.find().sort({createdAt:-1})
    res.status(200).json(notes);
  }catch(error){
    console.error("Error in getNotes fetching data from server",error.message)
    res.status(500).json({message:"Internal server Error"})
  }
}

export async function addNotes(req,res){
  try{
    const {title,content} = req.body;
    const newNote = new Notes({title,content});
    await newNote.save();
    res.status(201).json(newNote)
  }catch(error){
    console.error("Error in addNotes in creating the data",error.message);
    res.status(500).json({message:"Internal server Error"})
  }
}

export async function updateNotes(req,res){
  try{
    const {title,content} = req.body;
    const updatednote = await Notes.findByIdAndUpdate(
                              req.params.id,
                              {title,content},
                              {new:true}
    );
    if(!updatednote) return res.status(404).json({message:"Note not found"})
    res.status(200).json({message:"Note Updated successfully"})
  }catch(error){
    console.error("Error in updateNotes",error.message)
    res.status(500).json({message:"Internal server error"})
  }
}

export async function deleteNotes(req,res){
  try{
    const deletedNote = await Notes.findByIdAndDelete(req.params.id)
    if(!deletedNote) return res.status(404).json({message:"Note not found"})
    res.status(200).json({message:"Note Deleted successfully"})
  }catch(error){
    console.error("Error in deleteNotes",error.message)
    res.status(500).json({message:"Internal server error"})
  }
}

export async function getNotesById(req,res) {
  try{
    const deletedNoteById = await Notes.findById(req.params.id)
    if(!deletedNoteById) return res.status(404).json({message:"Note not found"})
    res.status(200).json(deletedNoteById)
  }catch(error){
    console.error("Error in getNotesById",error.message)
    res.status(500).json({message:"Internal server error"})
  }
}