const Joi = require("joi");

module.exports = Joi.object({
    judul: Joi.string().required().trim().messages({
        "string.base": `Judul harus berupa teks`,
        "string.empty": `Judul tidak boleh kosong`,
        "any.required": `Judul tidak boleh kosong`,
    }),
    dimulai: Joi.date().required().messages({
        "date.base": `Tanggal dimulai harus berupa tanggal`,
        "date.empty": `Tanggal dimulai tidak boleh kosong`,
        "any.required": `Tanggal dimulai tidak boleh kosong`,
    }),
    berakhir: Joi.date().required().messages({
        "date.base": `Tanggal berakhir harus berupa tanggal`,
        "date.empty": `Tanggal berakhir tidak boleh kosong`,
        "any.required": `Tanggal berakhir tidak boleh kosong`,
    }),
});