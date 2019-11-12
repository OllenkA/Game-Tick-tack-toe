import React from 'react';
import styles from './Footer.module.css';

function Footer(props) {

    return <footer>
        {props.winner || (props.fullness === 0)?<div>
            <button className={styles.buttonStart} onClick={props.startGameAgain}>NEW GAME</button>
            <button className={styles.buttonStart} onClick={props.continueGame}>CONTINUE GAME</button>
        </div> : null}
    </footer>
}

export default Footer;
