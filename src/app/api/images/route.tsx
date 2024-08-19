// app/api/images/route.ts
import { NextResponse } from 'next/server';
import { pool } from '../../../utils/db'; // Ajusta la ruta según tu configuración

export async function GET() {
  try {
    const res = await pool.query('SELECT * FROM seccion_nosotros');
    return NextResponse.json(res.rows);
  } catch (error) {
    return NextResponse.error();
  }
}
