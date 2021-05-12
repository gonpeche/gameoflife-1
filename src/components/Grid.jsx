import React from 'react'

const Grid = ({grid, numCols, setCellStatus}) => {

    return (
        <div style={{
            display: `grid`,
            gridTemplateColumns: `repeat(${numCols}, 20px)`,
            gap: '5px',
            justifyContent: 'center',
        }}>
            {grid.map((row, i) => 
                row.map((col, j) => {

                const cellStatus =  grid[i][j]

                return <div key={`${i}-${j}`} 
                            className={`cell ${cellStatus ? 'live' : 'dead'}`}
                            onClick={()=>setCellStatus(i, j)}/>
                }
            ))}
        </div>
    )
}

export default Grid




