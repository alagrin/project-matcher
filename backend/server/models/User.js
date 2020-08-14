const { Sequelize, Model, DataTypes } = require("sequelize");
// const sequelize = new Sequelize("sqlite::memory:"); for basic testing
const sequelize = new Sequelize('mysql://user:root:3600/ProjectMatcher')
//todo find actual path and ensure starts at launch

class User extends Model {}
User.init(
  {
    username: DataTypes.STRING,
    birthday: DataTypes.DATE,
  },
  { sequelize, modelName: "user" }
);

try {
    await sequelize.authenticate();
    console.log("Connection successful to DB");
} catch (error) {
    console.error('Unable to connect to db', error);
}

(async () => {
  await sequelize.sync();
  const alan = await User.create({
    username: "alagrin",
    birthday: new Date(1992, 3, 2),
  });
  console.log(alan.toJSON());
})();
