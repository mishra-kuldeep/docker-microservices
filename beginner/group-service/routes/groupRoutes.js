const express = require('express');
const router = express.Router();
const GroupController = require('../controllers/GroupController')


router.post('/create',GroupController.addGroup)
router.post('/member/store',GroupController.addGroupMember)


module.exports = {
    basePath: '/group',
    router
};
