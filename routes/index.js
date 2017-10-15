'use strict';

const router = require('express').Router();

const images = require('./images');
router.use('/images', images);

router.use('*', (req, res) => {
  res.send('<h1>Herro</h1>');
});

module.exports = router;
