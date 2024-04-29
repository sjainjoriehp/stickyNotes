import { useEffect,useState } from 'react';
import {AuthToken} from './AuthToken'
import {useNavigate} from "react-router-dom"

export default function ProtectedRoute(props){

    let {Component} =props;
    let Navigate=useNavigate();
    // // {debugger}
    // console.log("Token is"+AuthToken)

    const [alert, setAlert] = useState(null);

    const showAlert = (message, type)=>{
        setAlert({
          msg: message,
          type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }

   
   useEffect(()=>{
      
      if(AuthToken)
      {
         Navigate('/NotesHome')
      }
  
   },[])
    
      return(
          <Component showAlert={showAlert}/> 
        )
     

}