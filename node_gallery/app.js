"use strict";
var app = require("express")();
const bodyParser = require("body-parser");

var config = {
  appRoot: __dirname, // required config
};

const production = true;

if (production) {
  require("./api/db/mongoose");

  app.use(bodyParser.json());

  const image = require("./api/routes/image");
  app.use("/images", image);

  app.listen(8000);
} else {
  var SwaggerExpress = require("swagger-express-mw");
  SwaggerExpress.create(config, function (err, swaggerExpress) {
    if (err) {
      throw err;
    }

    // install middleware
    swaggerExpress.register(app);

    var port = process.env.PORT || 10010;
    app.listen(port);
  });
}

module.exports = app;
