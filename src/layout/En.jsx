import React from 'react';
import {Header} from '../Components/';
const En = ({ children,links }) => {
    return (
        <div className='min-h-screen bg-gray-95 relative'>
            <Header links={links} />
            {children}
        </div>
    )
}

export default En
