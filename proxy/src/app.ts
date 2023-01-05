import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 8000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/api/.user', function (req, res, next) {
  if (req.header('Authorization')) { next(); return }
  res.sendStatus(401);
});

app.get("/api", (_, res) => {
  res.send("Hello API");
});

app.get("/api/hello", (req, res) => {
  axios.get("http://nginx/api/hello").then((onfulfilled) => {
    res.send(onfulfilled.data);
  }).catch(e => res.send(e))
});

app.post("/api/login", (req, res) => {
  // res.send(req.body)
  axios.post("http://nginx/api/login_check", req.body).then((onfulfilled) => {
    res.send(onfulfilled.data);
  }).catch(e => res.send(e))
});

app.get("/api/.user/user", (req, res) => {
  const bearer = req.header('Authorization');
  axios.get("http://nginx/api/user", {headers: {'Authorization': bearer}}).then((onfulfilled) => {
    res.send(onfulfilled.data);
  }).catch(e => res.send(e))
});

app.get("/api/.user/admin", (req, res) => {
  const bearer = req.header('Authorization');
  axios.get("http://nginx/api/admin", {headers: {'Authorization': bearer}}).then((onfulfilled) => {
    res.send(onfulfilled.data);
  }).catch(e => res.send(e))
});

app.post("/api/.user/check-role", (req, res) => {
  const bearer = req.header('Authorization');
  axios.post("http://nginx/api/user/check-role", req.body, {headers: {'Authorization': bearer}}).then((onfulfilled) => {
    res.send(onfulfilled.data);
  }).catch(e => res.send(e))
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
