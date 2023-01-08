// Global variables

    let tries = 1

// User input word

    const userWord = (() => {

        let inputWord = ""
        let count = 0
        const writeCell = document.querySelector('.active').children

        function input(e){

            const letter = e.key.toUpperCase()
            const keyCode = e.code

            if(keyCode.includes("Key")){

                writeCell[count].textContent = letter

                inputWord+=letter
            
                count++

            }
            else if(keyCode == "Backspace"){

                writeCell[count-1].textContent = ""

                inputWord = inputWord.slice(0,-1)

                count--

            }

        }

        function getWord(){

            return inputWord

        }

        return {input,getWord}

    })()

// Compare words

    const compareWords = () => {

        for(i=0;i<5;i++){

            if(apiWord.includes(inputWord[i]) && inputWord[i] == apiWord[i]){

                readCell[i].classList.add("correct")

            }
            else if(apiWord.includes(inputWord[i]) && inputWord[i] != apiWord[i]){

                readCell[i].classList.add("wrongPos")

            }
            else{

                readCell[i].classList.add("error")

            }

        }

    }

// Events

    // Start game
        
        window.addEventListener("load", function(){

            //getWord()

        })

    // Allow writing

        window.addEventListener("keydown",userWord.input)

    // Capture and compare words values

        const btn = document.querySelector("#send")

        btn.addEventListener("click",compareWords)























