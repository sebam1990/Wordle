// Import styles

    import globalStyles from '../../index.module.scss'
    import styles from './GridRow.module.scss'

const GridRow = (props) => {

    const playerWord = props.rowWord

    return(

        <section className={styles.row}>
            
            {playerWord == undefined ? <p className={`${globalStyles.flexCenter} ${styles.rowLetter}`}>{playerWord}</p> : <p className={`${globalStyles.flexCenter} ${styles.rowLetter} ${styles.rowLetterAnimation}`}>{playerWord}</p>}

            {playerWord == undefined ? <p className={`${globalStyles.flexCenter} ${styles.rowLetter}`}>{playerWord}</p> : <p className={`${globalStyles.flexCenter} ${styles.rowLetter} ${styles.rowLetterAnimation}`}>{playerWord}</p>}
        
            {playerWord == undefined ? <p className={`${globalStyles.flexCenter} ${styles.rowLetter}`}>{playerWord}</p> : <p className={`${globalStyles.flexCenter} ${styles.rowLetter} ${styles.rowLetterAnimation}`}>{playerWord}</p>}

            {playerWord == undefined ? <p className={`${globalStyles.flexCenter} ${styles.rowLetter}`}>{playerWord}</p> : <p className={`${globalStyles.flexCenter} ${styles.rowLetter} ${styles.rowLetterAnimation}`}>{playerWord}</p>}

            {playerWord == undefined ? <p className={`${globalStyles.flexCenter} ${styles.rowLetter}`}>{playerWord}</p> : <p className={`${globalStyles.flexCenter} ${styles.rowLetter} ${styles.rowLetterAnimation}`}>{playerWord}</p>}                        

        </section>

    )

}

export default GridRow;