import React, { useState, useEffect, useCallback, useRef } from 'react'

import './styles/GameOfLife.css'

// Entiendo que los helpers se utilizan cuando mas de uncomponente necesita de la logica.
// En este caso decidi poner la funcion de crear grilla afuera para que este componente
// quede mas prolijo

import { createGrid } from './utils/grid.helpers'

import { Grid, MenuBar, MenuButton } from './components'

import  produce  from 'immer'

import { useInterval } from './hooks/useInterval'

function GameOfLife() {

  // GRILLA INICIAL

  const [initialGrid, setInitialGrid] = useState({
    numRows: 30,
    numCols: 50,
    pattern: 'DEFAULT'
  })

  const { numRows, numCols, pattern } = initialGrid

  const [grid, setGrid] = useState(() =>
    createGrid(numRows, numCols, pattern)
  )
  
  const [generation, setGeneration] = useState(1)

  const [isRunning, setIsRunning] = useState(false)

  const isRunningRef = useRef(isRunning)
  isRunningRef.current = isRunning

  // FUNCTIONS


  // Funcion que setea el proximo estado de la celula
  // Al ser usada tanto en cada interval como al hacerle click a una celula,
  // necesito que actue distinto dependiendo de si le paso una cantidad de vecinos o no

  const setCellStatus = (row, col, neighboursCount = null) => {
    const updatedGrid = produce(grid, draftGrid => {

      if(!neighboursCount) {
        draftGrid[row][col] = grid[row][col] ? 0 : 1
      }
      else {
        
      }
      
    })

    setGrid(()=>updatedGrid)
   
  }

  const countNeighbours = (row, col) => {
    
    const topRow = row - 1 < 0 ? numRows - 1 : row - 1
    const bottomRow = row + 1 === numRows ? 0 : row + 1
    const leftCol = col - 1 < 0 ? numCols - 1 : col - 1
    const rightCol = col + 1 === numCols ? 0 : col + 1

    const neighbours = 
      grid[topRow][leftCol] +
      grid[topRow][col] +
      grid[topRow][rightCol] + 
      grid[row][leftCol] +
      grid[row][rightCol] +
      grid[bottomRow][leftCol] +
      grid[bottomRow][col] +
      grid[bottomRow][rightCol]

    return neighbours;
  }
  

  // const handleStep = useCallback(() => {
    // if(!isRunningRef.current) 
    //   return
  const handleStep = () => {

  
      const updatedGrid = produce(grid, draftGrid => {
        
        for (let i = 0; i < numRows; i++) {
          for (let j = 0; j < numCols; j++) {
            
            const cellNeighboursCount = countNeighbours(i, j)
            
            // celula muerta y tres vecinas vivas, nace
            if(!draftGrid[i][j] && cellNeighboursCount === 3) {
              draftGrid[i][j] = 1
              continue
            }
            
            // celula viva y dos o tres vecinas vivas, vive
            if(draftGrid[i][j] && [2, 3].includes(cellNeighboursCount)) {
              continue
            }

            // celula viva y menos de dos vecinas vivas, muere
            if(draftGrid[i][j] && cellNeighboursCount < 2) {
              draftGrid[i][j] = 0
              continue
            }

            // celula viva y mas de tres vecinas vivas, muere
            if(draftGrid[i][j] && cellNeighboursCount > 3) {
              draftGrid[i][j] = 0
              continue
            }
          }
        }
    })
    setGrid(updatedGrid)
  }
  // }, [])
  
  const gameEvents = () => {
    
    // setTimeout(handleStep, 300);
    setGeneration(gen => gen + 1)

  }
  
  

  return (
    <div className='gameOfLife'>
      <div className='wrapper'>

        <MenuBar generation={generation}>

          <MenuButton onClick={handleStep} name={'Iniciar'} />
          <MenuButton onClick={()=> setIsRunning(()=>false)}name={'Detener'} />
          <MenuButton onClick={()=> setGrid(()=> createGrid(numRows, numCols, 'DEFAULT'))} name={'Reiniciar'} />
          <MenuButton onClick={()=> setGrid(()=> createGrid(numRows, numCols, 'RANDOM'))} name={'Random'} />

        </MenuBar>

        <Grid setCellStatus={setCellStatus} grid={grid} numCols={numCols} />

      </div>
    </div>
  )
}

export default GameOfLife
