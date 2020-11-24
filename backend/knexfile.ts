import path from "path";

module.exports = {
    client: 'mysql2',
    connection: {
        user: 'root',
        password: '12345',
        database: 'pitu',
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    }
}