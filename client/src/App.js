import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";

function App() {
	// sử dụng một số trạng thái để lưu trữ dữ liệu
	const [movieName, setMovieName] = useState(""); // tên phim nhập bởi người dùng
	const [review, setReview] = useState(""); // review nhập bởi người dùng
	const [movieReviewList, setMovieList] = useState([]);
	const [newReview, setNewReview] = useState("");

	// useEffect: gọi một API để lấy danh sách các đánh giá phim từ cơ sở dữ liệu và lưu trữ chúng trong movieReviewList
	useEffect(() => {
		Axios.get("http://localhost:3001/api/get").then((res) => {
			console.log(res.data);
			setMovieList(res.data);
		});
	}, []);

	// thêm một đánh giá mới vào cơ sở dữ liệu và
	const submitReview = () => {
		Axios.post("http://localhost:3001/api/insert", {
			movieName: movieName,
			movieReview: review,
		});
		// cập nhật danh sách đánh giá phim.
		setMovieList([
			...movieReviewList,
			{ movieName: movieName, movieReview: review },
		]);
	};
	// xóa một đánh giá phim khỏi cơ sở dữ liệu.
	const deleteReview = (movie) => {
		Axios.delete(`http://localhost:3001/api/delete/${movie}`); //send to backend
	};

	const updateReview = (movie) => {
		Axios.put("http://localhost:3001/api/update", {
			movieName: movie,
			movieReview: newReview,
		}); //send to backend
		setNewReview(""); //reset lai gia tri
	};

	return (
		<div className="App">
			<div className="topnav">
				<a class="active" href="#home">
					Home
				</a>
				<a href="#movie">Movie</a>
				<a href="#actor">Actor</a>
				<a href="#director">Director</a>
			</div>

			<h1> Movie Review</h1>

			<div className="form">
				<label>Movie Name:</label>
				<input
					type="text"
					name="movieName"
					onChange={(e) => {
						setMovieName(e.target.value);
					}}
				/>
				<label>Review:</label>
				<input
					type="text"
					name="review"
					onChange={(e) => {
						setReview(e.target.value);
					}}
				/>

				<button onClick={submitReview}>Submit</button>

				{movieReviewList.map((val) => {
					//val = each value from movieReviewList.
					return (
						<div className="card">
							<h1>{val.movieName}</h1>
							<p>{val.movieReview}</p>

							<button
								onClick={() => {
									deleteReview(val.movieName);
								}}
							>
								Delete
							</button>

							<input
								type="text"
								id="updateInput"
								onChange={(e) => {
									setNewReview(e.target.value);
								}}
							/>

							<button
								onClick={() => {
									updateReview(val.movieName);
								}}
							>
								Update
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default App;
