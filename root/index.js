// Global variables

    let tries = 1

// Get word from API

    const apiWord = (() => {

        let selectedWord

        function fetchApi(){

            const api = "https://clientes.api.greenborn.com.ar/public-random-word?c=1&l=5"

            fetch(api)
                .then(response => response.json())
                .then(data => {selectedWord = data[0].toUpperCase()})

        }

        function checkLength(){

            if(selectedWord.length != 5){

                fetchApi()

            }

        }

        function replaceChars(){

            const regex = /["Á"|"É"|"Í"|"Ó"|"Ú"|]/g
            const accent = selectedWord.match(regex)
            const index = selectedWord.indexOf(accent)

            if(accent != null){

                switch(selectedWord[index]){

                    case "Á": selectedWord = selectedWord.replace(selectedWord[index],"A")
                    break
                    case "É": selectedWord = selectedWord.replace(selectedWord[index],"E")
                    break
                    case "Í": selectedWord = selectedWord.replace(selectedWord[index],"I")
                    break
                    case "Ó": selectedWord = selectedWord.replace(selectedWord[index],"O")
                    break
                    case "Ú": selectedWord = selectedWord.replace(selectedWord[index],"U")
                    break
                    default: console.log("Palabra sin accents");
    
                }

            }

        }

        function getWord(){

            return selectedWord

        }

        return{fetchApi,checkLength,replaceChars,getWord}

    })()

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























