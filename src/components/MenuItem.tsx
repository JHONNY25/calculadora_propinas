import type { menuItem } from '../types'

type MenuItemProps = {
    item: menuItem;
    addItemToOrder: (item: menuItem) => void;
}
export default function MenuItem({ item, addItemToOrder }: MenuItemProps) {

    return (
        <button onClick={() => addItemToOrder(item)} className='w-full bg-teal-500 text-white py-3 px-5 rounded-lg mb-3 hover:bg-teal-600 transition-colors'>
            <div className='flex justify-between items-center'>
                <p className='mr-3'> {item.name}</p>
                <p className='font-black'>${item.price}</p>
            </div>
        </button>       
    )
}
