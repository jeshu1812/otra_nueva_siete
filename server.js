const express = require('express');
const sequelize = require('./app/config/db_config');
const User = require('./app/models/user.model.js');
const Bootcamp = require('./app/models/bootcamp.model.js');
const userController = require('./app/controllers/user.controller.js');
const bootcampController = require('./app/controllers/bootcamp.controller.js');
const relations = require('./app/models/relations.js');

const app = express();
const PORT = 3000;

app.use(express.json());

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida.');
    await sequelize.sync({ alter: true });
    console.log('Modelos sincronizados.');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
})();

//rutas usuarios
app.post('/users', userController.createUser);
app.get('/users/:userId', userController.findUserById);
app.get('/users', userController.findAll);
app.put('/users/:userId', userController.updateUserById);
app.delete('/users/:userId', userController.deleteUserById);

//rutas bootcamps
app.post('/bootcamps', bootcampController.createBootcamp);
app.get('/bootcamps/:bootcampId', bootcampController.findById);
app.get('/bootcamps', bootcampController.findAllBootcamps);

//otras
app.post('/bootcamps/:bootcampTitle/users', bootcampController.addUserToBootcamp);
app.get('/bootcampUsers', bootcampController.getBootcampUsers);
app.get('/bootcamps/:bootcampId/users/:userId/check', bootcampController.checkUserInBootcamp);
app.delete('/bootcamps/:bootcampTitle/users/:userId', bootcampController.removeUserFromBootcamp);


sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});


