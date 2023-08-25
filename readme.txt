HOW TO RUN THE WEBSITE.

A. RUN THE SERVER
1. Open Xxampp.
2. Start Apache and MySQL server.
3. Click Admin button to the right of the MySQL server, or search on Internet
	http://localhost/phpmyadmin
4. Create an database, named it whatever you want. For example, I call it "film".
5. In the database you've just create, click Import which is somewhere in the horizon menu.
6. In the box Choose File, choose the film.sql file in the folder you've just download.
7. Let all default, scroll down to the bottom, click Import.
8. Done. The table imported must have 3 collumns, which ID is the primary key.

B. RUN THE CODE.
1. Open the VS Code.
2. Open the folder project.
	2.1. Remember to change the database connection in server/index.js
	somewhere from line 8:

	const db = mysql.createPool({
		host: "localhost",
		user: "root", // or your username
		password: "12345", //or your password
		database: "film", //or your database's name
	});


3. In the terminal, type:
	cd server
	npm install : to install all the dependances existed in package.json.
	npm run devStart : for developing.
	npm run start : for using only.
4. In the terminal, create a New Terminal, type:
	cd client
	npm install
	npm run start
5. You can Ctrl+click on the port in the terminal, or you can paste this URI in you browser's searchbar.
	localhost:3001
	localhost:3000
6. Done. Two windows must be showed up.