const Categories = require('../models/categories.model')
const Courses = require('../models/courses.models')
const UsersCourses = require('./usersCourses.model')
const Users = require('../models/users.models')
const Videos = require('../models/videos.models')

const initModels = () => {
  UsersCourses.belongsTo(Users, { as: 'courses', foreignKey: 'user_id' })
  Users.hasMany(UsersCourses, { as: 'user', foreignKey: 'user_id' })

  Courses.hasMany(UsersCourses, { as: 'course', foreignKey: 'course_id' })
  UsersCourses.belongsTo(Courses, { as: 'users', foreignKey: 'course_id' })

  Categories.belongsTo(Courses, { as: 'categories', foreignKey: 'course_id' })
  Courses.hasMany(Categories, { as: 'courseone', foreignKey: 'course_id' })

  Videos.belongsTo(Courses, { as: 'videos', foreignKey: 'course_id' })
  Courses.hasMany(Videos, { as: 'courstwo', foreignKey: 'course_id' })
}

module.exports = initModels
