import React, { useState } from 'react'

const DropdownMenu = ({children}) => {
    const [activeMenu, setActiveMenu] = useState('main')

    return (
        <div className='dropdown-menu'>
            
            {children}
        </div>
    )
}

export default DropdownMenu
