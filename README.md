# Insitefulickr

A quick and fun challenge playing with [Flickr's API](https://www.flickr.com/services/api/).

## Architecture
```bash
.
├── lib
│   ├── async.js
│   └── flickr.js
├── routes
│   ├── images.js
│   └── index.js
└── app.js
```

## Setup
```bash
# Install 📦s
$ yarn install

# Specify a PORT? Else defaults to 3000
$ export PORT=5050

# Specify a LIMIT for titles? Else defaults to 10
$ export LIMIT=2

# Use your own flickr 🔑? Defaults to'80aafb8d5879b4ab3d58a6543021cd59'
$ export API_KEY='your_flickr_api_key'
```

## Running localy 🏠
```bash
$ yarn start
```

## Dependencies

- [express🚂](https://www.npmjs.com/package/express)
- [flickr-sdk 📸](https://www.npmjs.com/package/flickr-sdk)
