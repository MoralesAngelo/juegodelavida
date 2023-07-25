let board1 = [
    [0, 1, 0], 
    [1, 0, 1], 
    [1, 0, 0]
]


const arrayCounts = (array) => {
    debugger
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            console.log(array[i][j])
            countNeighbors(array, i, j)  
        }
        
    }
}

const countNeighbors = (array, column, row) => {
    let neighBors = 0
    debugger
    for (let i = column -1; i < array.length; i++) {
        if (array[i] === undefined) {
            i++
        }
        for (let j = row -1; j < array[i].length; j++) {
            console.log(neighBors)
            if (array[i][j] === undefined) {
                j++
            }
            
            if (array[i][j] === 1) {
                neighBors++
            }

            
        }
        
    }
}



const playGame = () => {
    console.table(board1);
    arrayCounts(board1);


}


setInterval(() => {
    playGame()
}, 2000);





