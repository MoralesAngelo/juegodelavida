
let arrays = [
    [1, 1, 0], 
    [1, 0, 1], 
    [1, 0, 0]
]

let newArrays = [ [], [], [] ]

const arrayCounts = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            countNeighbors(array, i, j)  
        }
        
    }
}

const countNeighbors = (array, column, row) => {
    let neighBors = 0

    for (let i = column -1;  i < column + 2 && i < array.length; i++) {
        if (array[i] === undefined) {
            i++
        }


        for (let j = row -1;  j < row + 2; j++) {

            if (array[i][j] === undefined) {
                j++
            }
            if (array[i][j] === 1) {
                neighBors++
            }

        }

        
    }    
    
    if (array[column][row] === 1) {
            neighBors--
        }
    
    liveOrDead(neighBors, column, row);
};





const liveOrDead = (neighBors, column, row) => {



        if (neighBors < 2 || neighBors > 3) {
            newArrays[column][row]=0;
        }
    
        if (neighBors > 1 && neighBors < 4) {
            newArrays[column][row] = 1;
        }
        return;
}

        
        
            





const playGame = () => {
    console.table(arrays);
    arrayCounts(arrays);
    arrays = newArrays;
    newArrays = [ [0,0,0],[0,0,0],[0,0,0] ];


}


setInterval(() => {
    playGame()
}, 2000);


