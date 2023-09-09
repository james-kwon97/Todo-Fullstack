export async function up(knex) {
  return knex.schema.createTable('tasks', (table) => {
    table.increments('id')
    table.string('description')
    table.boolean('complete')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('tasks')
}
