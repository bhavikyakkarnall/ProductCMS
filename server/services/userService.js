import pool from '../config.js';

async function getAllUsers() {
    const query = `SELECT * FROM USER`;
    const [rows] = await pool.query(query);
    return rows;
}

async function getUserById(id) {
    const query = `SELECT * FROM USER WHERE ID = ?`;
    const [rows] = await pool.query(query, [id]);
    return rows[0];
}

async function createUser(userData) {
    const query = `INSERT INTO USER SET ?`;
    const [result] = await pool.query(query, userData);
    return result.insertId;
}

async function updateUser(id, userData) {
    const query = `UPDATE USER SET ? WHERE ID = ?`;
    const [result] = await pool.query(query, [userData, id]);
    return result.affectedRows;
}

async function deleteUser(id) {
    const query = `DELETE FROM USER WHERE ID = ?`;
    const [result] = await pool.query(query, [id]);
    return result.affectedRows;
}

export default {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};