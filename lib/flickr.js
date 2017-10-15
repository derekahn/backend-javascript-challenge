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

const KEY = process.env.API_KEY || 'ae91b3f74b62c03698fe689a51c01e87';
module.exports = new Flickr(KEY);
