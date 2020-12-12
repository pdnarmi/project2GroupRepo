module.exports = function(sequelize, DataTypes) {
  const Movie = sequelize.define("Movie", {
    title: DataTypes.STRING,
    poster: DataTypes.STRING,
    synopsis: DataTypes.STRING,
    rating: DataTypes.STRING,
    releaseDate: DataTypes.STRING,
    genre: DataTypes.STRING,
    review: DataTypes.STRING,
    score: DataTypes.INTEGER
  });
  return Movie;
};
