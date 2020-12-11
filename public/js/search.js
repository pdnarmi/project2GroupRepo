// External API- IMDB Search, and setting newMovie object
function movieSearch() {
  const searchInput = "";

  queryURL = "http://www.omdbapi.com/?t=" + searchInput + "&apikey=6c279cf4";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(response => {
    console.log(response);

    newMovie = {
      name: response.Title,
      poster: response.Poster,
      synopsis: response.Plot,
      rating: response.Rated,
      releaseDate: response.Released,
      genre: response.Genre
    }
  });
}

// Code for future use when populating divs

$(".movie-name").append(newMovie.name);
$(".poster-image").attr("src", newMovie.poster);


movieSearch();
