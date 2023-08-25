// sử dụng thư viện React, ứng dụng này sử dụng các thành phần (component) và trạng thái (state) để quản lý dữ liệu.
const express = require("express");
// hỗ trợ các tính năng như CORS và JSON parsing
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");
const port = 3001;

const db = mysql.createPool({
	host: "localhost",
	user: "root",
	password: "12345",
	database: "film",
});

// cấu hình và cài đặt middleware trong ứng dụng Express để xử lý các yêu cầu HTTP và phản hồi.
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// start point
app.get("/api/get", (req, res) => {
	const sqlInsert = "SELECT * FROM movie_reviews";
	db.query(sqlInsert, (err, result) => {
		// console.log(result);
		res.send(result); // send the result to front-end
	});
});

app.post("/api/insert", (req, res) => {
	const movieName = req.body.movieName;
	const movieReview = req.body.movieReview;

	const sqlInsert =
		"INSERT INTO movie_reviews (movieName, movieReview) VALUES (?, ?)";
	db.query(sqlInsert, [movieName, movieReview], (err, result) => {
		console.log(result);
	});
});

app.delete("/api/delete/:movieName", (req, res) => {
	const name = req.params.movieName;

	const sqlDelete = "DELETE FROM movie_reviews WHERE movieName = ?";
	db.query(sqlDelete, name, (err, result) => {
		if (err) console.log(err);
	});
});

//update
app.put("/api/update", (req, res) => {
	const review = req.body.movieReview;
	const name = req.body.movieName;

	const sqlUpdate =
		"UPDATE movie_reviews SET movieReview = ? WHERE movieName = ?";

	db.query(sqlUpdate, [review, name], (err, result) => {
		if (err) console.log(err);
		// else alert("Sửa thành công!")
	});
});

app.listen(port, () => {
	console.log(`listening on port http://localhost:${port}`);
});
