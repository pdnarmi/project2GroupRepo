const title = $("h3.title");
const poster = $("img.poster");
const synopsis = $("p.synopsis");
const rating = $("h4.rating");
const release = $("h4.release-date");
const genre = $("h4.genre");
const review = $("h4.review");

showMovies = () => {
  // eslint-disable-next-line array-callback-return
  Object.keys(movies).map(key => {
    title.append(movies[key].title);
    poster.attr("src", movies[key].poster);
    synopsis.append(movies[key].synopsis);
    rating.append(movies[key].rating);
    release.append(movies[key].releaseDate);
    genre.append(movies[key].genre);
    review.append(movies[key].review);
  });
};

getMovies = () => {
  $.get("/api/movies", data => {
    movies = data;
    showMovies();
  });
};

getMovies();
