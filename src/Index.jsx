import { Link } from "react-router-dom";

// Set item "wordle-play" in localStorage if not exists

    const worldePlay = JSON.parse(localStorage.getItem("wordle-play"))

    worldePlay == null ? localStorage.setItem("wordle-play", JSON.stringify({guess: 1})) : undefined



const Index = () => {

    return (

        <>
        
            <h1>Wordle</h1>

            <Link to="/play">Jugar</Link>
        
        </>
        
    )

}

export default Index;