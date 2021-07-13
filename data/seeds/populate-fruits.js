exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('fruits').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('fruits').insert([
        // DO NOT ADD ids
        { fruit_name: 'pear', avg_weight_oz: 1.5 },
        { fruit_name: 'apple', avg_weight_oz: 2.5 },
        { fruit_name: 'pear', avg_weight_oz: 5 }
      ]);
    });
};
