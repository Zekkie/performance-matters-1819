process.env.PORT = 2000;

const data = require('./includes/sampledata');
const express = require('express');
const request = require('request');

const app = express();

app.use(express.static("static"));

app.set("view engine", "pug");
app.set("views", "./views")


app.get("/",(req, res) => {
	res.render("index", {data: data});
})

app.get("/list/:name", (req, res) => {
	const name = req.params.name;
	const listData = data.find((e) => {
		return e.title === name;
	})
	res.render("songs", {data: listData.songs})
})

app.get("/song/:artist", (req, res) => {
	const p = req.params.artist;

	request.get(`http://localhost:3000/${p}/sheetmusic`, (err, response, body) => {
		const data = JSON.parse(body.toString());
		console.log(data[0])
		res.render("detail", {data: data[0]});
	});

});

app.listen(process.env.PORT, () => {
	console.log("APP IS RUNNING ON PORT: " + process.env.PORT);
});