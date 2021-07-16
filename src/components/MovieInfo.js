import React from "react"

const MovieInfo =(props) =>{
    return(
        <div className="container">
            <div className="row" onClick={props.closeMovieInfo} style={{cursor:"pointer",paddingTop: 50}}>
                <i className ="fas fa-arrow-left"></i>
                <span style={{marginLefty:10}}>Go back</span>
            </div>
            <div className="row">
                {props.cuurentMovie.poster_path == null ? <img src ={"htps://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg"} alt="card image" style={{width:"100%",height:360}} /> : 
                 <img src ={`https://image.tmdb.org/t/p/w185${props.cuurentMovie.poster_path}`} alt="card image" style={{width:"100%",height:360}}/>}
            </div>
            <div className="col s12 m8">
                <div className="info-container">
                    <p>{props.cuurentMovie.title}</p>
                    <p>{props.cuurentMovie.release_date}</p>
                    <p>{props.cuurentMovie.overview}</p>
                </div>
            </div>
            
        </div>
    )
}

export default MovieInfo