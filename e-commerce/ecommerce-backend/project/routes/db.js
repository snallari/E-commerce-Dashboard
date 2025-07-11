import { Pool } from 'pg';
const pool = new Pool({
  connectionString: 'postgresql://postgres:iSRpIbDSJCXesqbnphTIMXzDBzPHVCqN@shuttle.proxy.rlwy.net:18401/railway',
});

export default pool;