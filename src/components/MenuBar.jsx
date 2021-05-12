import React from 'react'

const MenuBar = ({children, generation}) => {
    return (
       <nav className='navbar'>
           <ul className='generation'>
               Generation: {generation}
           </ul>
           <ul className='navbar-nav'>
               {children}
           </ul>
       </nav>
    )
}

export default MenuBar
