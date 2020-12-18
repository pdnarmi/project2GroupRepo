const title = $("h1.title");
const poster = $("img.poster");
const synopsis = $("p.synopsis");
const rating = $("h4.rating");
const release = $("h5.release-date");
const genre = $("h5.genre");
const review = $("p.review");

$(document).ready(() => {
  $(".modal").modal();
});

getMovieIDforMatching = () => {
  $.get("/api/user_data", data => {
    user = data;
    getRecent();
  });
};

generateList = () => {
  $(".recently-watched").empty();
  for (let i = 0; i < 21; i++) {
    if (user.id === movies[i].userID) {
      moviePoster = movies[i].poster;
      const displayedMovie = $("<img>");
      displayedMovie.addClass("modal-trigger");
      displayedMovie.addClass("posterDisplay");
      displayedMovie.attr({ href: "#modal2", "data-index": i });
      displayedMovie.attr("src", moviePoster);
      displayedMovie.attr("height", "350");
      $(".recently-watched").prepend(displayedMovie);

      showClickedMovie = () => {
        title.empty();
        poster.empty();
        synopsis.empty();
        rating.empty();
        release.empty();
        genre.empty();
        review.empty();

        title.append(movies[i].title);
        poster.attr("src", movies[i].poster);
        synopsis.append(movies[i].synopsis);
        rating.append("Rated ", movies[i].rating);
        release.append("Released on ", movies[i].releaseDate);
        genre.append(movies[i].genre);
        review.append("<h4>Your Review:</h4> ", movies[i].review);
      };
      $(displayedMovie).on("click", showClickedMovie);
    }
  }
};

getRecent = () => {
  $.get("api/movies", data => {
    movies = data;
    generateList();
  });
};

getMovieIDforMatching();
