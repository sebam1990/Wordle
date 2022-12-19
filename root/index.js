// Global variables

    let apiWord
    let userWord

// Start game

    function play() {

        getWord().then((word) => {

            checkLength(word[0])

            inputWord()

        })

    }

// Get word from API

    const getWord = () => {

        const api = "https://clientes.api.greenborn.com.ar/public-random-word?c=1&l=5"

        return new Promise((resolve, reject) => {

            fetch(api)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error))

        })

    }

// Check length for word

    function checkLength(selectedWord) {

        if(selectedWord.length !=5) {

            play()

        }
        else {

            apiWord = selectedWord.toUpperCase()

        }

        

    }

// User input word

function inputWord() {

    let count = 0

    window.addEventListener("keydown",function(e){
    
        let letter = e.key.toUpperCase()
    
        let cell = document.querySelectorAll("#row1 p")
    
        cell[count].textContent = letter
    
        count++
    
    })

}