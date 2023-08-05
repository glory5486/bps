/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("tb_satuan", (t) => {
        t.increments("id_satuan").primary();
        t.string("nama_satuan").unique().notNullable();
        t.text("keterangan").notNullable();
        t.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("tb_satuan");
};