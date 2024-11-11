import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import { add,remove } from '../redux/Slices/CartSlice';

const Product = ({post}) => {
    
    const {cart}=useSelector((state)=>state);
    const dispatch = useDispatch();

    const addToCart = ()=>{
        dispatch(add(post));
        toast.success("Item added to cart");
    }

    const removeFromCart = ()=>{
        dispatch(remove(post.id));
        toast.error("Item remove from cart");
    }

  return (
    <div className='flex flex-col items-center justify-between hover:scale-110 transition duration-300 
          ease-in hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] gap-3 p-4 mt-10 ml-5 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
        <div className=''>
          <h2 className=' text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1' >{post.title}</h2>
        </div>
        <div>
          <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>{post.description.split(" ").slice(0,10).join(" ")+ "..."}</p>
        </div>
        <div className=''>
          <img className='  h-[180px]' src={post.image} alt='product image'></img>
        </div>
        <div className=' flex w-full justify-between mt-2'>
            <p className=' text-green-600 font-semibold '>${post.price} </p>

            {
                cart.some((p) => p.id === post.id) ?
                (<button className=' uppercase text-gray-700 border-2 border-gray-700 rounded-full 
                font-semibold text-[12px] px-3 p-1 hover:bg-gray-700 hover:text-white transition
                 duration-300 ease-in' onClick={removeFromCart}>
                    Remove Item
                </button>):
                (<button className=' uppercase text-gray-700 border-2 border-gray-700 rounded-full 
                font-semibold text-[12px] px-3 p-1 hover:bg-gray-700 hover:text-white transition
                 duration-300 ease-in' onClick={addToCart}>
                    Add to cart
                </button>)
            }
            
        </div>
    </div>
  )
}

export default Product