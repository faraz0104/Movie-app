import React from 'react'
import ReactPlayer from 'react-player';



function Videocart() {
    return (

        <div className="App">
       <h1>Fitness video</h1>

      


       <div className="parent">
           <div className="child">
      <ReactPlayer height="200px" width="300px" controls url="https://www.youtube.com/watch?v=UBMk30rjy0o"></ReactPlayer>
            
            </div>

            <div className="child">
      <ReactPlayer height="200px" width="300px" controls url="https://www.youtube.com/watch?v=vG_Bs0QLc3I"></ReactPlayer>
           </div>   

             <div className="child"> 
      <ReactPlayer height="200px" width="300px" controls url="https://www.youtube.com/watch?v=digpucxFbMo"></ReactPlayer>
             </div>

               <div className="child">  
      <ReactPlayer height="200px" width="300px" controls url="https://www.youtube.com/watch?v=qNByp5yiKOI"></ReactPlayer>
               </div>

      </div>
    </div>
    )
}

export default Videocart
