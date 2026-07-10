import styles from "./Modal.module.scss"
import { IoClose } from "react-icons/io5";

function Modal({children, onClose}){
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button
                className={styles.closeBtn}
                type="button"
                aria-label="Close-modal"
                onClick={onClose}
                >
                    <IoClose size={20}/>
                </button>
                {children}
            </div>
        </div>
    )
}

export default Modal