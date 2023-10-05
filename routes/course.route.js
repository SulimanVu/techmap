const {Router} = require('express');
const router = Router();
const {courseController} = require('../controllers/course.controller')

router.get('/courses', courseController.getCourse);
router.post('/addCourse', courseController.addCourse);

module.exports = router;