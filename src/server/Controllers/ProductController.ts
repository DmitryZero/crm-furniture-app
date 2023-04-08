import type { Product, Prisma } from '@prisma/client'
import { input, z } from 'zod'
import { prisma } from '../db'
import Result from '~/utils/ResultType'

type ProductCreate = Prisma.ProductGetPayload<{
    select: {
        vendorCode: true,
        weight: true,
        size: true,
        productName: true,
        productImg: true,
        elmaId: true,
        price: true,
        categoryId: true,
        description: true
    }
}>

const productCreateScheme = z.object({
    vendorCode: z.string(),
    weight: z.string(),
    size: z.string(),
    productName: z.string(),
    productImg: z.string(),
    elmaId: z.string().length(36),
    price: z.number(),
    categoryId: z.number(),
    description: z.string()
}).strict() satisfies z.ZodType<ProductCreate>

const ProductController = {
    createProduct: async function(item: any): Promise<Result<Product>> {
        const result = productCreateScheme.safeParse(item);
        if (!result.success) return { result: false, error: result.error.message };
        else {
            try {
                const dt = result.data;
                const item = await prisma.product.create({
                    data: {
                        vendorCode: dt.vendorCode,
                        weight: dt.weight,
                        size: dt.size,
                        productName: dt.productName,
                        productImg: dt.productImg,
                        elmaId: dt.elmaId,
                        price: dt.price,
                        categoryId: dt.categoryId,
                        description: dt.description
                    }
                });
                return { result: true, data: item };
            } catch (error) {
                return { result: false, error: "ERROR: " + error };
            }
        }
    },  
    
    getAll: async function(): Promise<Result<Product[]>> {
        const items = await prisma.product.findMany();
        return { result: true, data: items };
    }
}

export default ProductController;