exports.up = function(knex) {
  return knex.schema.createTable('fruits', table => {})
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('fruits')
};
