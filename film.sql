CREATE TABLE movie_reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    movieName VARCHAR(200) NOT NULL,
    movieReview TEXT(500) NOT NULL
);

insert into movie_reviews(id, movieName, movieReview)
values(1, 'Tiểu La Hắc', 'Tuyệt vời!');
insert into movie_reviews(id, movieName, movieReview)
values(2, 'Interstellar ', 'Tuyệt vời!');
insert into movie_reviews(id, movieName, movieReview)
values(3, 'Lật Mặt', 'Tuyệt!');
insert into movie_reviews(id, movieName, movieReview)
values(4, 'Boruto: The Next Generation', 'Dở tệ!');