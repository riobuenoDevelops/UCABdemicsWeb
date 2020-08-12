const joi = require('joi');
const { competenciaIdSchema } = require('./competencia');
const { contenidoIdSchema } = require('./contenidoProgramatico');

const carreraIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

const nombreSchema = joi.string().min(10).max(80);
const competenciasSchema = joi.array().items(competenciaIdSchema).sparse();
const asignaturasSchema = joi.array().items(contenidoIdSchema).sparse();

const createCarrera = joi.object({
  nombre: nombreSchema.required(),
  competencias: competenciasSchema.required(),
  asignaturas: asignaturasSchema.required(),
});

const updateCarrera = joi.object({
  nombre: nombreSchema,
  competencias: competenciasSchema,
  asignaturas: asignaturasSchema,
});

module.exports = {
  carreraIdSchema,
  createCarrera,
  updateCarrera,
};
