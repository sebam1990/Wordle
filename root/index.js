// Global variables

    let tries = 1

    let words = {

        apiWord : "",
        userWord : "",

    }

// DOM Elements

    const btn = document.querySelector("#send")


// Start game

    window.addEventListener("load", function(){

        getWord()

        inputWord()

    })

// Get word from API

    const getWord = () => {

        const api = "https://clientes.api.greenborn.com.ar/public-random-word?c=1&l=5"

        fetch(api)
            .then(response => response.json())
            .then(data => {words.apiWord = data[0].toUpperCase()})

    }

// User input word

    const inputWord = () => {

        let count = 0
        const writeCell = document.querySelector('.active').children

        window.addEventListener("keydown",function(e){

            let letter = e.key.toUpperCase()
            
            writeCell[count].textContent = letter

            words.userWord+=letter
        
            count++

        })

        return writeCell

    }

// Compare words

    btn.addEventListener("click", function(){

        const readCell = inputWord()

        for(i=0;i<5;i++){

            if(words.apiWord.includes(words.userWord[i]) && words.userWord[i] == words.apiWord[i]){

                readCell[i].classList.add("correct")

            }
            else if(words.apiWord.includes(words.userWord[i]) && words.userWord[i] != words.apiWord[i]){

                readCell[i].classList.add("wrongPos")

            }
            else{

                readCell[i].classList.add("error")

            }

        }

    })























