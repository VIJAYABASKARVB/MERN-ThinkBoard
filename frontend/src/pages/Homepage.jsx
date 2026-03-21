import React, { useEffect, useState } from 'react'
import RateLimitingWarning from '../components/RateLimitingWarning';
import axios from 'axios'
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';



const Homepage = () => {
  const navigate = useNavigate();
  const [isRateLimited,setIsRateLimited] = useState(false);
  const [notes,setNotes] = useState([]);
  const [loading,setLoading] = useState(true);

  const handleDelete = async (id) => {
    try{
      await axios.delete(`http://localhost:5001/api/notes/${id}`);
      setNotes(notes.filter((note)=>note._id !== id));
      toast.success("Note deleted successfully")
    }catch(error){
      console.error('Error in handleDelete: ',error.message);
      toast.error("Failed to delete note")
    }
  }


  useEffect(()=>{
    const fetchNotes = async () => {
      try{
        const res = await axios.get("http://localhost:5001/api/notes")
        setNotes(res.data)
        setIsRateLimited(false)
      }catch(error){
        console.log('error in fetching data from DB',error.message)
        if(error.response?.status === 429){
          setIsRateLimited(true)
        }else{
          toast.error("Failed to load notes")
        }
      }finally{
        setLoading(false);
      }
    }

    fetchNotes();
  },[])

  if(isRateLimited){
    return <RateLimitingWarning/>
  }

  return (
    <div className="min-h-screen">

      {/* Page content goes here */}
      <div className="p-6">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {
            notes.map((note) => (
              <div key={note._id} className='min-w-20 bg-black/50 p-3 rounded-2xl hover:shadow-lg hover:shadow-blue-500/50 transition'>
                <h1 className='font-bold'>{note.title}</h1>
                <p className='text-sm'>{note.content}</p>
                <div className='flex justify-between items-center'>
                  <p className='text-xs'>{new Date(note.createdAt).toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'})}</p>
                  <div className='flex gap-1 items-center'>
                    <button 
                      className='btn btn-ghost px-2 py-1'
                      onClick={() => navigate(`/note/${note._id}`)}
                    >
                      <FaRegEdit />
                    </button>
                    <button 
                      className='btn btn-ghost px-2 py-1'
                      onClick={()=>handleDelete(note._id)}
                    >
                      <MdDelete />
                    </button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Homepage