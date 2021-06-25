import React, { useState } from 'react'
import { ShoppingCartIcon, LoginIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Logo from '../img/logo.svg';
const NavLink = ({ Icon, name = '', link = '/', onClick }) => {


    if (!onClick) {
        return (

            <li >
                <a className={'capitalize hover:font-bold hover:text-yellow-500 font-medium  flex items-center ' + (name.toLowerCase() == 'home' ? 'text-yellow-500 font-black' : '')} href={link} >
                    {name}
                    {Icon && <Icon className='w-6 h-6 ' />}
                </a>
            </li>
        )
    } else {

        return (

            <li >
                <button onClick={onClick} className={'capitalize hover:font-bold hover:text-yellow-500 font-medium  flex items-center ' + (name.toLowerCase() == 'home' ? 'text-yellow-500 font-black' : '')} >
                    {name}
                    {Icon && <Icon className='w-6 h-6 ' />}
                </button>
            </li>
        )

    }

}
const header = () => {

    const [open, setOpen] = useState(false)

    const links = [
        { name: 'home', link: "/" },
        { name: 'catigroies', link: "/" },
        { name: 'about us', link: "/" },
        { name: 'contact us', link: "/" },
    ]
    return (
        <React.Fragment>
            <header className='transiction-ll bg-gray-950 py-5 text-white text-sm font-medium'>
                <nav className='container px-5 mx-auto flex items-center justify-between '>
                    {/* logo */}
                    <a href='/' >
                        <img src={Logo} />
                    </a>
                    {/* menu */}

                    <ul className='hidden md:flex space-x-4 items-center '>
                        {
                            links.map(i => <NavLink key={i.name} link={i.link} name={i.name} />)
                        }
                        <NavLink Icon={LoginIcon} />
                        <NavLink Icon={ShoppingCartIcon} />

                    </ul>

                    <ul className='flex md:hidden items-center space-x-4'>
                     
                        <NavLink Icon={LoginIcon} />
                        <NavLink Icon={ShoppingCartIcon} />
                        <NavLink  onClick={() => setOpen(true)} Icon={MenuIcon} />

                    </ul>

                </nav>
            </header>
            {
                open && (

                    <ul className='bg-gray-950 space-y-4  flex  flex-col text-white items-center justify-center fixed w-full h-full top-0 left-0 z-50'>
                        <button onClick={() => setOpen(false)} className='absolute top-5 hover:text-yellow-500 right-5 w-8 h-8 flex items-center justify-center'>
                            <XIcon />
                        </button>
                        {
                            links.map(i => <NavLink key={i.name} link={i.link} name={i.name} />)
                        }
                    </ul>
                )
            }
        </React.Fragment>
    )
}

export default header
