exports.up = function(knex, Promise) {
  return knex.schema.table('cards', function (table) {
    table.string('labels')
      .defaultTo(null)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('cards', function (table) {
    table.dropColumn('labels');
  })
};
