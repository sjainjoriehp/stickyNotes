import React, { useContext, useEffect,useState } from 'react'
import PropTypes from 'prop-types'
import { Link, useNavigate} from 'react-router-dom';



function Navbar(props) {
  const {showAlert}=props





    useEffect(()=>{

    },[])
   
    const navigate=useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem('auth-token');
    navigate("/Home")
    showAlert("Logout successfully","success")
  }    

  return (
   
    <div className="container-fullwidth" >
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
  {! localStorage.getItem('auth-token')?<Link className="navbar-brand" to={"/Home"}>{props.title}</Link>:<Link className="navbar-brand" to={"/NotesHome"}>{props.title}</Link>}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
      <li className="nav-item">
   {! localStorage.getItem('auth-token')?<Link className={`nav-link  "active":"" }`} aria-current="page" to="/Home">Home</Link>:<Link className={`nav-link  "active":"" }`} aria-current="page" to="/NotesHome">Home</Link>}
       </li>
        <li className="nav-item">
          <Link className={`nav-link {  "active":"" }`} aria-current="page" to="/About">About</Link>
        </li>
      </ul>

               {! localStorage.getItem('auth-token')?<form className="d-flex"> 
                    <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                    <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
                    
                    </form>:
                     <form>
                     <button onClick={handleLogout} className='btn btn-primary'>Logout</button>
                   </form>
                    }

    </div>
  
   </div>

</nav>

    </div>

  )
}

export default Navbar
Navbar.prototype={name: PropTypes.string.isrequired}
Navbar.defaultProps = { title: 'Title' };