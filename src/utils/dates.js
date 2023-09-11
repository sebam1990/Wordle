// Import library

    import moment from "moment"

// Date in english format

    const EN = () => {

        moment.locale("en");

        return moment().format("MMMM D, YYYY")

    }

// Date in spanish format

    const ES = () => {

        moment.locale("es");

        return moment().format("D") + " de " + moment().format("MMMM, YYYY")

    }

// Export

    export const dates ={

        EN,

        ES

    }