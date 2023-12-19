import z from "zod";

export const userLoginSchema = z.object({
  name: z.string().min(1, { message: "El nombre es obligatorio." }),
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
})