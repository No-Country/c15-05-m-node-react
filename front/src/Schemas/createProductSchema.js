import * as z from "zod";

export const createProductSchema = z.object({
  name: z.string().min(5, { message: "Es necesario nombre del producto" }),
  description: z
    .string()
    .min(1, { message: "El Producto debe incluir una descripción." }),
  imagen: z.string().min(1, {
    message: "La imagen del producto es necesaria.",
  }),
  category: z.array([z.string()], {
    message: "La 'categoría' no pueden repetirse.",
  }),
  currency: z.enum([
    "CAD",
    "USD",
    "ARS",
    "CLP",
    "COP",
    "PEN",
    "BRL",
    "VES",
    "GTQ",
    "NIO",
    "HNL",
    "CRC",
    "PAB",
    "BZD",
    "BSD",
    "BBD",
    "JMD",
    "XCD",
    "HTG",
  ], {
    message:
      "Debe seleccionar un tipo de moneda.",
  }),
  price: z
    .number( {
        message: "El precio debe ser un número distinto de cero.",
      }),
   
  quantity: z
    .number( {
        message: "La cantidad debe ser un número distinto de cero.",
      })

});

