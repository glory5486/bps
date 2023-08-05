const Joi = require("joi");

module.exports = Joi.object({
    name: Joi.string().required().trim().messages({
        "string.base": "Nama harus berupa string",
        "string.empty": "Nama tidak boleh kosong",
        "any.required": "Nama tidak boleh kosong",
    }),
    email: Joi.string().email().required().trim().messages({
        "string.base": "Email harus berupa string",
        "string.empty": "Email tidak boleh kosong",
        "string.email": "Email tidak valid",
        "any.required": "Email tidak boleh kosong",
    }),
    password: Joi.string().min(8).max(10).required().trim().messages({
        "string.base": "Password harus berupa string",
        "string.empty": "Password tidak boleh kosong",
        "string.min": "Password minimal 8 karakter",
        "string.max": "Password maksimal 10 karakter",
        "any.required": "Password tidak boleh kosong",
    }),
});