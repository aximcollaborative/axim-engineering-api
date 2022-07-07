const express = require("express");
const cors = require("cors");
const fs = require("fs");
const swaggerFile = require("./swagger.json");
const swaggerUi = require("swagger-ui-express");

const app = express();

/* Accept all origins. */
app.use(cors());

/* Auto-generated API documentation. */
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.post("/slack/ask-in-forum", function(req, res) {
  /* #swagger.tags = ['Slack Commands']
     #swagger.description = 'Returns a message suggesting the user use the forums.'
  } */
  res.setHeader("Content-Type", "application/json");
  const messageFilename = "./messages/ask-in-forum.txt";
  fs.readFile(messageFilename, function(err, message) {
    if (err) {
      return res.status(500);
    }

    const response = JSON.stringify({
      "response_type": "in_channel",
      "text": message
    }, null, 2);

    /* #swagger.responses[200] = {
         schema: {"$ref": "#/definitions/SlackCommandResponse"},
         description: "Return a message to be sent to the channel."
    } */
    return res.status(200).send(response);
  });
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running.");
});
