
//Sequelize model represents tutorials table in Mysql Database
module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        },
        publishedBy: {
            type: Sequelize.STRING
        }
    });

    return Tutorial;
}