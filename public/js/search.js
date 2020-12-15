// External API- IMDB Search, and setting newMovie object
let searchInput = [];

// Initialize Modal
$(document).ready(() => {
  $(".modal").modal();
});

movieSearch = () => {
  searchInput = $("#searchInput")
    .val()
    .trim();

  queryURL = "http://www.omdbapi.com/?t=" + searchInput + "&apikey=6c279cf4";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(response => {
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
  $(".rating").append("Rated ", newMovie.rating);
  $(".release-date").append("Released on ", newMovie.releaseDate);
  $(".genre").append(newMovie.genre);
};

const reviewInput = $("input.movieReview");

submitReview = () => {
  const movieData = {
    title: newMovie.name,
    poster: newMovie.poster,
    synopsis: newMovie.synopsis,
    rating: newMovie.rating,
    releaseDate: newMovie.releaseDate,
    genre: newMovie.genre,
    review: reviewInput.val().trim()
  };

  postMovie(
    movieData.title,
    movieData.poster,
    movieData.synopsis,
    movieData.rating,
    movieData.releaseDate,
    movieData.genre,
    movieData.review
  );
};

postMovie = (title, poster, synopsis, rating, releaseDate, genre, review) => {
  $.post("/api/movies", {
    title: title,
    poster: poster,
    synopsis: synopsis,
    rating: rating,
    releaseDate: releaseDate,
    genre: genre,
    review: review
  });
};

$("#movieSelect").on("click", movieSearch);
$("#submitReview").on("click", submitReview);
