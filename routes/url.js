const express = require('express');
const { handleganrateNewShortUrl , handleRedirectShortUrl , handeleAnalysis } = require('../controller/url');

const router = express.Router()

router.post('/',handleganrateNewShortUrl)

router.get('/analysis/:shortId',handeleAnalysis)
router.get('/:shortId', handleRedirectShortUrl)

module.exports = router;