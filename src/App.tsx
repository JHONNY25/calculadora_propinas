import { menuItems } from './database/db'
import MenuItem from './components/MenuItem'
import './App.css'
import useOrder from './hooks/useOrder'
import OrderContents from './components/OrderContents'  

function App() {

  const { addItemToOrder, order, removeItemFromOrder } = useOrder();

  return (
    <>
      <header className='bg-teal-400 py-5'>
        <h1 className='text-center text-4xl font-black'>Calculadora de Propinas</h1>
      </header>

      <main className='max-w-7xl mx-auto py-20 grid sm:grid-cols-1 md:grid-cols-2 gap-5'>
        <div className='col-span-1 mt-10'>
          <h2 className='text-2xl font-bold mb-5'>Menú</h2>
            {menuItems.map(item => (
              <MenuItem key={item.id} item={item} addItemToOrder={addItemToOrder} />
            ))}
        </div>

        <div className='col-span-1 mt-10'>
          <h2 className='text-2xl font-bold mb-5'>Calculadora de Propinas</h2>
          
          <p className='text-gray-600'>Funcionalidad de la calculadora aún no implementada.</p>
          <div className='border border-dashed border-slate-300 p-5 rounded-lg mt-5  '>
            <h3 className='text-xl font-bold'>Orden</h3>
            {
              order.length > 0 ?
                <OrderContents order={order} removeItemFromOrder={removeItemFromOrder} />
              : <p className='text-gray-600'>No hay artículos en la orden.</p>
            }
          </div>
          <div className='mt-5 text-xl font-bold'>
            Total: ${order.reduce((total, item) => total + (item.price * item.quantity), 0)}
          </div>
        </div>
      </main>
    </>
  )
}

export default App
