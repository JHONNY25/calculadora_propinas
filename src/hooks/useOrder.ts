import { useState } from 'react';
import type { menuItem, OrderItem } from '../types';

export default function useOrder(){
    const [order, setOrder] = useState<OrderItem[]>([]);
    
    const addItemToOrder = (item: menuItem) => {
        const existingItem = order.find(orderItem => orderItem.id === item.id)
        if (existingItem) { 
            // If the item already exists in the order, increase its quantity
            setOrder(prevOrder => 
                prevOrder.map(orderItem => 
                    orderItem.id === item.id 
                        ? { ...orderItem, quantity: (orderItem.quantity || 1) + 1 } 
                        : orderItem 
                )
            );
            return;
        }else{
            const newItem = { ...item, quantity: 1 }
            setOrder([...order, newItem])
        }
    };
    
    const removeItemFromOrder = (itemId: menuItem['id']) => {
        setOrder(prevOrder => prevOrder.filter(item => item.id !== itemId));
    };
    
    const clearOrder = () => {
        setOrder([]);
    };
    
    return {
        order,
        addItemToOrder,
        removeItemFromOrder,
        clearOrder
    };
}