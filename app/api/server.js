const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const controllers = require("./controllers.json");
const config = require('../../config');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get(`/`, function (req, res) {
  res.end(JSON.stringify(controllers, null, 4));
});

function toResponse({ controller, response, status }) {
  setTimeout(() => {
    console.log('response', { url: controller.url, status });
    if (status === 200) {

      response.status(200).json(controller.response);
      return;
    }

    response.status(500).json(controller.responseFail);
  }, config.timeOut);
}

controllers.forEach(controller => {
  if (controller.method.toLowerCase() === 'get') {
    app.get(controller.url, (request, response) => {
      console.log('request', { url: controller.url, query: request.query });

      const status = controller.status || config.status;

      toResponse({ controller, response, status });
    })
  } else if (controller.method.toLowerCase() === 'post') {
    app.post(controller.url, (request, response) => {
      console.log('request', { url: controller.url, body: request.body });

      const status = controller.responseStatus || config.status;

      toResponse({ controller, response, status });
    })
  }
});

app.listen(3000, function () {
  console.log('El servidor ha sido inicializado: http://localhost:3000');
});