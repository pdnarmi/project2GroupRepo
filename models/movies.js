module.exports = function(sequelize, DataTypes) {
  const Movie = sequelize.define("Movie", {
    userID: DataTypes.STRING,
    title: DataTypes.STRING,
    poster: DataTypes.STRING,
    synopsis: DataTypes.STRING,
    rating: DataTypes.STRING,
    releaseDate: DataTypes.STRING,
    genre: DataTypes.STRING,
    review: DataTypes.STRING
  });
  return Movie;
};
