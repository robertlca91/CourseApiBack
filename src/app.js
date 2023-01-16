const express = require('express')
const db = require('./utils/database')
const initModels = require('./models/InitModels')
const userRoutes = require('./routes/users.routes')
const coursesRoutes = require('./routes/course.routes')
const videosRoutes = require('./routes/videos.routes')
const categoriesRoutes = require('./routes/categorie.routes')

const app = express()
app.use(express.json())
const PORT = 3000

db.authenticate()
  .then(() => console.log('autenticacion exitosa'))
  .catch((error) => console.log(error))

initModels()

db.sync({ force: false })
  .then(() => console.log('data base sincronizada'))
  .catch((error) => console.log(error))

app.use('/api/v1', userRoutes)
app.use('/api/v1', coursesRoutes)
app.use('/api/v1', videosRoutes)
app.use('/api/v1', categoriesRoutes)

app.listen(PORT, () => {
  console.log(`el servidor corredor en el puerto ${PORT}`)
})
