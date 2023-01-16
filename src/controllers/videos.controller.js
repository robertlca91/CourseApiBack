const VideoService = require('../services/videos.services')

const createVideos = async (req, res) => {
  try {
    const newvideo = req.body
    const result = await VideoService.create(newvideo)
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}
const deleteVideo = async (req, res) => {
  try {
    const { id } = req.params
    const result = await VideoService.delete(id)
    res.json(result)
  } catch (error) {
    throw error
  }
}

module.exports = { createVideos, deleteVideo }
