const Bootcamp = require('../models/bootcamp.model.js');
const User = require('../models/user.model.js');
const BootcampUser = require('../models/bootcamp_user.model.js')

const createBootcamp = async (req, res) => {
  try {
    const { title, cue, description } = req.body;
    const bootcamp = await Bootcamp.create({ title, cue, description });
    res.status(201).json(bootcamp);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const addUser = async (req, res) => {
  const { bootcampId } = req.params;
  const { userId } = req.body; // Asegúrate de que el valor de userId se está extrayendo correctamente

  try {
    const bootcamp = await Bootcamp.findByPk(bootcampId);
    if (!bootcamp) {
      return res.status(404).json({ error: 'Bootcamp not found' });
    }

    await bootcamp.addUser(userId, { through: { title: 'Your Title' } });

    return res.status(201).json({ message: 'User added to bootcamp successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error' });
  }
};



const findById = async (req, res) => {
  try {
    const { bootcampId } = req.params;
    const bootcamp = await Bootcamp.findByPk(bootcampId, { include: User });
    if (!bootcamp) {
      res.status(404).json({ message: 'Bootcamp no encontrado' });
    } else {
      res.status(200).json(bootcamp);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const findAllBootcamps = async (req, res) => {
  try {
    const bootcamps = await Bootcamp.findAll({ include: User });
    res.status(200).json(bootcamps);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const addUserToBootcamp = async (req, res) => {
  try {
    const { bootcampId } = req.params;
    const { userId } = req.body;

    // Buscar el bootcamp y el usuario
    const bootcamp = await Bootcamp.findByPk(bootcampId);
    const user = await User.findByPk(userId);

    if (!bootcamp || !user) {
      return res.status(404).json({ error: 'Bootcamp or user not found' });
    }

    // Agregar la asociación entre el bootcamp y el usuario
    await bootcamp.addUser(user);

    return res.status(201).json({ message: 'User added to bootcamp' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error' });
  }
};

const removeUserFromBootcamp = async (req, res) => {
  try {
    const { bootcampId, userId } = req.params;

    // Buscar el bootcamp y el usuario
    const bootcamp = await Bootcamp.findByPk(bootcampId);
    const user = await User.findByPk(userId);

    if (!bootcamp || !user) {
      return res.status(404).json({ error: 'Bootcamp or user not found' });
    }

    // Eliminar la asociación entre el bootcamp y el usuario
    await bootcamp.removeUser(user);

    return res.status(200).json({ message: 'User removed from bootcamp' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error' });
  }
};

const checkUserInBootcamp = async (req, res) => {
  const userId = req.params.userId;
  const bootcampId = req.params.bootcampId;

  const bootcampUser = await BootcampUser.findOne({
    where: {
      UserId: userId,
      BootcampId: bootcampId,
    },
  });

  if (bootcampUser) {
    res.status(200).json({ message: 'El usuario está en el bootcamp.' });
  } else {
    res.status(404).json({ message: 'El usuario no está en el bootcamp.' });
  }
};

const getBootcampUsers = async (req, res) => {
  try {
    const bootcampUsers = await BootcampUser.findAll();
    res.status(200).json(bootcampUsers);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la tabla BootcampUser' });
  }
};


module.exports = {
  createBootcamp,
  addUser,
  findById,
  findAllBootcamps,
  addUserToBootcamp,
  removeUserFromBootcamp,
  checkUserInBootcamp,
  getBootcampUsers
};
