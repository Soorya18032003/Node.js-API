
const pool = require('../config/db');

exports.getAllUsers = async () => {
  const [rows] = await pool.query('SELECT * FROM Users');
  return rows;
};

exports.getUserById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM Users WHERE id = ?', [id]);
  return rows[0];
};

exports.createUser = async (user) => {
  const {name , email}= user;
  const result = await pool.query('INSERT INTO Users (name, email) VALUES (?, ?)', [name,email]);
  return result;
};

exports.updateUser = async (id, user) => {
  const result = await pool.query('UPDATE Users SET name = ?, email = ? WHERE id = ?', [user.name, user.email, id]);
  return result;
};

exports.deleteUser = async (id) => {
  const result = await pool.query('DELETE FROM Users WHERE id = ?', [id]);
  return result;
};
