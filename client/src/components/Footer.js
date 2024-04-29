import React from 'react'
import PropTypes from 'prop-types'

let date=new Date()
let year=date.getFullYear()


export default function footer() 
{
    return(
        
        <div className=" footer" style={{backgroundColor: "lightblue" }}>
         <p>  © {year} Copyright : {process.env.REACT_APP_Author_Name}</p>
        </div>
      
       
    )
}

footer.prototype={name: PropTypes.string.isrequired}
footer.defaultProps = {
    name: 'Enter name of developer'
};
