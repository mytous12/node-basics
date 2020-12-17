const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodecomplete','root','Adbatcgdswr1!', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3307 
});

module.exports = sequelize;