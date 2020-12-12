module.exports = (sequelize, DataTypes)=>{

    const Review = sequelize.define("Review", {

        movieTitle:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        userResponse:{
            type: DataTypes.TEXT,
            allowNull: true,
            validate:{
                len:[1,3000]
            }
        },
        userScore:{
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                min: 1,
                max: 5
            }
        }
    });
    return Review;
};