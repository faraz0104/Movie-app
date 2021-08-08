import React, { useState } from 'react'
import userdata from '../data.js'


function Header() {
    const[searchTerm, setSearchTerm] = useState("")
    return (
        <div className="hero" >
            <div className="top-bar">
                <div className="top-logo">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB8QcLiCCw0clxQo7IQ1tq3WfdjaeZ91_xJQ&usqp=CAU" alt="logo"/>
                </div>
                <div className="top-link">
                    <ul>
                    <a href="#"><li>Home</li></a>
                    <a href="#"><li>About</li></a>
                    <a href="#"><li>Contact</li></a>
                    </ul>
                </div>
            </div>
            <div className="info">
                <h1>STEP UP  YOUR <br /> <span>FITNESS</span> WITH US</h1>
            </div>

           <div className="search" >
               <input type="text" placeholder="Search..." onChange={event =>{setSearchTerm(event.target.value)}} />
               {userdata.filter((val)=>{
                   if (searchTerm == ""){
                       return val
                   }else if (val.vaname.toLowerCase().includes(searchTerm.toLowerCase())) {
                       return val
                   }
               }).map((val,key)=>{
                   return<div className="user" key={key}> <p>{val.vaname} </p></div>
               })}
           </div>
          
        </div>
    )
}

export default Header
