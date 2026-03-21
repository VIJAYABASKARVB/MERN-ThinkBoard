import api from '../lib/axios.js'; 
import { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

const CreateNotesPage = () => {
  const navigate = useNavigate();
  const[title,setTitle] = useState("");
  const[content,setContent] = useState("");

  async function handleSubmit() {
    try{
      await api.post('/notes', {title, content})
      navigate('/')
      toast.success("Note added successfuly")
    }catch(error){
      console.error('Error in handleSubmit',error.message)
      toast.error("Failed to submit")
    }
  }

  return(
    <div className='flex min-h-screen items-center justify-center'>
        <div className='w-120 gap-6 flex flex-col justify-center'>
        <input 
          type="text" 
          className='w-full border border-gray-400 rounded p-2' 
          placeholder='Title'
          onChange={(e)=>setTitle(e.target.value)}
          value={title}
        />
        <input 
          type="text"  
          className='w-full border border-gray-400 rounded p-2' placeholder='Content'
          onChange={(e)=>setContent(e.target.value)}
          value={content}
        />
        <button className='btn self-end' onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default CreateNotesPage