/*let count = 0

window.addEventListener("keydown",function(e){

    let letter = e.key.toUpperCase()

    let cell = document.querySelectorAll("#row1 p")

    //console.log(letter);
    //console.log(cell[count]);

    cell[count].textContent = letter

    count++

})*/

function inputWord() {

    let count = 0

    window.addEventListener("keydown",function(e){
    
        let letter = e.key.toUpperCase()
    
        let cell = document.querySelectorAll("#row1 p")
    
        //console.log(letter);
        //console.log(cell[count]);
    
        cell[count].textContent = letter
    
        count++
    
    })

}

inputWord()