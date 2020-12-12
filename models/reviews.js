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
        plotScore:{
            type: DataTypes.INTEGER,
            allowNull: true,
            validate:{
                min: 1,
                max: 5
            }
        },
        lightingDesignScore:{
            type: DataTypes.INTEGER,
            allowNull: true,
            validate:{
                min: 1,
                max: 5
            }
        },
        soundDesignScore:{
            type: DataTypes.INTEGER,
            allowNull: true,
            validate:{
                min: 1,
                max: 5
            }
        },
        watchAgain:{
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    });
    return Review;
};