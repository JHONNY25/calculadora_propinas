import { useMemo } from 'react';
import type { OrderItem } from '../types';
import { formatCurrency } from '../helpers';
export default function OrderTotal({ order, tip }: { order: OrderItem[],tip: number }) {
    const subtotal = useMemo(() => {
        return order.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0)
    }, [order]);
    
    const tipAmount = useMemo(() => {
        return subtotal * tip;
    }, [order, tip]);

    const total = order.reduce((sum, item) => sum + (item.price * (item.quantity || 1) + tipAmount), 0)

    return (
        <div className='bg-gray-100 p-5 rounded-lg mt-5'>
            <h2 className='text-xl font-bold mb-3'>Order Total</h2>
            <p className='text-lg'>Subtotal: {formatCurrency(subtotal)}</p>
            <p className='text-lg'>Propinas: {formatCurrency(tipAmount)}</p>
            <p className='text-lg'>Total: {formatCurrency(total)}</p>

            <button className='w-full bg-teal-500 text-white py-3 px-5 rounded-lg mt-3 hover:bg-teal-600 transition-colors'>
                <span className='bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition-colors'>
                    Pagar | {formatCurrency(total)}
                </span>
            </button>
        </div>
    );
}