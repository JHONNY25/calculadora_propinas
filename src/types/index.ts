export type menuItem = {
    id: number;
    name: string;
    price: number;
}

export type OrderItem = menuItem & {
    quantity: number
}

export type tips = {
    id: string
    value: number
    label: string
}
