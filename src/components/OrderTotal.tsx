import { useMemo } from 'react';
import type { OrderItem } from '../types';
import { formatCurrency } from '../helpers';
export default function OrderTotal({ order }: { order: OrderItem[] }) {
    const total = order.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0)
    const subtotal = useMemo(() => {
        return order.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0)
    }, [order]);

    return (
        <div className='bg-gray-100 p-5 rounded-lg mt-5'>
            <h2 className='text-xl font-bold mb-3'>Order Total</h2>
            <p className='text-lg'>Subtotal: {formatCurrency(subtotal)}</p>
            <p className='text-lg'>Total: {formatCurrency(total)}</p>
        </div>
    );
}