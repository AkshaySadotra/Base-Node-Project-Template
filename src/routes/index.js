const express = require('express');
const v1Routes = require('./v1')
const router = express.Router();
router.use('/v1',v1Routes ) // after /v1 everything will be handled by the v1Routes 
// router.use binds the route with  other route
module.exports = router;