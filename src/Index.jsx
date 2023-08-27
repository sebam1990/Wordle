// Import dependencies

    import { Link } from "react-router-dom";

// Import styles

    import globalStyles from "./globalStyles.module.scss"

    import styles from "./index.module.scss"

// Import components

    import WelcomeContent from "./components/IndexContent/WelcomeIndex.jsx"

    import ContinueContent from "./components/IndexContent/ContinueIndex.jsx"

    import WonContent from "./components/IndexContent/WonIndex.jsx"

    import LostContent from "./components/IndexContent/LostIndex.jsx"

const Index = () => {

    // Set item "wordle-play" in localStorage if not exists

    const playData = {

        guess: 0,
        dayWord: "",
        playerWord: [],
        completePlay: false,
        lastUpdate: window.Date.now(),

    }

    const worldePlay = JSON.parse(localStorage.getItem("wordle-play"))

    worldePlay == null ? localStorage.setItem("wordle-play", JSON.stringify({playData})) : undefined

// Set item "wordle-user" in localStorage if not exists

    const userData = {

        games:0,
        wins:0,
        currentStreak:0,
        maxStreak:0,
        guessDistribution: [],

    }

    const worldeUser = JSON.parse(localStorage.getItem("wordle-user"))

    worldeUser == null ? localStorage.setItem("wordle-user", JSON.stringify({userID:undefined, userStats:userData})) : undefined

// Fake vars

    const playState = "won"

    const update = 32

    return (

        <main className={styles.indexMain}>

            {update >= 24 ? <WelcomeContent></WelcomeContent> : undefined}

            {update < 24 && playState == "onProgress" ? <ContinueContent></ContinueContent> : undefined}

            {update < 24 && playState == "won" ? <WonContent></WonContent> : undefined}

            {update < 24 && playState == "lost" ? <LostContent></LostContent> : undefined}

        </main>
        
    )

}

export default Index;