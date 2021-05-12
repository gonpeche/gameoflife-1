import React from 'react'

const MenuButton = ({name, onClick}) => {
    return (
        <div className='menuButton' onClick={()=>onClick()}>
            {name}
        </div>
    )
}

export default MenuButton
