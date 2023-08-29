// Import styles

    import globalStyles from '../../index.module.scss'
    import styles from './GridRow.module.scss'

// Import context

const GridRow = (props) => {

    // Get playeWord from props

        const playerWord = props.rowWord

    // Get results color code from props

        const cellState = props.cellState

    // Get type row from props

        const mode = props.mode
        
    return(

        <section className={styles.row} mode={mode}>

                <p className={`${globalStyles.flexAllCenter} ${styles.rowLetter}`} cell-state={cellState[0]} mode={mode}>{playerWord[0]}</p>

                <p className={`${globalStyles.flexAllCenter} ${styles.rowLetter}`} cell-state={cellState[1]} mode={mode}>{playerWord[1]}</p>

                <p className={`${globalStyles.flexAllCenter} ${styles.rowLetter}`} cell-state={cellState[2]} mode={mode}>{playerWord[2]}</p>

                <p className={`${globalStyles.flexAllCenter} ${styles.rowLetter}`} cell-state={cellState[3]} mode={mode}>{playerWord[3]}</p>

                <p className={`${globalStyles.flexAllCenter} ${styles.rowLetter}`} cell-state={cellState[4]} mode={mode}>{playerWord[4]}</p>

        </section>

    )

}

export default GridRow;