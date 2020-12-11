// External API- IMDB Search, and setting newMovie object
movieSearch = () => {
  const searchInput = "Avengers Endgame";

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
};

movieSearch();

// Code for future use when populating divs
$("#movieSelect").click(() => {
  console.log("clicked");
  $(".movie-name").append(newMovie.name);
  $(".poster-image").attr("src", newMovie.poster);
  // Make sure to use this code in HTML:<img class="poster-image" height="300" src="">
  $(".synopsis").append(newMovie.synopsis);
  $(".rating").append(newMovie.rating);
  $(".release-date").append(newMovie.releaseDate);
  $(".genre").append(newMovie.genre);
});
