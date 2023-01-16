const { Router } = require('express')
const {
  createCourse,
  getAllCourse,
  getAllCourseById,
  updateCourseId,
  assignCourse,
  BringAllRelationships,
} = require('../controllers/course.controller')
const router = Router()

router.post('/course', createCourse)
router.get('/course', getAllCourse)
router.get('/course/:id', getAllCourseById)
router.put('/course/:id', updateCourseId)
router.post('/course/users', assignCourse)

router.get('/course/:id/relation', BringAllRelationships)

module.exports = router
