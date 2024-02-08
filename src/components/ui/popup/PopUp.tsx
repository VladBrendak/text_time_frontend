import { open } from "fs";
import styles from "./PopUp.module.css";

interface PopupProps {
    open: boolean;
    onClose: () => void;
  }

const PopUp: React.FC<PopupProps> = ({open, onClose}) => {

    if(!open) return null;

    return (
        <div className={styles.background}>
            <div className={styles.popup}>
                <div className={styles.closeP}>
                    <div className={styles.close} onClick={onClose}>×</div>
                </div>
                <h2> Login </h2>
                <p>By continuing, you agree to our User Agreement and acknowledge that you understand the Privacy Policy</p>
                <form>
                    <div>
                        <input className={styles.textinput} type="password"/>
                    </div>
                    <div>
                        <input type="password"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PopUp;