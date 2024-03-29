// db.js
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '34.173.221.22',
  user: 'root',
  password: 'test1234',
  database: 'mydatabase'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Database connection established successfully.');
});

const search = (term, sortBy = 'Video_ID', order = 'ASC', callback) => {
  const query = `SELECT * FROM Video WHERE Title LIKE ? ORDER BY ?? ${order}`;
  connection.query(query, [`%${term}%`, sortBy], function(error, results, fields) {
    if (error) throw error;
    callback(results);
  });
};

const saveVideoForUser = (videoId, callback) => {
  const query = "INSERT INTO SavedVideos (videoId) VALUES (?)";
  connection.query(query, [videoId], function(error, results, fields) {
    if (error) throw error;
    callback(results);
  });
};

const deleteVideoForUser = (videoId, callback) => {
    const query = "DELETE FROM SavedVideos WHERE videoId = ?";
    connection.query(query, [videoId], function(error, results, fields) {
        if (error) throw error;
        callback(results);
    });
};

module.exports = {
  connection,
  search,
  saveVideoForUser,
  deleteVideoForUser
};
