const Categories = require('../models/categories.model')
const Course = require('../models/courses.models')
const Users = require('../models/users.models')
const UsersCourses = require('../models/usersCourses.model')
const Videos = require('../models/videos.models')
class coursesService {
  static async createCourse(course) {
    try {
      const result = await Course.create(course)
      return result
    } catch (error) {
      throw error
    }
  }
  static async getAllCourse() {
    try {
      const result = await Course.findAll()
      return result
    } catch (error) {
      throw error
    }
  }
  static async getAllCourseById(id) {
    try {
      const result = await Course.findOne({
        where: { id },
        include: [
          {
            model: Categories,
            as: 'courseone',
          },
          { model: Videos, as: 'courstwo' },
        ],
      })
      return result
    } catch (error) {
      throw error
    }
  }
  static async update(field, id) {
    try {
      const result = await Course.update(field, { where: { id } })
      return result
    } catch (error) {
      throw error
    }
  }
  static async assignCourse(newassign) {
    try {
      const result = await UsersCourses.create(newassign)
      return result
    } catch (error) {
      throw error
    }
  }
  static async BringAllRelationships(id) {
    try {
      const result = await Course.findOne({
        where: { id },
        include: [
          {
            model: UsersCourses,
            as: 'course',
            include: { model: Users, as: 'courses' },
          },
          {
            model: Categories,
            as: 'courseone',
          },
          { model: Videos, as: 'courstwo' },
        ],
      })
      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports = coursesService
