const languageList = {

    EN: "English",
    ES: "Español"

}

const english = {

    continueIndex: {

        indexTitle: "Welcome Back",
        indexSubtitle: ["Youʼre on attempt ", " out of 6. Keep it up!"],
        indexBtn: "Continue"

    },
    header: {

        loginBtn: "Login"

    },
    game: {

        resultModalMsg: ["Great","Genius","Excelent"]

    },
    instructionsModal: {

        instructionsTitle: "How To Play",
        instructionsSubtitle: "Guess the Wordle in 6 tries.",
        instructionList: ["Each guess must be a valid 5-letter word.", "The color of the tiles will change to show how close your guess was to the word."],
        examplesTitle: "Examples",
        examplesArticle1: ["A", " is in the word and in the correct spot."],
        examplesArticle2: ["O", " is in the word but in the wrong spot."],
        examplesArticle3: ["A", " is not in the word in any spot."],
        loginSectionText: ["Log in or create a free account", " to link your stats."],
        reminderSectionText: ["A new puzzle is released daily at midnight. If you haven’t already, you can", " sign up", " for our daily reminder email."]

    },
    keyboard: {

        letterRows: [

            ['Q','W','E','R','T','Y','U','I','O','P'],
            ['A','S','D','F','G','H','J','K','L'],
            ['ENTER','Z','X','C','V','B','N','M','Backspace']

        ]

    },
    lostIndex: {

        indexTitle: "Hi Wordler",
        indexSubtitle: "Tomorrow’s a new day, with a new puzzle. See you then.",
        indexBtn: "See Stats"

    },
    settingsModal: {

        settingsTitle: "SETTINGS",
        hardModeTitle: "Hard Mode",
        hardModeSubtitle: "Any revealed hints must be used in subsequent guesses",
        themeTitle: "Dark Theme",
        highContrastTitle: "High Contrast Mode",
        highContrastSubtitle: "For improved color vision",
        feedbackTitle: "Feedback",
        bugTitle: "Report a Bug",
        faqsTitle: "Questions?",

    },
    statsModal: {

        statsTitle: "STATISTICS",
        markerText: ["Played", "Win%", "Current Streak", "Max Streak"],
        distributionTitle: "GUESS DISTRIBUTION",
        loginLink: "Log in or create a free account to link your stats.",
        shareBtnText: "Share"

    },
    welcomeIndex: {

        indexSubtitle: "Get 6 chances to guess a 5-letter word.",
        instructionsBtn: "How to play",
        loginBtn: "Log in",
        playBtn: "Play"

    },
    wonIndex: {

        indexTitle: "Hi Wordler",
        indexSubtitle: "Great job on todayʼs puzzle! Check out your progress.",
        statsBtn: "See Stats",

    }

}

const spanish = {

    continueIndex: {

        indexTitle: "Bienvenido de nuevo",
        indexSubtitle: ["Estás en el intento ", " de 6. ¡Sigue así!"],
        indexBtn: "Continuar"

    },
    header: {

        loginBtn: "Iniciar Sesión"

    },
    game: {

        resultModalMsg: ["Genial","Genio","Excelente"]

    },
    instructionsModal: {

        instructionsTitle: "¿Cómo Jugar?",
        instructionsSubtitle: "Adivina la palabra en 6 intentos.",
        instructionsList: ["Cada respuesta debe ser una palabra válida de 5 letras.", "El color de las celdas cambiará para mostrar qué tan cerca estuvo tu suposición de la palabra."],
        examplesTitle: "Ejemplos",
        examplesArticle1: ["A", " está en la palabra y en el lugar correcto."],
        examplesArticle2: ["O", " está en la palabra pero en el lugar equivocado."],
        examplesArticle3: ["A", " no está en la palabra en ningún lugar."],
        loginSectionText: ["Accede o crea una cuenta gratis", " para vincular tus estadísticas."],
        reminderSectionText: ["Cada medianoche se lanza un nuevo rompecabezas. Si aún no lo has hecho, puedes", " registrarte ", "a nuestro email de recordatorio."]

    },
    keyboard: {

        letterRows: [

            ['Q','W','E','R','T','Y','U','I','O','P'],
            ['A','S','D','F','G','H','J','K','L','Ñ'],
            ['ENVIAR','Z','X','C','V','B','N','M','Backspace']

        ]

    },
    lostIndex: {

        indexTitle: "Hola Wordler",
        indexSubtitle: "Mañana es un nuevo día, con un nuevo rompecabezas. Hasta entonces.",
        indexBtn: "Ver Estadísticas"

    },
    settingsModal: {

        settingsTitle: "AJUSTES",
        hardModeTitle: "Modo difícil",
        hardModeSubtitle: "Cualquier pista revelada debe usarse en intentos posteriores.",
        themeTitle: "Tema oscuro",
        highContrastTitle: "Modo alto contraste",
        highContrastSubtitle: "Para mejorar la visión del color",
        feedbackTitle: "Feedback",
        bugTitle: "Reportar un error",
        faqsTitle: "¿Preguntas?",

    },
    statsModal: {

        statsTitle: "ESTADÍSTICAS",
        markerText: ["Jugados", "%Victorias", "Racha actual", "Mejor Racha"],
        distributionTitle: "DISTRIBUCIÓN DEINTENTOS",
        loginLink: "Accede o crea una cuenta gratis para vincular tus estadísticas.",
        shareBtnText: "Compartir"

    },
    welcomeIndex: {

        indexSubtitle: "Obtenga 6 oportunidades para adivinar una palabra de 5 letras.",
        instructionsBtn: "¿Cómo jugar?",
        loginBtn: "Iniciar sesión",
        playBtn: "Jugar"

    },
    wonIndex: {

        indexTitle: "Hola Wordler",
        indexSubtitle: "¡Buen trabajo con el rompecabezas de hoy! Comprueba tu progreso.",
        statsBtn: "Ver Estadísticas",

    }

}

export default {EN: english, ES: spanish}