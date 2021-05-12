import React, { useState } from 'react'

const DropdownMenu = ({children}) => {
    const [activeMenu, setActiveMenu] = useState('main') //grid size, draw pattern

    return (
        <div className='dropdown-menu'>
            {children}
        </div>
    )
}

export default DropdownMenu
