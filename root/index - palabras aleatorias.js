// Get word from API

    function getWord() {

        const api = "https://palabras-aleatorias-public-api.herokuapp.com/random"

        fetch(api)

            .then(response => response.json())
            //.then(data => printWord(data.body.Word))
            .then(data => {

                let word = data.body.word

                do{

                    

                }
                while(word.length == 5)



            })

    }

// Print word in HTML

    function printWord(word) {

        if(word.length == 5) {

            upperWord = word.toUpperCase()

            console.log(upperWord.split(""));

        }
        else{

            console.log("Buscar de nuevo");
            getWord()

        }

    }

    getWord()