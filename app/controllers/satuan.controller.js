const db = require("../../databases");
const satuanvalidasi = require("../validations/satuan.validation");

module.exports = class SatuanController {
    static async getall(req, res) {
        try {
            const { page = 1, limit = 10 } = req.query;

            const satuan = await db("tb_satuan").select("nama_satuan");

            return res.json({
                success: true,
                data: satuan,
            });
        } catch (error) {
            return res.boom.badImplementation(error);
        }
    }
    static async create(req, res) {
        try {
            const { error, value } = satuanvalidasi.validate(req.body);
            if (error) {
                return res.boom.badData(error.message);
            }

            await db("tb_satuan").insert(value);
            return res.json({
                success: true,
                message: "Berhasil menambahkan satuan",
            });
        } catch (error) {
            return res.boom.badImplementation(error);
        }
    }
    static async update(req, res) {
        try {
            const satuan = await db("tb_satuan").where({ id_satuan: req.params.id });
            if (!satuan) {
                return res.boom.badData("Satuan tidak ditemukan");
            }
            const { error, value } = satuanvalidasi.validate(req.body);
            if (error) {
                return res.boom.badData(error.message);
            }

            await db("tb_satuan").where({ id_satuan: req.params.id }).update(value);
            return res.json({
                success: true,
                message: "Berhasil mengubah satuan",
            });
        } catch (error) {
            return res.boom.badImplementation(error);
        }
    }
    static async delete(req, res) {
        try {
            const satuan = await db("tb_satuan").where({ id_satuan: req.params.id });
            if (!satuan) {
                return res.boom.badData("Satuan tidak ditemukan");
            }
            await db("tb_satuan").where({ id_satuan: req.params.id }).del();
            return res.json({
                success: true,
                message: "Berhasil menghapus satuan",
            });
        } catch (error) {
            return res.boom.badImplementation(error);
        }
    }
};