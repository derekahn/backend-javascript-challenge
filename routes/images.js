'use strict';

const router = require('express').Router();

const { middleware } = require('../lib/async');
const flickr         = require('../lib/flickr');

router.get('/', middleware(async (req, res) => {
  const text = req.query.query;

  const photos = await flickr.searching(text);
  const sizes  = await flickr.sizings(photos);

  const data = flickr.formatting({ photos, sizes });
  res.json(data);
}));

module.exports = router;
