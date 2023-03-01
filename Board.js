const {sequelize} = require('../db');
const { Sequelize } = require('sequelize');

const Board = sequelize.define('board', {
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },

    description: {
        type: Sequelize.STRING,
        allowNull: false
    },

    rating: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = {Board};