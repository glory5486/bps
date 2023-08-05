/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("tb_tahun_ajaran", (t) => {
        t.increments("id_tahun_ajaran").primary();
        t.string("judul").notNullable();
        t.date("dimulai").notNullable();
        t.date("berakhir").notNullable();
        t.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("tb_tahun_ajaran");
};