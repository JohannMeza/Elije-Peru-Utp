import { pool } from '../config/db.js'
export async function listCandidates(){
  const res = await pool.query('SELECT id, name, party, role, bio, photo_url, cv_url, source_url FROM candidatos ORDER BY name')
  return res.rows
}

export async function getCandidateById(id){
  const res = await pool.query('SELECT id, name, party, role, bio, photo_url, cv_url, source_url FROM candidatos WHERE id = $1', [id])
  return res.rows[0]
}
