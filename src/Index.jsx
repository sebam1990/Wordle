// Import styles

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
        playState: "undefined",
        lastUpdate: window.Date.now(),

    }

    const worldePlay = JSON.parse(localStorage.getItem("wordle-play"))

    worldePlay == null ? localStorage.setItem("wordle-play", JSON.stringify({playData})) : undefined

// Set item "wordle-user" in localStorage if not exists

    const userData = {

        games:1,
        wins:0,
        currentStreak:0,
        maxStreak:0,
        guessDistribution: [0,0,0,0,0,0],

    }

    const worldeUser = JSON.parse(localStorage.getItem("wordle-user"))

    worldeUser == null ? localStorage.setItem("wordle-user", JSON.stringify({userID:"unknow", userStats:userData})) : undefined

// Time and play state vars

    const playState = worldePlay.playState

    const lastUpdate = (window.Date.now() - worldePlay.lastUpdate) / 3600000

    return (

        <main className={styles.indexMain}>

            {lastUpdate >= 24 || playState == undefined ? <WelcomeContent></WelcomeContent> : undefined}

            {lastUpdate < 24 && playState == "onProgress" ? <ContinueContent></ContinueContent> : undefined}

            {lastUpdate < 24 && playState == "won" ? <WonContent></WonContent> : undefined}

            {lastUpdate < 24 && playState == "lost" ? <LostContent></LostContent> : undefined}

        </main>
        
    )

}

export default Index;