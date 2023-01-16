const CategoriesService = require('../services/categories.service')

const createCategorie = async (req, res) => {
  try {
    const newCategorie = req.body
    const result = await CategoriesService.create(newCategorie)
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}
const deleteCategories = async (req, res) => {
  try {
    const { id } = req.params
    const result = await CategoriesService.delete(id)
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

module.exports = { createCategorie, deleteCategories }
