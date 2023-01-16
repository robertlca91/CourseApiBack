const coursesService = require('../services/courses.services')

const createCourse = async (req, res) => {
  try {
    const newCourse = req.body
    const result = await coursesService.createCourse(newCourse)
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

const getAllCourse = async (req, res) => {
  try {
    const result = await coursesService.getAllCourse()
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}
const getAllCourseById = async (req, res) => {
  try {
    const { id } = req.params
    const result = await coursesService.getAllCourseById(id)
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}
const updateCourseId = async (req, res) => {
  try {
    const { id } = req.params
    const { description } = req.body
    const field = { description }
    const result = await coursesService.update(field, id)
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}
const assignCourse = async (req, res) => {
  try {
    const NewAssignCourse = req.body
    const result = await coursesService.assignCourse(NewAssignCourse)
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}
const BringAllRelationships = async (req, res) => {
  try {
    const { id } = req.params
    const result = await coursesService.BringAllRelationships(id)
    res.json(result)
  } catch (error) {
    res.status(error).json(error.message)
  }
}
module.exports = {
  createCourse,
  getAllCourse,
  getAllCourseById,
  updateCourseId,
  assignCourse,
  BringAllRelationships,
}
