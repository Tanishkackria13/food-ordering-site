import React from 'react'

export const MenuItem = () => {
    return (
        <div className='bg-back p-4 rouded-lg text-center bg-gray
    hover:bg-wh transition-all hover:shadow-md hover:shadow-bl/25'>
            <div className='text-center'>
                <img src='/pizza.png' className='max-h auto max-h-24 block mx-auto' alt='pizza' height={4} />
            </div>
            <h4 className='font-semibold text-xl my-3 '>Pepperoni Pizza</h4>
            <p className='text-gray-500 text-sm '>Pepperoni is a variety of spicy salami made from cured pork and beef seasoned with paprika and chili peppers</p>
            <button className='bg-primary mt-4 text-white rounded-full px-8 py-2'>
                Add to Cart
            </button>
        </div>
    )
}
