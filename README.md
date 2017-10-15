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
