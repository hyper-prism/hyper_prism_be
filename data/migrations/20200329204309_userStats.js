
exports.up = function(knex) {
  return knex.schema.createTable('userStats', table => {
      table.increments()
      table.integer('user_id')
           .unsigned()
           .references('id')
           .inTable('users')
           .onUpdate('CASCADE')
           .onDelete('CASCADE')

      table.integer('score')
      table.integer('rounds')
      table.integer('turns')
      table.string('awards')
      table.string('date')
      table.string('rank')

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('userStats')
};
