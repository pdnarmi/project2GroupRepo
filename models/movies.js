module.exports = function(sequelize, DataTypes) {
  const Movie = sequelize.define("Movie", {
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
    },
    userScore: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 10
      }
    }
  });
  return Movie;
};
