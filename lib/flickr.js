'use strict';

const FlickrSDK = require('flickr-sdk');

// interface for 📦 flickr-sdk
class Flickr extends FlickrSDK {

  async searching(text = 'robots') {
    const responses = await this.photos.search({ text });
    return responses.body.photos.photo.map(({ id, title }) =>
      ({ id, title })
    )
  }

  async sizings(photos = []) {
    const requests = photos.map(({ id: photo_id }) =>
      this.photos.getSizes({ photo_id })
    );

    const responses = await Promise.all(requests);
    return responses.map(({ body }) =>
      body.sizes.size
    );
  }

  formatting({ photos = [], sizes = [] }) {
    const urls = i => sizes[i].map(({ url, width, height }) =>
      ({ url, width, height })
    );

    return photos.map((photo, i) =>
      Object.assign({}, photo, { urls: urls(i) })
    );
  }

}

const KEY = process.env.API_KEY || '80aafb8d5879b4ab3d58a6543021cd59';
module.exports = new Flickr(KEY);
