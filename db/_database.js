const pg = require('pg');

const client = new pg.Client({
    host: 'localhost',
    user: 'postgres',
    password: 'developer098',
    database: 'tcc_ecommerce',
    port: 5432,
})


module.exports = client
