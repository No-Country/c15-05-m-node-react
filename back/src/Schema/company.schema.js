import { z } from "zod"

export const companySchema = z.object({
    name:z.string({
        required_error:"EL Nombre es requerido"
    }),
    sector:z.string({
        required_error:"EL Nombre es requerido"
    }),
    country:z.string({
        required_error:"EL Nombre es requerido"
    }),
})