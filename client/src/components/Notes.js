import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from "../context/notes/noteContext"
import NoteItem from './NoteItem';
import Addnote from './Addnote';
import { AuthToken } from '../auth/AuthToken';
import { useNavigate } from 'react-router-dom';


const Notes = (props) => {
    const {showAlert}=props
    const context = useContext(noteContext);
    const { notes, getNotes, editNote } = context;

   let navigate=useNavigate()
     
    const ref = useRef(null)
    const refClose = useRef(null)
    const [note, setNote] = useState({id: "", etitle: "", edescription: "", etag: ""})

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag:currentNote.tag})
    }

    const handleClick = (e)=>{ 
        editNote(note.id, note.etitle, note.edescription, note.etag)
        refClose.current.click();
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }

    useEffect(() => {
        getNotes()
        // eslint-disable-next-line
    }, [])
   
  

    //For performing search over notes

    // let [productLi,setproductLi]=useState(notes)
    // let [preProduct,setpreProduct]=useState([])
    let [name,setname]=useState("")
    let ValFilter=["title","description","tag"]
   
    //Debouncing for InputFiled
    function debounce(func, timeout = 300){
        let timer;
        return (...args) => {
          clearTimeout(timer);
          timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };
      }

      function saveInput(e){
        setname(e.target.value)
        // console.log("name")
      }
     

      const productName = debounce((e) => saveInput(e))
      

   
     if(!localStorage.getItem('auth-token'))
     {
        navigate('/Home')
     }
     else{
        return (
            <>

                    <form className="d-flex"  >
                     <input  type="search" placeholder="Search" aria-label="Search" onChange={productName} style={{margin:"5px",borderRadius:"10px"}} />
                     </form>


              <Addnote showAlert={showAlert} />
                <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form className="my-3">
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">Title</label>
                                        <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label">Description</label>
                                        <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} minLength={5} required/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="tag" className="form-label">Tag</label>
                                        <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                                    </div>
     
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button disabled={note.etitle.length<5 || note.edescription.length<5} onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="row my-3">
                    <h2>You Notes</h2>
                    <div className="container mx-2"> 
                    {notes.length===0 && 'No notes to display'}
                    </div>
                    {  notes?.filter((fl)=>{
                    return Object.keys(fl).some(key => {
                        return ValFilter?.includes(key) ? fl[key].toString().includes(name) : false
                      })
                }
                  ).map((note) => {
                        return <NoteItem key={note._id} updateNote={updateNote} note={note} showAlert={showAlert}/>
                    })}
                </div>
    
            </>
        )
     }
  
}

export default Notes
