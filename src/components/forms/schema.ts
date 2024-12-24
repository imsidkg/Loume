import {z} from 'zod'
export const workspaceSchema = z.object({
    name : z.string().min(1, {message : "Name field cannot be empty"})
})