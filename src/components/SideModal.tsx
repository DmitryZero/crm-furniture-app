import React from 'react'
import { RouterOutputs } from '~/utils/api';

type ProductType = RouterOutputs["product"]["getAll"][number];
export default function SideModal() {


    
    return (
        <div className='bg-slate-950/75 fixed inset-0'>
            <div className='modal bg-slate-100 text-black w-1/4 h-full p-3'>
                Магазин мебели
            </div>
        </div>
    )
}
