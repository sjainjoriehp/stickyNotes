import React, { useEffect } from 'react'
import Notes from './Notes'

export default function NotesHome(props) {
  
    useEffect(()=>{
         
    },[props]) 
    
    const {showAlert}=props
    return (
        <div> 
           
            <Notes showAlert={showAlert}/>
        </div>
    )
}
