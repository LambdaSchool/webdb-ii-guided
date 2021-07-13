exports.seed = function (knex) {
  // Deletes ALL existing entries and resets the primary keys
  return knex('fruits').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('fruits').insert([
        // DO NOT ADD ids
        { fruit_name: 'pear', avg_weight_oz: 1.5, color: 'green', delicious: true },
        { fruit_name: 'apple', avg_weight_oz: 2.5, color: 'red' },
        { fruit_name: 'orange', avg_weight_oz: 5 }
      ]);
    });
};
