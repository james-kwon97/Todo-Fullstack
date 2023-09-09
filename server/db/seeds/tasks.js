export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('tasks').del()

  // Inserts seed entries
  await knex('tasks').insert([
    {
      id: 1,
      description: 'Take out the trash',
      complete: true,
    },
    {
      id: 2,
      description: 'Do the dishes',
      complete: false,
    },
  ])
}
