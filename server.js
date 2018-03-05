const express = require('express');
  config = require('./server/configure'),
  app = express();

  app.set('port', process.env.PORT || 3300);
  app.set('Views', `${__dirname}/Views`);
  app = config(app);
  //app.get('/', (req, res) => {
  //res.send('Hello World');
  //});
  const server = app.listen(app.get('port'), () => {
  console.log(`Server up: http://localhost:${app.get('port')}`);
  });
