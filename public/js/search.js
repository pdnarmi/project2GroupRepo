// External API- IMDB Search, and setting newMovie object
let searchInput = [];

movieSearch = () => {
  searchInput = $("#searchInput")
    .val()
    .trim();
  console.log(searchInput);

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
    };

    movieFill();
  });
};

// Code for future use when populating divs

movieFill = () => {
  $(".movie-name").empty();
  $(".poster-image").empty();
  $(".synopsis").empty();
  $(".rating").empty();
  $(".release-date").empty();
  $(".genre").empty();

  $(".movie-name").append(newMovie.name);
  $(".poster-image").attr("src", newMovie.poster);
  // Make sure to use this code in HTML:<img class="poster-image" height="300" src="">
  $(".synopsis").append(newMovie.synopsis);
  $(".rating").append(newMovie.rating);
  $(".release-date").append(newMovie.releaseDate);
  $(".genre").append(newMovie.genre);
};

submitReview = () => {
  event.preventDefault();
  console.log("submit clicked!");
}

$("#movieSelect").on("click", movieSearch);
$("#submitReview").on("click", submitReview);