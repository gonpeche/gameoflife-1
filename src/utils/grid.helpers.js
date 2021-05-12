
// Crea la grilla de acuerdo a las filas y columnas pasadas por parametro
// Dependiendo del pattern (RANDOM, DEFAULT), setea las celulas iniciales
// como vivas o muertas

export const createGrid = (numRows, numCols, pattern) => {
    const rows = []

    for (let i = 0; i < numRows; i++){
      rows[i] = Array.from(Array(numCols), () => setCellStatus(pattern))
    }
    return rows
  }
  
export const setCellStatus = pattern => {
    switch(pattern) {
      case 'RANDOM': 
        return Math.round(Math.random())
      case 'DEFAULT':
        return 0
    }
  }

  