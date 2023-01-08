// Get word from API

         const fetchApi = () => {

            const api = "https://clientes.api.greenborn.com.ar/public-random-word?c=1&l=5"

            fetch(api)
                .then(response => response.json())
                .then(data => {
                    
                    const fetchedWord = data[0].toUpperCase()
                    
                    replaceAccents(fetchedWord)
                
                })
            
        }

        const replaceAccents = (fetchedWord) => {

            const regex = /["Á"|"É"|"Í"|"Ó"|"Ú"|]/g
            const accent = fetchedWord.match(regex)
            const index = fetchedWord.indexOf(accent)

            if(accent != null){

                switch(fetchedWord[index]){

                    case "Á": fetchedWord = fetchedWord.replace(fetchedWord[index],"A")
                    break
                    case "É": fetchedWord = fetchedWord.replace(fetchedWord[index],"E")
                    break
                    case "Í": fetchedWord = fetchedWord.replace(fetchedWord[index],"I")
                    break
                    case "Ó": fetchedWord = fetchedWord.replace(fetchedWord[index],"O")
                    break
                    case "Ú": fetchedWord = fetchedWord.replace(fetchedWord[index],"U")
                    break
                    default: console.log("Palabra sin accents");
    
                }

            }

            storageWord(fetchedWord)

        }

        const storageWord = (fetchedWord) => {

            const selectedWord = fetchedWord
            const data = {id:1,word:selectedWord}

            const fs = require("fs")
            const path = "../data/data.json"
            /*fs.writeFile("../data/data.json", JSON.stringify(data,null,4),(err) => {

                if(err){
                    
                    console.error(err)

                }
                else{

                    console.log("Informacion agregada correctamente");

                }

            })*/

            fs.readFile(path, (err, file) => {

                let json = JSON.parse(file)

                console.log(json);

                

                /*fs.writeFile(path, JSON.stringify(s), (err) => {

                    if(err){
                    
                        console.error(err)
    
                    }
                    else{
    
                        console.log("Información agregada correctamente");
    
                    }

                })*/

                

            })

        }

fetchApi()
