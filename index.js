const http = require("http");

require("dotenv").config();

const app = require("./src/app");
const { mongoConnect } = require("./src/services/mongo");

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

async function startServer() {
  await mongoConnect();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
