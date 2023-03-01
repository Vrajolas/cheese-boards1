const {sequelize} = require('../db');
const { Sequelize } = require('sequelize');

const User = sequelize.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = {User};