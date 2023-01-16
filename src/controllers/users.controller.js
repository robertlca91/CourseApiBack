const UsersServices = require('../services/users.services')

const getAllUsers = async (req, res) => {
  try {
    const result = await UsersServices.getAll()
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

const getUserById = async (req, res) => {
  try {
    const { id } = req.params
    const result = await UsersServices.getById(id)
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

const createUser = async (req, res) => {
  try {
    const newUser = req.body
    const result = await UsersServices.create(newUser)
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}
const updateUser = async (req, res) => {
  try {
    const { id } = req.params
    const { firstname, lastname, password } = req.body
    const field = { firstname, lastname, password }
    const result = await UsersServices.update(field, id)
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    const result = await UsersServices.deleteUser({ where: { id } })
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}
const getUserWithCourses = async (req, res) => {
  try {
    const { id } = req.params
    const result = await UsersServices.getUserWithCourses(id)
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}
const getUserCourses = async (req, res) => {
  try {
    const { id } = req.params
    const result = await UsersServices.getUserCourses(id)
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUserWithCourses,
  getUserCourses,
}
