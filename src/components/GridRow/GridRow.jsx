// Import styles

    import globalStyles from '../../index.module.scss'
    import styles from './GridRow.module.scss'

// Import context

const GridRow = (props) => {

    // Get playeWord from props

        const playerWord = props.rowWord

    // Get results color code from props

        const cellState = props.cellState

    return(

        <section className={styles.row}>

                <p className={`${globalStyles.flexCenter} ${styles.rowLetter}`} cell-state={cellState[0]}>{playerWord[0]}</p>

                <p className={`${globalStyles.flexCenter} ${styles.rowLetter}`} cell-state={cellState[1]}>{playerWord[1]}</p>

                <p className={`${globalStyles.flexCenter} ${styles.rowLetter}`} cell-state={cellState[2]}>{playerWord[2]}</p>

                <p className={`${globalStyles.flexCenter} ${styles.rowLetter}`} cell-state={cellState[3]}>{playerWord[3]}</p>

                <p className={`${globalStyles.flexCenter} ${styles.rowLetter}`} cell-state={cellState[4]}>{playerWord[4]}</p>

        </section>

    )

}

export default GridRow;