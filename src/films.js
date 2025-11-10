// Exercise 1: Get the array of all directors.
import {movies} from "./data.js"

function getAllDirectors(array) {
  let result =  array.map((movies) => { return movies.director });
  console.log("EXERCICE 1 ->", result);
  return result;
}

getAllDirectors(movies)

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let sameDirector = array.filter(movies => movies.director === director)
  return sameDirector;
}

const peliculasDeSpielberg = getMoviesFromDirector(movies, 'Steven Spielberg');
console.log(peliculasDeSpielberg);

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let directorMovies = getMoviesFromDirector(array, director)
  let scoreDirector = directorMovies.reduce((acc , movies) => acc + movies.score, 0)
  return scoreDirector
}

const directorBuscado = 'Steven Spielberg';

const promedioFinal = moviesAverageOfDirector(movies, directorBuscado);

console.log(`EXERCICE 3 -> El puntaje promedio de ${directorBuscado} es: ${promedioFinal}`);


// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const n = 20
  const primerosObjetos = array.slice(0, n)
  primerosObjetos.sort((a, b) => a.title.toLowerCase() - b.title.toLowerCase())
  return primerosObjetos
}
console.log(orderAlphabetically(movies))

// Exercise 5: Order by year, ascending
function orderByYear() {
  const y = 20
  const yearObjects = array.slice(0 , y)
  yearObjects.sort((a, b) => a.year > b.year )
  return yearObjects
}

// Exercise 6: Calculate the average of the movies in a category
function getMoviesByGenre(array, genre) {
  let sameGenre = array.filter(movies => movies.genre.includes(genre))
  return sameGenre;
}

function moviesAverageByCategory(array, genre) {
  let genreMovies = getMoviesByGenre(array, genre)
  let scoreGenre = genreMovies.reduce((acc, movies) => acc + parseFloat(movies.score), 0)
  let totalScore = scoreGenre / genreMovies.length
  return totalScore.toFixed(2)
}
console.log(moviesAverageByCategory(movies, 'Western'))

// Exercise 7: Modify the duration of movies to minutes

function hoursToMinutes(array) {
  return array.map(movie => {
    const [hours, minutes] = movie.duration.match(/\d+/g).map(Number)
    const totalDuration = (hours * 60) + (minutes || 0)
    return {
    ...movie,
    duration: (`${totalDuration} min`)
    }
  })
}
console.log(hoursToMinutes(movies))

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
