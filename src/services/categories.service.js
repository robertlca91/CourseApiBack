const Categories = require('../models/categories.model')

class CategoriesService {
  static async create(categories) {
    try {
      const result = await Categories.create(categories)
      return result
    } catch (error) {
      throw error
    }
  }
  static async delete(id) {
    try {
      const result = await Categories.destroy({ where: { id } })
      return result
    } catch (error) {
      throw error
    }
  }
}
module.exports = CategoriesService
