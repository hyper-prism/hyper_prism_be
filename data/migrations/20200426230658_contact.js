
exports.up = function(knex) {
  return knex.schema.createTable('contact', table => {
      table.increments()
      table.string('name').notNullable()
      table.string('email').notNullable()
      table.string('message').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('contact')
};
