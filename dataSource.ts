import { DataSource } from 'typeorm';

import { entities } from './src/entity';
import { migrations } from './src/migration'
/**
 * This dataSource is only used for local TypeORM CLI calls
 */
export default new DataSource({
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    username: 'postgres',
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    logging: false,
    entities,
    migrations,
});
