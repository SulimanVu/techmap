const Course = require('../models/Course.model');

module.exports.courseController = {
    getCourse: async (req, res) => {
        try {
            const data = await Course.find()
            res.json(data)
        } catch (error) {
            res.json(error)
        }
    },

    addCourse: async (req, res) => {
        const { title, description } = req.body;
        try {
            const data = await Course.create({
                title,
                description,
            })
            res.json(data)
        } catch (error) {
            res.json(error)
        }
    }
}