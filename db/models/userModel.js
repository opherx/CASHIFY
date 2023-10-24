const { sequelize } = require("../settings/config");
const Sequelize = require('sequelize');

const User = sequelize.define('users', {
    id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
  
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    first_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    last_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  
    password: {
      type: Sequelize.STRING,
      allowNull: false, // Correct 'allowNUll' to 'allowNull'
    },
  
    email: {
      type: Sequelize.STRING,
      allowNull: false ,
    },
  
    phone_num: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  
    reference: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  
    coupon: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  
    balance: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
  
    bank_acc: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
  
    bank_name: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  
    date: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
    },
  });

module.exports = User;