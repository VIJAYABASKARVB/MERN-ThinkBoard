import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import toast from 'react-hot-toast';

const NotesDetailsPage = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    async function handleFetchData() {
      try{
        const res = await axios.get(`http://localhost:5001/api/notes/${id}`)
        setTitle(res.data.title);
        setContent(res.data.content);
      }catch(error){
        toast.error("Failed to edit")
        console.error('Error in fetching title and content for edit',error.message)
      }
    }
    handleFetchData();
  },[])

  async function handleSubmit() {
    try{
      await axios.put(`http://localhost:5001/api/notes/${id}`, {title, content})
      toast.success('updated the note Successfuly')
      navigate('/');
    }catch(error){
      console.error('Error in handleSubmit in NotesDetailsPage'.error.message)
      toast.error('Error in updating the note details')
    }
  }



  return (
    <div className='flex min-h-screen items-center justify-center'>
        <div className='w-120 gap-6 flex flex-col justify-center'>
          <h1 className='font-bold text-center text-2xl'>EDIT YOUR NOTE HERE!</h1>
          <input 
            type="text" 
            className='w-full border border-gray-400 rounded p-2' 
            placeholder='Title'
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />
          <input 
            type="text"  
            className='w-full border border-gray-400 rounded p-2' placeholder='Content'
            value={content}
            onChange={(e)=>setContent(e.target.value)}
          />
          <button className='btn self-end' onClick={handleSubmit}>Update</button>
        </div>
    </div>
  )
}

export default NotesDetailsPage