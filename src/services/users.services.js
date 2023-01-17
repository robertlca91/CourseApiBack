const Courses = require('../models/courses.models')
const Users = require('../models/users.models')
const UsersCourses = require('../models/usersCourses.model')

class UsersServices {
  static async getAll() {
    try {
      const result = await Users.findAll({
        attributes: {
          exclude: ['password', 'createdAt', 'updatedAt'],
        },
      })
      return result
    } catch (error) {
      throw error
    }
  }

  static async getById(id) {
    try {
      const result = await Users.findByPk(id)
      return result
    } catch (error) {
      throw error
    }
  }
  static async create(user) {
    try {
      const result = await Users.create(user)
      return result
    } catch (error) {
      throw error
    }
  }
  static async update(field, id) {
    try {
      const result = await Users.update(field, { where: { id } })
      return result
    } catch (error) {
      throw error
    }
  }
  static async deleteUser(id) {
    try {
      const result = await Users.destroy(id)
      return result
    } catch (error) {
      throw error
    }
  }
  static async getUserWithCourses(id) {
    try {
      const result = await Users.findOne({ where: { id } })
      return result
    } catch (error) {
      throw error
    }
  }
  static async getUserCourses(id) {
    try {
      const result = await Users.findOne({
        where: { id },
        include: {
          model: UsersCourses,
          as: 'user',
          include: {
            model: Courses,
            as: 'users',
          },
        },
      })
      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports = UsersServices
