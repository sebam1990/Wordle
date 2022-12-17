// Global variables

    let selectedWord

// Start game

    function play() {

        getWord().then((word) => {

            checkLength(word[0])

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

    function checkLength(apiWord) {

        if(apiWord.length !=5) {

            play()

        }
        else {

            selectedWord = apiWord.toUpperCase()

        }

        

    }