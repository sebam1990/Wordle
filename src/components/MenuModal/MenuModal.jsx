// Import styles

    import styles from "./MenuModal.module.scss"

    import globalStyles from "../../globalStyles.module.scss"

// Import icons

    import { MdClose } from "react-icons/md"

// Import components

    import InstructionsModal from "./InstructionsModal.jsx"

const MenuModal = () => {

    return(

        <main className={`${styles.modalMain} ${globalStyles.flexAllCenter}`}>

            <section className={styles.instructionsSection}>

                <section className={`${styles.closeSection} ${globalStyles.flex}`}>

                    <button className={styles.closeBtn}><MdClose size={20}></MdClose></button>

                </section>

                <InstructionsModal></InstructionsModal>

            </section>

        </main>

    )

}

export default MenuModal;