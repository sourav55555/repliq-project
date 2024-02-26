import React, { useEffect, useState } from 'react';

import Sidebar from './components/Sidebar';
import { CircleUserRound, Grab, HandCoins, HandHelping, Menu, MinusCircle, NotebookPen, PlusCircle, QrCode, Search, SquarePen, Timer, Trash2, Truck, XCircle } from 'lucide-react';
import AddCustomer from './components/AddCustomer';
import Products from './components/Products';

const productsList = [
  {
    "shirtName": "Casual Cotton T-Shirt",
    "category": "Casual",
    "price": 19.99,
    "image": "https://img.freepik.com/free-psd/black-open-tshirt-with-round-neck-transparent-background_125540-5402.jpg"
  },
  {
    "shirtName": "Formal Button-down Shirt",
    "category": "Formal",
    "price": 29.99,
    "image": "https://img.freepik.com/free-psd/black-open-tshirt-with-round-neck-transparent-background_125540-5402.jpg"
  },
  {
    "shirtName": "Sports Performance Polo",
    "category": "Sports",
    "price": 24.99,
    "image": "https://image.similarpng.com/very-thumbnail/2021/07/Blue-t-shirt-isolated-on-tranparent-background-PNG.png"
  },
  {
    "shirtName": "Graphic Print Tee",
    "category": "Casual1",
    "price": 22.99,
    "image": "https://img.freepik.com/free-psd/black-open-tshirt-with-round-neck-transparent-background_125540-5402.jpg"
  },
  {
    "shirtName": "Denim Chambray Shirt",
    "category": "Casual2",
    "price": 34.99,
    "image": "https://img.freepik.com/free-psd/black-open-tshirt-with-round-neck-transparent-background_125540-5402.jpg"
  },
  {
    "shirtName": "Casual Cotton T-Shirt",
    "category": "Casual3",
    "price": 19.99,
    "image": "https://image.similarpng.com/very-thumbnail/2021/07/Blue-t-shirt-isolated-on-tranparent-background-PNG.png"
  },
  {
    "shirtName": "Formal Button-down Shirt",
    "category": "Formal1",
    "price": 29.99,
    "image": "https://img.freepik.com/free-psd/black-open-tshirt-with-round-neck-transparent-background_125540-5402.jpg"
  },
  {
    "shirtName": "Sports Performance Polo",
    "category": "Sports1",
    "price": 24.99,
    "image": "https://img.freepik.com/free-psd/black-open-tshirt-with-round-neck-transparent-background_125540-5402.jpg"
  },
  {
    "shirtName": "Graphic Print Tee",
    "category": "Casual7",
    "price": 22.99,
    "image": "https://img.freepik.com/free-psd/black-open-tshirt-with-round-neck-transparent-background_125540-5402.jpg"
  },
  {
    "shirtName": "Denim Chambray Shirt",
    "category": "Casual6",
    "price": 34.99,
    "image": "https://image.similarpng.com/very-thumbnail/2021/07/Blue-t-shirt-isolated-on-tranparent-background-PNG.png"
  },

]

