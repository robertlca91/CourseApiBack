const db = require('../utils/database')
const Users = require('../models/users.models')
const Categories = require('../models/categories.model')
const Courses = require('../models/courses.models')
const UsersCourses = require('../models/usersCourses.model')
const Videos = require('../models/videos.models')

const users = [
  {
    firstname: 'hiroshi',
    lastname: 'caceres',
    password: '1234',
    email: 'hiroshi@gmail.com',
  },
  {
    firstname: 'rebeca',
    lastname: 'tapia',
    password: '45678',
    email: 'rebeca@gmail.com',
  },
  {
    firstname: 'marisol',
    lastname: 'avendaño',
    password: '1234',
    email: 'marisol@gmail.com',
  },
  {
    firstname: 'axel',
    lastname: 'caceres',
    password: '78965',
    email: 'axel@gmail.com',
  },
]

const courses = [
  {
    title: 'trigometria',
    description: 'geometria del espacio',
    instructor: 'socrates',
  },
  {
    title: 'lenguaje',
    description: 'literatura antigua',
    instructor: 'monalisa',
  },
  {
    title: 'historia',
    description: 'culturas prehispanicas',
    instructor: 'pachacutec',
  },
  {
    title: 'religion',
    description: 'teologia',
    instructor: 'juan pablo II',
  },
]
const categories = [
  { name: 'geometria', courseId: 1 }, //1
  { name: 'lenguaje', courseId: 2 }, //2
  { name: 'trigometria', courseId: 3 }, //3
  { name: 'literatura', courseId: 2 }, //4
  { name: 'historia', courseId: 3 }, //5
  { name: 'cocina', courseId: 3 }, //6
  { name: 'deporte', courseId: 2 }, //7
  { name: 'ocio', courseId: 1 }, //8
  { name: 'financiero', courseId: 2 }, //9
  { name: 'entretenimiento', courseId: 1 },
]
const usersCourses = [
  {
    userId: '1',
    courseId: '2',
  },
  {
    userId: '2',
    courseId: '3',
  },
  {
    userId: '2',
    courseId: '2',
  },
  {
    userId: '4',
    courseId: '1',
  },
  {
    userId: '1',
    courseId: '2',
  },
  {
    userId: '1',
    courseId: '1',
  },
  {
    userId: '2',
    courseId: '1',
  },
  {
    userId: '3',
    courseId: '1',
  },
]

const videos = [
  {
    title: 'trigonometria',
    url: 'http:/diegoloca.com/socrates',
    courseId: 2,
  },
  {
    title: 'geometria',
    url: 'http:/stevenloca.com/socrates',
    courseId: 1,
  },
  {
    title: 'cosmetologia',
    url: 'http:/paulloca.com/socrates',
    courseId: 3,
  },
  {
    title: 'cocinanuclear',
    url: 'http:/lindaDonpedrito.com/socrates',
    courseId: 4,
  },
]

db.sync({ force: true }).then(() => {
  console.log('iniciando respuesta')
  users.forEach((user) => Users.create(user))
  setTimeout(() => {
    categories.forEach((categorie) => Categories.create(categorie))
  }, 100)
  setTimeout(() => {
    usersCourses.forEach((usersCourse) => UsersCourses.create(usersCourse))
  }, 250)
  setTimeout(() => {
    courses.forEach((course) => Courses.create(course))
  }, 350)
  setTimeout(() => {
    videos.forEach((video) => Videos.create(video))
  }, 450)
})
