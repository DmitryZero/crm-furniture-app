import type { Category, Prisma } from '@prisma/client'
import { input, z } from 'zod'
import { prisma } from '../db'
import Result from '~/utils/ResultType'
import { NextApiRequest, NextApiResponse } from 'next'

type CategoryCreate = Prisma.CategoryGetPayload<{
    select: {
        categoryName: true,
        elmaId: true,
        parentCategoryId: true,
    }
}>

const categoryCreateScheme = z.object({
    elmaId: z.string().length(36),
    categoryName: z.string(),
    parentCategoryId: z.number().nullable()
}).strict() satisfies z.ZodType<CategoryCreate>

const CategoryController = {
    async createCategory(req: NextApiRequest, res: NextApiResponse) {   
        const item = req.body;
        const result = categoryCreateScheme.safeParse(item);
        if (!result.success) {
           res.send({result: false, error: result.error.message});
        } 
        else {
            try {
                const item = await prisma.category.create({data: {
                    elmaId: result.data.elmaId,
                    categoryName: result.data.categoryName,
                    parentCategoryId: result.data.parentCategoryId ? result.data.parentCategoryId : null
                }});     
                res.send({result: true, data: item});           
            } catch (error) {
                res.send({result: false, error:  "ERROR: " + error});
            }
        }
    }     
}

export default CategoryController;