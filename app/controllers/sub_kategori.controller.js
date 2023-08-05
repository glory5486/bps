const db = require("../../databases");

const sub_kategori = require("../validations/kategori/sub_kategori.validation");

module.exports = class KategoriController {
    static async getall(req, res) {
        try {
            const { page = 1, limit = 10 } = req.query;

            const kategori = await db("tb_sub_kategori");

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
            const { error, value } = sub_kategori.validate(req.body);
            if (error) {
                return res.boom.badData(error.message);
            }
            await db("tb_sub_kategori").insert(value);
            return res.json({
                success: true,
                message: "Berhasil menambahkan subkategori",
            });
        } catch (error) {
            return res.boom.badImplementation(error);
        }
    }

    static async update(req, res) {
        try {
            const kategori = await db("tb_sub_kategori").where({ id_sub_kategori: req.params.id });
            if (!kategori) {
                return res.boom.badData("Sub Kategori tidak ditemukan");
            }
            const { error, value } = sub_kategori.validate(req.body);
            if (error) {
                return res.boom.badData(error.message);
            }

            await db("tb_sub_kategori").where({ id_sub_kategori: req.params.id }).update(value);
            return res.json({
                success: true,
                message: "Berhasil mengubah subkategori",
            });
        } catch (error) {
            return res.boom.badImplementation(error);
        }
    }

    static async delete(req, res) {
        try {
            const kategori = await db("tb_sub_kategori").where({ id_sub_kategori: req.params.id });
            if (!kategori) {
                return res.boom.badData("Sub Kategori tidak ditemukan");
            }
            await db("tb_sub_kategori").where({ id_sub_kategori: req.params.id }).del();

            return res.json({
                success: true,
                message: "Berhasil menghapus subkategori",
            });
        } catch (error) {
            return res.boom.badImplementation(error);
        }
    }
};