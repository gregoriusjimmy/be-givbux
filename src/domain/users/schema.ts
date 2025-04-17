import { z } from 'zod'

export const createUserSchema = {
  body: z.object({
    fullName: z.string().max(200, 'fullName must be less than 200 characters'),
    email: z.string().email(),
    phoneNumber: z.string().max(20),
    hasDownloadedApp: z.boolean(),
  }),
}
export type TCreateUserSchema = z.infer<typeof createUserSchema.body>
