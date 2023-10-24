/// IMPORT SEQUELIZE 

const { Sequelize } = require('sequelize');

//DEFINE A SEQUELIZE CONNECTION

const sequelize = new Sequelize('cashify_db', 'root', '2244', {
    host: 'localhost',
    dialect: 'mysql',
})

// TEST DATABASE CONNECTION

async function testSequelizeConnection() {
    try{
        await sequelize.authenticate();
        console.log('connection to db was successfull');
    } catch(error){
        console.error('unable to connect to db', error);
    }
}

testSequelizeConnection();

module.exports = {sequelize, testSequelizeConnection,};