const {sequelize} = require('../db');
const { Sequelize } = require('sequelize');

const Cheese = sequelize.define('cheese', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },

    description: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = {Cheese};