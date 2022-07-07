const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Engineering API",
    description: "A set of APIs used by the tCRIL engineering team",
  },
  host: "tcril-engineering-api.herokuapp.com",
  schemes: ["https"],
  definitions: {
    Error404: {
      message: "Not found."
    },
    SlackCommandResponse: [{
      responseType: "in_channel",
      text: "This messages goes in the channel"
    }]
  }
};

const outputFile = "swagger.json";
const endpointsFiles = ["server.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
