import React from 'react'
import '../css/Quora.css'
import Navbar from './Navbar'
import  '../css/Sidebar.css'
import Feed from './Feed'
import Sidebar from "./Sidebar"
import Widget from './Widget'



function Quora() {
    return (
        <div className = "quora">
             <Navbar />
             
             <div className ='quora__content'> 
             <Sidebar/>
             <Feed />
             <Widget />
             
             </div>
         </div>

    )
}

export default Quora;
