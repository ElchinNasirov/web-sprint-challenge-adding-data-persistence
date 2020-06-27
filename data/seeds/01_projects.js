exports.seed = async function (knex) {

  // Inserts seed entries
  await knex('projects').insert([
    { name: "project_01", description: 'project_01_description...' },
    { name: "project_02", description: 'project_02_description...' },
  ]);
};
