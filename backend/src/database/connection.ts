import knex from 'knex';

// config banco de dados
const db = knex({
    debug: true,
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '12345',
        database: 'pitu'
    }
});

export default db;