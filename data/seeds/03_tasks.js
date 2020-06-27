exports.seed = async function (knex) {

  // Inserts seed entries
  await knex('tasks').insert([
    { description: 'task_01_description...', notes: "task_01_notes", project_id: 1 },
    { description: 'task_02_description...', notes: "task_02_notes", project_id: 1 },
    { description: 'task_03_description...', notes: "task_03_notes", project_id: 1 },
    { description: 'task_04_description...', notes: "task_04_notes", project_id: 2 },
    { description: 'task_05_description...', notes: "task_05_notes", project_id: 2 },
  ]);
};
