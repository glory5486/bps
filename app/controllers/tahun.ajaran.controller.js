const db = require("../../databases");
const tahunajaranvalidasi = require("../validations/tahun_ajaran/tahun_ajaran.validation");

module.exports = class TahunAjaranController {
    static async getall(req, res) {
        try {
            const { page = 1, limit = 10 } = req.query;

            const tahunajaran = await db("tb_tahun_ajaran");
            return res.json({
                success: true,
                data: tahunajaran,
            });
        } catch (error) {
            return res.boom.badImplementation(error);
        }
    }
    static async create(req, res) {
        try {
            const { error, value } = tahunajaranvalidasi.validate(req.body);
            if (error) {
                return res.boom.badData(error.message);
            }

            await db("tb_tahun_ajaran").insert(value);
            return res.json({
                success: true,
                message: "Berhasil menambahkan tahun ajaran",
            });
        } catch (error) {
            return res.boom.badImplementation(error);
        }
    }
    static async update(req, res) {
        try {
            const tahunajaran = await db("tb_tahun_ajaran").where({ id_tahun_ajarin: req.params.id });
            if (!tahunajaran) {
                return res.boom.badData("Tahun ajaran tidak ditemukan");
            }
            const { error, value } = tahunajaranvalidasi.validate(req.body);
            if (error) {
                return res.boom.badData(error.message);
            }

            await db("tb_tahun_ajaran").where({ id_tahun_ajaran: req.params.id }).update(value);
            return res.json({
                success: true,
                message: "Berhasil mengubah tahun ajaran",
            });
        } catch (error) {
            return res.boom.badImplementation(error);
        }
    }
    static async delete(req, res) {
        try {
            const tahunajaran = await db("tb_tahun_ajaran").where({ id_tahun_ajaran: req.params.id });
            if (!tahunajaran) {
                return res.boom.badData("Tahun ajaran tidak ditemukan");
            }
            await db("tb_tahun_ajaran").where({ id_tahun_ajaran: req.params.id }).del();
            return res.json({
                success: true,
                message: "Berhasil menghapus tahun ajaran",
            });
        } catch (error) {
            return res.boom.badImplementation(error);
        }
    }
};