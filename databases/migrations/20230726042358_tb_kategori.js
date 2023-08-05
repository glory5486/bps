/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("tb_kategori", (t) => {
        t.increments("id_kategori").primary();
        t.string("nama_kategori").unique().notNullable();
        t.enum("jenis_kategori", ["utama", "sub kategori"]).notNullable();
        t.integer("sub_kategori_id").unsigned();
        t.foreign("sub_kategori_id").references("id_sub_kategori").inTable("tb_sub_kategori").onDelete("CASCADE");
        t.text("desktripsi").notNullable();
        t.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("tb_kategori");
};