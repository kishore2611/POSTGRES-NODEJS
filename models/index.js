const sequelize = require('../config/database');
const User = require('./user');

const initDb = async () => {
  try {
    await sequelize.sync({ force: true }); // This will drop and recreate tables on every run
    console.log('Database synced successfully.');
  } catch (error) {
    console.error('Error syncing the database:', error);
  }
};

module.exports = { User, initDb };
