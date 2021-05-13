import React from 'react'

const DropdownItem = ({children, callback}) => {
    return (
        <div onClick={()=>callback && callback()} className='dropdown-item'>
            {children}
        </div>



    )
}

export default DropdownItem
