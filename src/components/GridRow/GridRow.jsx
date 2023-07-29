// Import styles

    import globalStyles from '../../index.module.scss'
    import styles from './GridRow.module.scss'

const GridRow = (props) => {

    // Get playeWord from props

        const playerWord = props.rowWord

    return(

        <section className={styles.row}>
            
            {playerWord[0] == undefined ? <p className={`${globalStyles.flexCenter} ${styles.rowLetter}`}>{playerWord[0]}</p> : <p className={`${globalStyles.flexCenter} ${styles.rowLetter} ${styles.rowLetterAnimation}`}>{playerWord[0]}</p>}

            {playerWord[1] == undefined ? <p className={`${globalStyles.flexCenter} ${styles.rowLetter}`}>{playerWord[1]}</p> : <p className={`${globalStyles.flexCenter} ${styles.rowLetter} ${styles.rowLetterAnimation}`}>{playerWord[1]}</p>}
        
            {playerWord[2] == undefined ? <p className={`${globalStyles.flexCenter} ${styles.rowLetter}`}>{playerWord[2]}</p> : <p className={`${globalStyles.flexCenter} ${styles.rowLetter} ${styles.rowLetterAnimation}`}>{playerWord[2]}</p>}

            {playerWord[3] == undefined ? <p className={`${globalStyles.flexCenter} ${styles.rowLetter}`}>{playerWord[3]}</p> : <p className={`${globalStyles.flexCenter} ${styles.rowLetter} ${styles.rowLetterAnimation}`}>{playerWord[3]}</p>}

            {playerWord[4] == undefined ? <p className={`${globalStyles.flexCenter} ${styles.rowLetter}`}>{playerWord[4]}</p> : <p className={`${globalStyles.flexCenter} ${styles.rowLetter} ${styles.rowLetterAnimation}`}>{playerWord[4]}</p>}                        

        </section>

    )

}

export default GridRow;