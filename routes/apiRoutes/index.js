const router = require('express').Router();
const apiRoutes = require('../apiRoutes/apiRoutes');

// Middleware
router.use(apiRoutes);

module.exports = router;