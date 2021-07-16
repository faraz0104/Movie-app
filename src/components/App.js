
import React ,{Component} from'react';
import Navbar from "./Nav"
import SearchArea from './SeaechBox';
import MovieList from './MovieList';
import MovieInfo from './MovieInfo';

class App extends Component {
  constructor(){
    super()
    this.state = {
      movies:[],
      searchTerm:"",
      currentMovie:null
     

    }
    this.apiKey = "4e44d9029b1270a757cddc766a1bcb63"
  }
  handleSubmit =(e) =>{
    e.preventDefault();

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
    .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({movies:[...data.results],totalResults:data.total_results})
    })
    
  }

  handleChange =(e) =>{
     this.setState({searchTerm:e.target.value})
  }
viewMovieInfo=(id)=>{
  const filteredMovie = this.state.movies.filter(movie=>movie.id ==id)
  const newCurrentMovie = filteredMovie.length >0 ?filteredMovie[0] : null

  this.setState({currentMovie:filteredMovie})
}
 
closeMovieInfo = () =>{
  this.setState({currentMovie:null})
}

  render(){
  
    return(
     
      <div className="App">
       <Navbar />
       {this.state.currentMovie == null ?   <div> <SearchArea handleSubmit={this.handleSubmit} handleChange={this.handleChange}/> <MovieList viewMovieInfo={this.viewMovieInfo}  movies={this.state.movies}/></div>: <MovieInfo currentMovie={this.state.currentMovie} closeMovieInfo={this.closeMovieInfo}/>}
     
      </div>
    )
  }
}

export default App;
