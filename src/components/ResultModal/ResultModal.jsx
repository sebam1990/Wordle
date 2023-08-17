// Import styles

    import styles from './ResultModal.module.scss'

// Import external dependencies

const ResultModal = (props) => {

    const msg = props.msg

    return(

        <section className={styles.resultModal}>

            <p className={styles.resultText}>{msg}</p>

        </section>

    )

}

export default ResultModal