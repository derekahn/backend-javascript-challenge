'use strict';

async function run() {
  const app = require('express')();

  const routes = require('./routes');
  app.use(routes);

  const PORT = process.env.PORT || 8080;
  app.listen(PORT);

  console.log(`👂 on port:\x1b[36m ${PORT}`);
}

run().catch(error => {
  console.error('\x1b[31m🤖 Danger Will Robinson , 🤖 Danger:', error.stack);
});
