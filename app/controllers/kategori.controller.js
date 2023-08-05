const db = require("../../databases");
const kategorivalidasi = require("../validations/kategori/kategori.validation");

module.exports = class KategoriController {
    static async getall(req, res) {
        try {
            const { page = 1, limit = 10 } = req.query;

            const kategori = await db("tb_kategori as k").leftJoin("tb_sub_kategori as s", "s.sub_kategori_id", "k.id_kategori");

            return res.json({
                success: true,
                data: kategori,
            });
        } catch (error) {
            return res.boom.badImplementation(error);
        }
    }
    static async create(req, res) {
        try {
            const { error, value } = kategorivalidasi.validate(req.body);
            if (error) {
                return res.boom.badData(error.message);
            }
            let jenis_kategori = value.jenis_kategori;
            if (jenis_kategori.toLowerCase() === "sub kategori") {
                const sub_kategori = await db("tb_sub_kategori").where({ id_sub_kategori: value.sub_kategori_id }).first();
                if (!sub_kategori) {
                    return res.boom.badData("Sub kategori tidak ditemukan");
                }
                await db("tb_kategori").insert(value);
                return res.json({
                    success: true,
                    message: "Berhasil menambahkan kategori",
                });
            } else {
                await db("tb_kategori").insert({
                    nama_kategori: value.nama_kategori,
                    jenis_kategori: value.jenis_kategori,
                    deskripsi: value.deskripsi,
                });

                return res.json({
                    success: true,
                    message: "Berhasil menambahkan kategori",
                });
            }
        } catch (error) {
            return res.boom.badImplementation(error);
        }
    }
    static async update(req, res) {
        try {
            const { error, value } = kategorivalidasi.validate(req.body);
            if (error) {
                return res.boom.badData(error.message);
            }
            const kategori = await db("tb_kategori").where({ id: req.params.id });
            if (!kategori) {
                return res.boom.badData("Kategori tidak ditemukan");
            }
            let jenis_kategori = value.jenis_kategori;
            if (jenis_kategori.toLowerCase() === "sub kategori") {
                const sub_kategori = await db("tb_sub_kategori").where({ id_sub_kategori: value.sub_kategori_id }).first();
                if (!sub_kategori) {
                    return res.boom.badData("Sub kategori tidak ditemukan");
                }
                await db("tb_kategori").where({ id: req.params.id }).update(value);
            } else {
                await db("tb_kategori").where({ id: req.params.id }).update({
                    nama_kategori: value.nama_kategori,
                    jenis_kategori: value.jenis_kategori,
                    deskripsi: value.deskripsi,
                });
            }

            return res.json({
                success: true,
                message: "Berhasil mengubah kategori",
            });
        } catch (error) {
            return res.boom.badImplementation(error);
        }
    }
    static async delete(req, res) {
        try {
            const kategori = await db("tb_kategori").where({ id: req.params.id });
            if (!kategori) {
                return res.boom.badData("Kategori tidak ditemukan");
            }
            await db("tb_kategori").where({ id: req.params.id }).del();
            return res.json({
                success: true,
                message: "Berhasil menghapus kategori",
            });
        } catch (error) {
            return res.boom.badImplementation(error);
        }
    }
};