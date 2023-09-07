// Import styles

    import styles from "./MenuModal.module.scss"

    import globalStyles from "../../globalStyles.module.scss"

// Import icons

    import { MdClose } from "react-icons/md"

// Import components

    import InstructionsModal from "./ModalVariations/InstructionsModal.jsx"

    import StatsModal from "./ModalVariations/StatsModal.jsx"

    import SettingsModal from "./ModalVariations/SettingsModal.jsx"

const MenuModal = (props) => {

    // Modal variation

        const modalType = props.type

    // Close modal function

        const closeModal = props.modalToggle

    return(

        <main className={`${styles.modalMain} ${globalStyles.flexAllCenter}`}>

            <section className={styles.contentSection}>

                <section className={`${styles.closeSection} ${globalStyles.flex}`}>

                    <button className={styles.closeBtn} onClick={closeModal}><MdClose size={20}></MdClose></button>

                </section>

                {modalType == "instructions" ? <InstructionsModal></InstructionsModal> : undefined} 

                {modalType == "stats" ? <StatsModal></StatsModal> : undefined}

                {modalType == "settings" ? <SettingsModal></SettingsModal> : undefined}

            </section>

        </main>

    )

}

export default MenuModal;