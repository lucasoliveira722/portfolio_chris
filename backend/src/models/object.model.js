
import pool from '../config/db.js';

const objectModel = {
  async getAll() {
    const { rows } = await pool.query('SELECT * FROM objects');
    return rows;
  },

  async getById(id) {
    const { rows } = await pool.query('SELECT * FROM objects WHERE id = $1', [id]);
    return rows[0];
  },

  async create(title, description, image) {
    const { rows } = await pool.query(
      'INSERT INTO objects (title, description, image) VALUES ($1, $2, $3) RETURNING *',
      [title, description, image]
    );
    return rows[0];
  },

  async update(id, title, description, image) {
    const { rows } = await pool.query(
      'UPDATE objects SET title = $1, description = $2, image = $3 WHERE id = $4 RETURNING *',
      [title, description, image, id]
    );
    return rows[0];
  },

  async delete(id) {
    const { rows } = await pool.query('DELETE FROM objects WHERE id = $1 RETURNING *', [id]);
    return rows[0];
  },
};

export default objectModel;
