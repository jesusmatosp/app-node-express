const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody with Tekton CI/CD!");
});
 
module.exports.app = app;
