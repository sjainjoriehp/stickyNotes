import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { ApiCall } from '../ApiCall/ApiCall';

const Signup = (props) => {
    
    
    const [credentials, setCredentials] = useState({name:"",email: "", password: "",cpassword:""}) 
    var navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
       let obj={name:credentials.name,email:credentials.email,password:credentials.password}
        const response = await ApiCall.SignUpUser(obj)
        const json = await response.json()
        // console.log(json);
        if (json)
        {
            // Save the auth token and redirect 
           props.showAlert("Account created Successfully","success")
           navigate('/NotesHome')
           localStorage.setItem('token', json.authtoken); 
           props.showAlert("Account created Successfully","success")
        }
        else{
          props.showAlert("Something went wrong","danger")
        }
      
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }


    return (
<div  className="container mt-3">
               <h2>Create an account to use StickyNotes</h2>
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text " className="form-control" name='name' id="name"  onChange={onChange} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control"name='email' id="email" onChange={onChange} aria-describedby="emailHelp" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' id="password" onChange={onChange} minLength={5} required/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
 </div>
    )
}

export default Signup