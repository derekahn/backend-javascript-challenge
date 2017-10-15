# Insitefulickr

A quick and fun challenge playing with [Flickr's API](https://www.flickr.com/services/api/).

#### PROS 👍:
- Clear seperation of concerns--allowing for scalability.
- `lib/*` are small, light, portable, easily testable, and reusable in other projects.
    - `lib/flickr` methods are all pure and take a single argument with a consistent response of an array of objects (collection).

#### CONS 👎:
- Safety Not Garunteed ‼
  - Any updates/breaking-changes to `flickr-sdk` could 🔩  me.
  - `lib/flickr.*` is fragile and operates on the assumption of consistent data structures.
  - `lib/flickr.formatting` order matters for both the `photos` collection and `sizes` collection.

## Architecture
```bash
.
├── lib
│   ├── async.js   # helpers for async things
│   └── flickr.js  # interface for flickr-sdk
├── routes
│   ├── images.js  # handler for '/images'
│   └── index.js
└── app.js         # express server
```

## Setup
```bash
# Install 📦s
$ yarn install

# Specify a PORT? Else defaults to 8080
$ export PORT=5050

# Specify a LIMIT for titles? Else defaults to 10
$ export LIMIT=2

# Specify a URL_AMT per title? Else defaults to 2
$ export URL_AMT=5

# Use your own flickr 🔑? Defaults to'80aafb8d5879b4ab3d58a6543021cd59'
$ export API_KEY='your_flickr_api_key'
```

## Running localy 🏠
```bash
$ yarn start

$ curl http://localhost:8080/images?query=aloha
```

## Dependencies

- [express🚂](https://www.npmjs.com/package/express)
- [flickr-sdk 📸](https://www.npmjs.com/package/flickr-sdk)
