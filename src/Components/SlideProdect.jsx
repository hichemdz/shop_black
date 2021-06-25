import React from 'react'

function SlideProdect({ title, price, src }) {
    return (
        <div className='shadow-7xl  my-16 transition-all 
        products hover:bg-yellow-500 group px-5  py-10  
        space-y-5  hover:border  hover:border-yellow-500  rounded-lg  hover:shadow-none 
        max-w  mx-auto'>
            <div className='space-y-2'>
                <h3 className='text-white font-black w-48'>{title}</h3>
                <p className='text-yellow-500  text-2xl group-hover:text-gray-600 font-black'>${price}</p>
            </div>

            <div className='fle w-full justify-center'>
                <img
                    width={185}
                    height={194}
                    className='mx-auto  w-48 h-48'
                    src={src}
                />

            </div>

            <div className='w-full flex flex-col lg:flex-row   items-center justify-center space-y-5 lg:space-y-0 lg:space-x-5 '>
                <button className='border w-full  uppercase text-sm font-bold  group-hover:border-gray-600 group-hover:text-gray-600 border-yellow-500 text-yellow-500 rounded-3xl px-5 py-1'>
                    Bey New
                </button>

                <button className='border w-full uppercase text-sm font-bold  border-white text-white rounded-3xl px-5 py-1'>
                    details
                </button>

            </div>
        </div>
    )
}

export default SlideProdect
