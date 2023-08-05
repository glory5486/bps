const Joi = require("joi");

module.exports = Joi.object({
    nama_satuan: Joi.string().required().trim().messages({
        "string.base": `Nama satuan harus berupa teks`,
        "string.empty": `Nama satuan tidak boleh kosong`,
        "any.required": `Nama satuan tidak boleh kosong`,
    }),
    keterangan: Joi.string().required().trim().messages({
        "string.base": `Keterangan harus berupa teks`,
        "string.empty": `Keterangan tidak boleh kosong`,
        "any.required": `keterangan tidak boleh kosong`,
    }),
});