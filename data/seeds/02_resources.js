exports.seed = async function (knex) {

  // Inserts seed entries
  await knex('resources').insert([
    { name: "resource_01", description: 'resource_01_description...' },
    { name: "resource_02", description: 'resource_02_description...' },
    { name: "resource_03", description: 'resource_03_description...' },
    { name: "resource_04", description: 'resource_04_description...' },
    { name: "resource_05", description: 'resource_05_description...' },
  ]);
};
