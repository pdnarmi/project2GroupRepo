const title = $("h1.title");
const poster = $("img.poster");
const synopsis = $("p.synopsis");
const rating = $("h4.rating");
const release = $("h5.release-date");
const genre = $("h5.genre");
const review = $("p.review");
const reviewedBy = $("h5.reviewedBy");

$(document).ready(() => {
  $(".modal").modal();
});

getUserIDforReview = () => {
  $.get("/api/user", data => {
    user = data;
    getMovies();
  });
};

showAllMovies = () => {
  $(".all-movies").empty();
  for (let i = 0; i < movies.length; i++) {
    moviePoster = movies[i].poster;
    const displayedMovie = $("<img>");
    displayedMovie.addClass("modal-trigger");
    displayedMovie.addClass("posterDisplay");
    displayedMovie.attr({ href: "#modal2", "data-index": i });
    displayedMovie.attr("src", moviePoster);
    displayedMovie.attr("height", "350");
    $(".all-movies").prepend(displayedMovie);

    showMovie = () => {
      for (let j = 0; j < user.length; j++) {
        if (user[j].id === movies[i].userID) {
          console.log("user: ", user);
          title.empty();
          poster.empty();
          synopsis.empty();
          rating.empty();
          release.empty();
          genre.empty();
          review.empty();
          reviewedBy.empty();

          console.log("movies[i].userID ", movies[i].userID);

          title.append(movies[i].title);
          poster.attr("src", movies[i].poster);
          synopsis.append(movies[i].synopsis);
          rating.append("Rated ", movies[i].rating);
          release.append("Released on ", movies[i].releaseDate);
          genre.append(movies[i].genre);
          review.append("<h4>User Review:</h4> ", movies[i].review);
          reviewedBy.append(
            "<span>Reviewed By: </span>",
            user[j].firstName + " " + user[j].lastName
          );
        }
      }
    };
    $(displayedMovie).on("click", showMovie);
  }
};

getMovies = () => {
  $.get("api/movies", data => {
    movies = data;
    showAllMovies();
  });
};

getUserIDforReview();