const App = () => {

  const [showSidebar, setShowSidebar] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState([]);
  const [tax, setTax] = useState(25.50);
  const [shipping, setShipping] = useState(5.50);
  const [discount, setDiscount] = useState(10);
  // const [total, setTotal] = useEffect(0);

  const selectProduct = (name, price) => {
    console.log(name, price);
    setSelectedProduct([...selectedProduct, { name, price, quantity: 1 }])
  }
  console.log(selectedProduct);


  const addQuantity = (index, quantity) => {
    const updatedProducts = [...selectedProduct];
    updatedProducts[index].quantity = quantity + 1;
    setSelectedProduct(updatedProducts);
  }
  const removeQuantity = (index, quantity) => {
    if (quantity > 1) {
      const updatedProducts = [...selectedProduct];
      updatedProducts[index].quantity = quantity - 1;
      setSelectedProduct(updatedProducts);
    }
  }

  const deleteItem = (index) => {
    const updatedProducts = [...selectedProduct];
    updatedProducts.splice(index, 1);
    setSelectedProduct(updatedProducts);
  }

  const calculateTotalAmount = () => {
    return selectedProduct.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  }

  const calculateTotalQuantity = () => {
    return selectedProduct.reduce((total, product) => {
      return total + product.quantity;
    }, 0);
  }

  console.log(calculateTotalAmount().toFixed(2));

  return (
    <div className='overflow-x-hidden'>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className='flex items-start min-h-screen'>
        <div className='w-1/2 px-4 py-2 border-r h-screen flex flex-col'>
          <div className='flex-1'>
            <div className='flex justify-around items-center font-semibold text-lg'>
              <Menu className='w-8 cursor-pointer' onClick={() => setShowSidebar(!showSidebar)} />
              <p className='flex items-center px-4 py-2 text-[#176B87] bg-[#EEF5FF] rounded-md gap-4'><NotebookPen /> Note</p>
              <p className='flex items-center px-4 py-2 text-[#176B87] bg-[#EEF5FF] rounded-md gap-4'><Truck /> Shipping</p>
              <p className='flex items-center px-4 py-2 text-[#176B87] bg-[#EEF5FF] rounded-md gap-4'><Timer /> Hold Orders</p>
              <p className='flex items-center px-4 py-2 text-[#176B87] bg-[#EEF5FF] rounded-md gap-4'><PlusCircle /> New Item</p>
            </div>

            {/* add customer  */}
            <AddCustomer />

            {/* cart list */}
            <div className='w-full mt-6'>
              {
                selectedProduct.map((data, index) =>
                  <div key={index} className='flex items-center justify-between gap-3 '>
                    <SquarePen className='text-gray-500 cursor-pointer' />
                    <div className='flex items-center justify-between border p-3 flex-grow font-semibold text-lg text-gray-500 rounded-md'>
                      <p className='w-[40%]'>{data.name}</p>
                      <p>${data.price}</p>
                      <p className='flex items-center gap-4'>

                        <MinusCircle onClick={() => removeQuantity(index, data.quantity)} className='bg-gray-500 text-white rounded-full cursor-pointer' />
                        {data.quantity}
                        <PlusCircle onClick={() => addQuantity(index, data.quantity)} className='bg-gray-500 text-white rounded-full cursor-pointer' /></p>
                      <p className='w-16'>${(data.price * data.quantity).toFixed(2)}</p>
                    </div>
                    <Trash2 onClick={() => deleteItem(index)} className='text-red-400 cursor-pointer' />
                  </div>)
              }

            </div>
          </div>
          <div className='flex-none'>
            <div className='w-[36%] ms-auto mt-10 text-gray-500'>
              <div className='border-t-2 flex justify-between items-center py-2'>
                <p>Sub total</p>
                <p>${calculateTotalAmount().toFixed(2)}</p>
              </div>
              <div className='border-t-2 flex justify-between items-center py-2'>
                <p>TAX</p>
                <p>${tax.toFixed(2)}</p>
              </div>
              <div className='border-t-2 flex justify-between items-center py-2'>
                <p>Shipping</p>
                <p>${shipping.toFixed(2)}</p>
              </div>
              <div className='border-t-2 flex justify-between items-center py-2'>
                <p>Discount on cart</p>
                <p>${discount.toFixed(2)}</p>
              </div>

            </div>
            <div className='flex justify-between items-center bg-primary rounded-md secondary font-semibold p-3'>
              <p>Products Count({calculateTotalQuantity()})</p>
              <p className='flex justify-between w-[36%] text-2xl'>Total 
              <span>${(calculateTotalAmount() + tax + shipping - discount).toFixed(2)}</span></p>
            </div>
            <div className='flex items-center justify-between text-2xl font-medium mt-3 gap-4 '>
              <button className='py-3 px-5 bg-red-200 text-red-500 flex items-center gap-3 rounded-md'>
                <XCircle />
                Cancel
              </button>
              <button className='py-3 px-5 bg-primary secondary flex items-center justify-center gap-3 rounded-md flex-grow'><Grab /> Hold</button>
              <button className='py-3 px-5 bg-primary secondary flex items-center justify-center gap-3 rounded-md flex-grow'><HandHelping />Discount</button>
              <button className='py-3 px-5 bg-primary secondary flex items-center justify-center gap-3 rounded-md flex-grow'> <HandCoins /> Pay Now</button>
            </div>
          </div>
        </div>
        <div className='w-1/2'>
          <div className='flex items-center justify-between py-4 px-8 shadow-md gap-3 text-gray-500 font-semibold'>
            <Search />
            <input className='flex-grow text-lg outline-none' type="text" name="" placeholder='Search Products...' id="" />
            <QrCode />
          </div>

          {/* display products */}
          <Products productsList={productsList} selectProduct={selectProduct} />
        </div>
      </div>
    </div>
  );
};

export default App;