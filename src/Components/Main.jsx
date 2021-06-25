import React from 'react'
import item1 from '../img/item.png'
import item2 from '../img/item2.png'
import item3 from '../img/item3.png'
import item4 from '../img/item4.png'
import item5 from '../img/item5.png'

import { SLider } from '.'
const Main = () => {

    const prodects = [
        {
            title: 'Nike ZoomX Invincible Run Flyknit',
            price: 757,
            src: item1
        },
        {
            title: 'Nike ZoomX Invincible Run Flyknit',
            price: 757,
            src: item2
        },
        {
            title: 'Nike ZoomX Invincible Run Flyknit',
            price: 757,
            src: item3
        },
        {
            title: 'Nike ZoomX Invincible Run Flyknit',
            price: 757,
            src: item4
        },
        {
            title: 'Nike ZoomX Invincible Run Flyknit',
            price: 757,
            src: item5
        },
        {
            title: 'Nike ZoomX Invincible Run Flyknit',
            price: 757,
            src: item1
        },

    ]

    return (
        <main className='w-full   overflow-hidden h-screen'>
        
            
            <SLider prodects={prodects} />
        

        </main>
    )
}

export default Main
