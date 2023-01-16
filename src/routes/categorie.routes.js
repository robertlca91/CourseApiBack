const { Router } = require('express')
const {
  createCategorie,
  deleteCategories,
} = require('../controllers/categories.controller')
const router = Router()

router.post('/categories', createCategorie)
router.delete('/categories/:id', deleteCategories)

module.exports = router
