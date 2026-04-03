const jsonServer = require("json-server");

const app = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

app.use(middlewares);
app.use(router);

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log("Server Running");
});
