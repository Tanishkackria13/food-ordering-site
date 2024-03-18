import React from 'react'
import Image from 'next/image'
import { Right } from '../icons/Right'
export const Hero = () => {
    return (
        <section className='hero ' >
            <div className='py-12 '>
                <h1 className='text-4xl font-semibold '>
                    Everything <br />
                    is better<br />
                    with good&nbsp;
                    <span className='text-primary' >
                        Food
                    </span>
                </h1>
                <p className='my-4 text-gray-500 text-sm'>Food make you feel good and completed</p>
                <div className='flex gap-4 text-sm'>
                    <button className='bg-primary flex items-center gap-2 uppercase text-white px-4 py-2 rounded-full'>
                        Order now
                        <Right />
                    </button>
                    <button className='flex gap-2 py-2  text-gray-600 font-semibold'>
                        Learn More
                        <Right />
                    </button>
                </div>
            </div>
            <div className='relative'>
                <Image src={'/pizza.png'} layout={'fill'} objectFit={'contain'} alt={'pizza'}></Image>

            </div>
        </section>
    )
}
