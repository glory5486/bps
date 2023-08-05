const Joi = require("joi");

module.exports = Joi.object({
    nama_sub_kategori: Joi.string().required().trim().messages({
        "string.base": `Nama sub kategori harus berupa teks`,
        "string.empty": `Nama sub kategori tidak boleh kosong`,
        "any.required": `Nama sub kategori tidak boleh kosong`,
    }),
});