import Knex from 'knex';

// criação da tabela dos links
export async function up(knex: Knex) {
    return knex.schema.createTable('links', table => {
        table.increments('id').notNullable().unsigned();
        table.string('url').notNullable();
        table.string('code', 20).unique().notNullable();
        table.integer('hits').notNullable();
    })
}
// dropando table dos links
export async function down(knex: Knex) {
    return knex.schema.dropTable('links')
}