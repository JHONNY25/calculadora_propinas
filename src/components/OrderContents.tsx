import type { OrderItem } from '../types';

type OrderContentsProps = {
    order: OrderItem[];
    removeItemFromOrder: (itemId: OrderItem['id']) => void;
}
export default function OrderContents({order,removeItemFromOrder}: OrderContentsProps) {
    return (
        <div className='col-span-1 mt-10'>
            <ul>
                  {order.map(item => (
                    <li key={item.id} className='flex justify-between mb-2'>
                      <span>{item.quantity}</span>
                      <span>{item.name}</span>
                      <span>${item.price}</span>
                      <span className='bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors' 
                      onClick={()=> removeItemFromOrder(item.id)}>X</span>
                    </li>
                  ))}
            </ul>
        </div>
    );
}