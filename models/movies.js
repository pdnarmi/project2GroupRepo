module.exports = function(sequelize, DataTypes) {
  const Movie = sequelize.define("Movie", {
    userID: DataTypes.INTEGER,
    title: DataTypes.STRING,
    poster: DataTypes.STRING,
    synopsis: DataTypes.STRING,
    rating: DataTypes.STRING,
    releaseDate: DataTypes.STRING,
    genre: DataTypes.STRING,
    review: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1, 3500]
      }
    }
  });
  return Movie;
};
