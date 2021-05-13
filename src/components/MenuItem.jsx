import React, { useState } from 'react'

const MenuItem = ({ children, icon, name, callback }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <li className="menu-item">
            <a href="#" 
               className="menu-button" 
               onClick={() => {
                setIsOpen(!isOpen); 
                //
                console.log(312312312)
                callback && callback()}
            }>
                {icon || name}

            </a>

            {isOpen && children}

        </li>
    )
}

export default MenuItem
