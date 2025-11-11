// Exercise 1: Get the array of all directors.
import { movies } from './data.js';

function getAllDirectors(array) {
  let result =  array.map((movies) => { return movies.director });
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let sameDirector = array.filter(movies => movies.director === director)
  return sameDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let directorMovies = getMoviesFromDirector(array, director)
  let scoreDirector = directorMovies.reduce((acc , movies) => acc + movies.score, 0)
  let averageScore = scoreDirector / directorMovies.length;
  return averageScore
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const n = 20
  let moviesOrder = [...array].sort((a, b) => a.title.localeCompare(b.title))
  const titles = moviesOrder.map (movies => movies.title)
  const orderedList = titles.slice(0,n)
  return orderedList
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const yearOrder = [...array].sort((a, b) => { 
    return a.year - b.year === 0
      ? a.title.localeCompare(b.title)
      : a.year - b.year
})
return yearOrder
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

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  const movieByYear = array.filter(movies => movies.year === year)
    if (movieByYear.length === 0) {
    return [];
    }
  const bestMovie = movieByYear.reduce((bestMovie, currentMovie) => {
    if (currentMovie.score > bestMovie.score){
    return currentMovie
    }
    return bestMovie
  }, movieByYear[0])
  return[bestMovie]
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
export {
  getAllDirectors,
  getMoviesFromDirector,
  moviesAverageOfDirector,
  orderAlphabetically,
  orderByYear,
  getMoviesByGenre, // Si es auxiliar y quieres exportarla
  moviesAverageByCategory,
  hoursToMinutes,
  bestFilmOfYear,
};

