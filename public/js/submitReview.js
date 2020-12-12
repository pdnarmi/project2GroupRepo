$(document).ready(() => {
  const submitBtn = $("a.submit");
  const title = $("h1.movie-name");
  const review = $("input.movieReview");

  submitBtn.on("click", event => {
    event.preventDefault();
    console.log("clicked!");
    const movieData = {
        title: title,
      review: review
    };
  });
});
