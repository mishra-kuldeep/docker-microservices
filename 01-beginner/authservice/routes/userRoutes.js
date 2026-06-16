const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/LoginController')


router.post('/register',LoginController.register)
router.post('/verify',LoginController.verify)
router.post('/update/business',LoginController.updateBusiness)


module.exports = {
    basePath: '/auth',
    router
};
