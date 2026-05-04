
import { z } from "zod";

export const schema = z.discriminatedUnion("type", [
    // 🟢 PERSONAL
    z.object({
        type: z.literal("personal"),

        firstName: z.string().min(2),
        lastName: z.string().min(2),

        personalEmail: z.string().email(),
        phone: z.string().min(10),

        residentialAddress: z.string().min(5),
        ninNumber: z.string().optional(),

        gender: z.string().optional(),
        dob: z.string().optional(),
        idType: z.string().optional(),

        personalFile: z.any().optional(),
    }),

    // 🟣 BUSINESS
    z.object({
        type: z.literal("business"),

        businessName: z.string().min(2),
        cacRegNo: z.string().min(2),

        phone: z.string().min(10),
        businessEmail: z.string().email(),

        businessAddress: z.string().min(5),
        nimc: z.string().optional(),

        verificationType: z.string().optional(),

        registrationDate: z.string().optional(),

        businessFile: z.any().optional(),
    }),
]);