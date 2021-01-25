import React from "react";
import SearchIcon from "../../assets/images/search.png";
import { getAllMovies } from "../../endpoints";
const SearchMovies = () => {
  const [movies, setMovies] = React.useState(null);
  const [moviesDisplay, setMoviesDisplay] = React.useState(null);
  const [input] = React.useState('');

  const getMovies = async () => {
    let data = await getAllMovies();
    if (data) setMovies(data);
  };

  const showOptions = (value) => {
    // console.log("movies", movies);
    // console.log(value);
    let dataToFilter = movies.filter((movie) =>
    movie.title.toLowerCase().includes(value.toLowerCase())
    

    );

    console.log("showOptions -> dataToFilter", dataToFilter);
    
     value === '' ? setMoviesDisplay('') : setMoviesDisplay(dataToFilter, value);
  };

  React.useEffect(() => {
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    console.log(input)
  }, [input]);
  
  return (
    <React.Fragment>
      <div className="col-12 searchContainer">
        <div className="col-12 col-md-5 inputContainer">
          <input
            type="text"
            placeholder="Busca tus películas aquí"
            //Show recently search on input
            onChange={(e) => showOptions(e.target.value)}
          />
          <img src={SearchIcon} alt="Search Cineviajeros" />
        </div>
        <div className="col-12 col-md-5 col-sm-6 noPad">
        {moviesDisplay && moviesDisplay.length ? (

            <div className="optionsDisplay col-sm-12">
            {moviesDisplay.map((movie, index) => (
              <a key={index} href={`/peliculas/${movie.id}`}>
                {movie.title}
              </a>
            ))}
            
          </div> 
            
        ) : null}
        </div>
      </div>
    </React.Fragment>
  );
};

export default SearchMovies;
