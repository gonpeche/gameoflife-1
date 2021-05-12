import React from 'react'

const MenuBar = ({children, generation}) => {
    return (
        <div className='menuBar'>

            <div className='buttons'>
                {children}
            </div>

            <div className='generation'>
                generacion {generation}
            </div>
        </div>
    )
}

export default MenuBar
