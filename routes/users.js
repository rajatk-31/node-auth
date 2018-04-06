const express = require('express'),
    router = require('express-promise-router')();
// router = express.Router()
const { validateBody, schemas } = require('../helper/routeHelpers')

var user = require('../controllers/users')
router.post('/signup', validateBody(schemas.authSchema), user.signup)
router.post('/signin', user.signin)
router.get('/secret', user.secret)

module.exports = router;