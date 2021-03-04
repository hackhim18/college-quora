import React from 'react'
import HomeIcon from '@material-ui/icons/Home'

function Navbar() {
    return (  <div className ="qHeader" >
                <div className="qHeader__logo">
                    <img 
                    src ="https://learndigitaladvertising.com/wp-content/uploads/2019/05/Quora-Logo-1.jpg "
                    alt =""
                    />
    </div>
<div className ="qHeader__icons">
    
  <div className= "qHeader__icon">
  <HomeIcon />
  </div>
  <div className= "qHeader__icon"></div>
  <div className= "qHeader__icon"></div>
  <div className= "qHeader__icon"></div>
  <div className= "qHeader__icon"></div>
           </div>   
        </div>
   );  
}

export default Navbar
