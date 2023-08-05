/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tb_user').del()
  await knex('tb_user').insert([
    {id_user:require("crypto").randomUUID() , nama_user: "admin1", role:"admin", email:"admin1@gmail.com" , password:require("bcrypt").hashSync("admin123", 10)},
  ]);
};
