import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});
async function testConnection() {
  try {
    const client = await pool.connect();
    console.log('Conexión exitosa a la base de datos');
    client.release();
  } catch (error) {
    console.error('Error al conectar a la base de datos', error);
  }
}

testConnection();
export { pool };
