import * as z from "zod";

export const registerSchema = z.object({
    name: z.string().min(5, { message: "Es necesario nombre completo" }),
    email: z
      .string()
      .email({ message: "El correo electrónico no es válido." })
      .min(1, { message: "El correo electrónico es obligatorio." }),
    password: z
      .string()
      .min(7, {
        message:
          "La contraseña debe tener al menos 7 caracteres y contener al menos una letra mayúscula.",
      })
      .regex(/^(?=.*[A-Z]).{7,}$/, {
        message:
          "La contraseña debe tener al menos 7 caracteres y contener al menos una letra mayúscula.",
      }),
  });
