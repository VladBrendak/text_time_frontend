import { open } from "fs";
import styles from "./PopUp.module.css";

interface PopupProps {
    open: boolean;
    onClose: () => void;
  }

const PopUp: React.FC<PopupProps> = ({open, onClose}) => {

    if(!open) return null;

    return (
        <> 
            <div className={styles.background}>
                <div className={styles.popup}>
                    <h1> Is Open </h1>
                    <button onClick={onClose}>Close Popup</button>
                </div>
            </div>
        </>
    )
}

export default PopUp;