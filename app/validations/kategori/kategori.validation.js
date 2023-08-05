const Joi = require("joi");

module.exports = Joi.object({
    nama_kategori: Joi.string().required().trim().messages({
        "string.base": `Nama kategori harus berupa teks`,
        "string.empty": `Nama kategori tidak boleh kosong`,
        "any.required": `Nama kategori tidak boleh kosong`,
    }),
    jenis_kategori: Joi.valid("utama", "sub kategori").required().messages({
        "any.only": `Jenis kategori harus berupa utama atau sub kategori`,
        "any.required": `Jenis kategori tidak boleh kosong`,
    }),
    sub_kategori_id: Joi.number().integer(),
    deskripsi: Joi.string().required().trim().messages({
        "string.base": `Deskripsi harus berupa teks`,
        "string.empty": `Deskripsi tidak boleh kosong`,
        "any.required": `Deskripsi tidak boleh kosong`,
    }),
});