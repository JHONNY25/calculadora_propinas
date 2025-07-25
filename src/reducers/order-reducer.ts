import type { menuItem, OrderItem } from '../types';

export type OrderActions =
    | { type: 'ADD_ITEM'; payload: { item: menuItem } }
    | { type: 'REMOVE_ITEM'; payload: { item: menuItem['id'] } }
    | { type: 'REMOVE_ITEM'; payload: { item: menuItem['id'] } }
    | { type: 'CLEAR_ORDER' }
    | { type: 'SET_TIP'; payload: { tip: number } }

export type OrderState = {
    order: OrderItem[]
    tip: number
}

export const initialOrderState: OrderState = {
    order: [],
    tip: 0
};

export function orderReducer(state: OrderState, action: OrderActions): OrderState {
    switch (action.type) {
        case 'ADD_ITEM': {
            const existingItem = state.order.find(item => item.id === action.payload.item.id);
            if (existingItem) {
                return {
                    ...state,
                    order: state.order.map(item =>
                        item.id === existingItem.id
                            ? { ...item, quantity: (item.quantity || 1) + 1 }
                            : item
                    )
                };
            } else {
                return {
                    ...state,
                    order: [...state.order, { ...action.payload.item, quantity: 1 }]
                };
            }
        }
        case 'REMOVE_ITEM': {
            return {
                ...state,
                order: state.order.filter(item => item.id !== action.payload.item)
            };
        }
        case 'CLEAR_ORDER': {
            return initialOrderState;
        }
        case 'SET_TIP': {
            return {
                ...state,
                tip: action.payload.tip
            };
        }
        default:
            return state;
    }
}

