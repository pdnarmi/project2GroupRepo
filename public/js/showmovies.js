const showTitle = $("h3.titlefromdb");
const poster = $("img.posterfromdb");

showMovies = () => {
  console.log("Movies: ", movies);
  // eslint-disable-next-line array-callback-return
  Object.keys(movies).map(key => {
    showTitle.append(movies[key].title);
    poster.attr("src", movies[key].poster);
    console.log("movies: ", movies[key].title);
  });
};

getMovies = () => {
  $.get("/api/movies", data => {
    movies = data;
    showMovies();
  });
};

getMovies();
